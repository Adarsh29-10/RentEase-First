import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponses } from '../utils/ApiResponses.js';
import { ApiError } from '../utils/ApiError.js';
import { Room } from '../models/room.model.js'; 
import { Property } from '../models/property.model.js';
import { uploadOnCloudinary } from '../utils/cloudinary.js';
import fs from 'fs';
import { ObjectId } from 'mongoose';

const addNewRoom = asyncHandler(async (req, res) => {
  const {
    roomNumber,
    roomType,
    tenantType,
    floor,
    rentAmount,
    maxOccupancy,
    currentOccupants,
    furnishedStatus,
    hasAttachedBath,
    roomImages,
    description,
  } = req.body;

  // ✅ Validate required text fields
  if (
    [
        roomNumber, roomType,tenantType,floor,rentAmount,
        maxOccupancy,currentOccupants,furnishedStatus,hasAttachedBath,
        roomImages,description,
    ].some(field => typeof field === "string" && field.trim() === "")
  ) {
    throw new ApiError(401, "All fields are required");
  }

  // ✅ Validate images
  if (!req.files || !req.files.roomImages || req.files.roomImages.length === 0) {
    throw new ApiError(400, "At least one image is required");
  }

  // ✅ Check for duplicate property
  const existedRoom = await Room.findOne({
    $and: [{ roomNumber }]
  });

  if (existedRoom) {
    throw new ApiError(400, "Room already exists with this room number");
  }

  // ✅ Upload images to Cloudinary and get URLs
  // const  = [];
  
  let roomImagesLocalPath = "";
  if (
      Array.isArray(req?.files?.roomImages) &&
        req.files.roomImages.length > 0
      ) {
      roomImagesLocalPath = req.files.roomImages[0].path;
  }
//   console.log(roomImagesLocalPath);
//   console.log(req.files);

  if(!roomImagesLocalPath){
    throw new ApiError(500, "Room Image Local path is required");
  }

  const roomImage = await uploadOnCloudinary(roomImagesLocalPath);


  const property = await Property.findOne({ owner: ObjectId(req.user._id) });
  if (!property) {
    throw new ApiError(404, "Property not found for this user");
  }
  console.log(property)
  // ✅ Create property in DB
  const room = await Room.create({
    property: property._id,
    roomNumber,
    roomType,
    tenantType,
    floor,
    rentAmount,
    maxOccupancy,
    currentOccupants,
    furnishedStatus,
    hasAttachedBath,
    roomImages : roomImage?.url,
    description,
  });

  if (!room) {
    throw new ApiError(500, "Error while adding new Room");
  }

  return res.json(new ApiResponses(200, room, "New room added successfully"));
});




const getRooms = asyncHandler(async (req, res, next) => {
  
//   const rooms = await Room.find({ property: req.property._id });
  const rooms = await Property.aggregate([
    {
      $lookup: {
        from: "rooms", // collection name in MongoDB (lowercase + plural by default)
        localField: "_id",     // property _id
        foreignField: "propertyId", // matches Room.propertyId
        as: "rooms"            // output array field
      }
    },
    {
      $project: {
        title: 1,
        city: 1,
        propertyType: 1,
        rooms: {
          roomNumber: 1,
          rent: 1,
          isOccupied: 1
        }
      }
    }
  ]);

  if (!rooms || rooms.length === 0) {
    throw new ApiError(404, "No room found for the verified user");
  }

  return res
  .json(
    new ApiResponses(
      200, 
      rooms, 
      "Rooms retrieved successfully"
    ));
  });
  
  
const deleteProperty = asyncHandler(async (req, res, next) => {
  const { propertyId } = req.body;

  if (!propertyId) {
    throw new ApiError(400, "Property ID is required");
  }

  const deletedProperty = await Property.findOneAndDelete({
    _id: propertyId,
    owner: req.user._id
  });

  if (!deletedProperty) {
    throw new ApiError(404, "Property not found or you are not authorized to delete it");
  }

  return res.json(
    new ApiResponses(
      200,
      deletedProperty,
      "Property deleted successfully"
    )
  );
});   


const deleteAllProperty = asyncHandler(async (req, res, next) => {
  const deletedProperties = await Property.deleteMany({ owner: req.user._id });

  if (deletedProperties.deletedCount === 0) {
    throw new ApiError(404, "No properties found to delete for the verified user");
  }

  return res.json(
    new ApiResponses(
      200,
      null,
      "All properties deleted successfully"
    )
  );
});


export { addNewRoom, getRooms, deleteAllProperty, deleteProperty };

