import mongoose, {Schema} from 'mongoose'

const propertySchema = new Schema(
    {
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },


        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        

        address: {
            street: { type: String, required: true },
            city: { type: String, required: true },
            state: { type: String, required: true },
            pincode: { type: String, required: true },
            landmark: { type: String },
        },


        amenities: {
            type: [String],
            required: true
        },
        isFurnitured: {         //for entire only?
            type: Boolean,
            required: true
        },


        propertyType: {
            type: String,   //1bhk, 2bhk, villa, bgera bgera
            required: true
        },
        rentType: {
            type: String,
            enum: [entire, roomwise],
            required: true,
        },

        //if entire
        // rentAmount
          

        images: {
            type: [String],
            required: true
        },

        isFullyRented: {
            type: Boolean,
            default: false,
        },
    }
)

export const Property = mongoose.model("Property", propertySchema);