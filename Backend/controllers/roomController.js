const Room = require('../models/roomModel.js');


    
exports.newRoom = async (req, res)=>{
    try{

        const {roomName, roomNumber, roomTStatus, roomSize, roomPrice} = req.body;

        const room = new Room({
            roomName,
            roomNumber,
            roomTStatus,
            roomSize,
            roomPrice
        })

        await room.save();
        res.status(201).json({message: 'Room data added successfuly', Room: room})

    }catch(error){
        console.error(error);
        res.status(500).json({message: 'Failed to add Room', error: error.message})
    }
}


exports.getRooms =  async (req, res)=>{
    try{
        const rooms = await Room.find();
        res.status(201).json({message: 'Room data fetched succesfully', rooms});
    }catch(error){
        console.error("Error Fetching Rooms", error);
        res.status(500).json({ message: 'Failed to add room', error: error.message });
    }

};

exports.getRoomsById = async (req, res) =>{
    try{
        const {rid} = req.params;
        const room = await Room.findById(rid);
        // const room = await Room.findOne({ rid: rid })
        res.status(201).json({message: 'Room data fetched succesfully by id', room});
    }catch(error){
        console.error("Error Fetching Rooms", error);
        res.status(500).json({ message: 'Failed to fetch by id', error: error.message });
    }
}