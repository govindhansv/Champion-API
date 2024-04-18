import mongoose from "mongoose";

const TournamentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Guser'
        },
        format: {
            type: String,
        },
        count: {
            type: Number,
        },
        format: {
            type: String,
        },
        isPublic: {
            type: Boolean,
        },
        startDate: {
            type: Date,
            default:"2024-04-29T18:30:00.000Z"
        },
        joinedPlayers: {
            type: [String],
            default: []
        },
        duration:{
            type:Number,
            default:0
        },
        prize:{
            type:Number,
            default:0
        },
        joinFee:{
            type:Number,
            default:0
        },
        endDate: {
            type:Date,
            default:"2024-04-29T18:30:00.000Z"
        }
    },
    { timestamps: true }
);
// [{ type: mongoose.Schema.Types.ObjectId, ref: 'Guser' }]

// Method to add a user to the tournament
TournamentSchema.methods.addPlayer = function (userId) {
console.log("use rid mong",userId);    

    if (!this.joinedPlayers.includes(userId)) {
        this.joinedPlayers.push(userId);
        return this.save();
    }
    return Promise.resolve(this); // If the user is already joined, resolve with the current instance
};

const Tournament = mongoose.model("Tournament", TournamentSchema);
export default Tournament;
