import Tournament from "../models/Tournament.js";
import User from "../models/User.js";
import mongoose from "mongoose";

// STORE CRUD
/* REGISTER STORE */

export const createTournament = async (req, res) => {
    try {
        console.log(req.body);
        const newTournament  = new Tournament(req.body);
        const tournament  = await newTournament.save();
        
        res.status(200).json({ success: true, tournament: tournament });
    } catch (err) {
        res.status(409).json({ error: err.message });
    }
};

// /* READ STORES*/

export const getUserTournaments = async (req, res) => {
    try {
        const { userid } = req.params;
        console.log(userid);
        const tournaments = await Tournament.find({ userid: ownerId });
        console.log(tournaments);
        res.status(200).json(tournaments);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

export const getAllTournaments = async (req, res) => {
    try {
        const tournaments = await Tournament.find({}).populate('joinedPlayers');
        console.log(tournaments);
        res.status(200).json(tournaments);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};
export const getTournamentDetails = async (req, res) => {
    try {
        const tournamentId = req.params.tid;
        const tournament = await Tournament.findById(tournamentId);
        console.log(tournament);
        res.status(200).json(tournament);
    } catch (err) {
        console.log(err);
        res.status(404).json({ message: err.message });
    }
};

export const joinTournament = async (req, res) => {
    try {
        const userId = req.body.user_id;
        const tournamentId = req.body.tournament_id;
        console.log("userId,tournamentId");
console.log(userId,tournamentId);
        // Find the tournament
        const tournament = await Tournament.findById(tournamentId);

        // Check if the tournament exists
        if (!tournament) {
            return res.status(404).json({ message: "Tournament not found" });
        }

        // Add the user to the tournament
        await tournament.addPlayer(userId);

        // Fetch the updated tournament with populated joinedPlayers
        const updatedTournament = await Tournament.findById(tournamentId).populate('joinedPlayers');
console.log("upd turny ",updatedTournament);
        res.status(200).json(updatedTournament);
    } catch (err) {
        console.log(err);

        res.status(500).json({ message: err.message });
    }
};
// // READ ALL STORE
// export const getAllStore = async (req, res) => {
//     try {
//         // let stores = await Store.find({}).select('-createdAt').select('-__v').select('-updatedAt').select('-followerslist').select('-pincode').select('-longitude').select('-latitude').select('-bookedtimes');
//         // // // //console.log(stores);;
//         // stores.reverse();
//         // // //console.log(stores);
//         let user = await User.findOne({ _id: req.params.userid });
//         console.log(user);

//         // let stores = await getNearbyShops(9.1605347, 76.7151942, 100000000);
//         let stores = await getNearbyShops(user.latitude, user.longitude, 100000000);
//         stores.forEach(element => {
//             // // // //console.log(element);
//             element.type = element._id;
//         });

//         console.log("result ");
//         console.log(stores);
        
//         res.status(200).json(stores);
//     } catch (err) {
//         console.log(err);
//         res.status(404).json({ message: err.message });
//     }
// };


// // READ A SINGLE STORE
// export const getStore = async (req, res) => {
//     try {
//         const { storeId } = req.params;
//         const store = await Store.findById(storeId);

//         store.bookedtimes.push(" f");

//         Store.findByIdAndUpdate(
//             { _id: storeId },
//             {
//                 $set:
//                 {
//                     bookedtimes: store.bookedtimes
//                 }
//             }
//         ).then(async (data, err) => {
//             if (err) {
//                 //console.log(err);
//             } else {
//                 //console.log(data);
//             }
//         })
//         //console.log(store);
//         res.status(200).json(store);
//     } catch (err) {
//         // // //console.log(err);
//         res.status(404).json({ message: err.message });
//     }
// };

// //   DEL STORE
// export const delStore = async (req, res) => {
//     try {
//         const { id } = req.params;
//         Store.remove({ id },
//             function (err, data) {
//                 if (err) {
//                     res.status(200).json({ status: false, err: err });
//                 }
//                 else {
//                     res.status(200).json({ status: true, data: data });
//                 }
//             });
//     } catch (err) {
//         res.status(404).json({ message: err.message });
//     }
// };

// //   SEARCH STORE
// export const searchStore = async (req, res) => {
//     try {
//         const { query } = req.params;
//         // // //console.log(" query ", query);
//         Store.find({ name: { $regex: query, $options: 'i' } })
//             .sort({ name: 'asc' })
//             .exec((err, objects) => {
//                 if (err) {
//                     return res.status(500).send(err);
//                 }
//                 objects.forEach(element => {
//                     // // // //console.log(element);
//                     element.type = element._id;
//                 });
//                 res.json(objects);
//             });

//         // Store.find({ name: { $in:  [query, '']} })
//         //     .sort({ name: 'asc' })
//         //     .exec((err, objects) => {
//         //         if (err) {
//         //             return res.status(500).send(err);
//         //         }
//         //         objects.forEach(element => {
//         //             // // // //console.log(element);
//         //             element.type = element._id;
//         //         });
//         //         res.json( objects);
//         //     });

//         // Model.find({ field: { $eq: value } })
//         // Model.find({ field: { $in: [value1, value2, ...] } })
//         // search array of words

//     } catch (err) {

//         res.status(200).json({ message: "ERR ", ERR: err });
//     }
// };
// //   QUERY STORE

// export const queryStore = async (req, res) => {
//     //console.log('called');
//     try {
//         const { query } = req.params;

//         let arr = [];
//         let services = [];
//         if (query == 'Men') {

//             Store.find({ gender: { $in: ["Men", "Unisex"] } })
//                 .sort({ name: 'asc' })
//                 .exec(async (err, objects) => {
//                     if (err) {
//                         return res.status(500).send(err);
//                     } else {
//                         let a = [];

//                         objects.forEach(element => {
//                             // // // //console.log(element);
//                             element.type = element._id;
//                             a.push(element._id);
//                         });

//                         arr = arr.concat(a);
//                         for (let i = 0; i < arr.length; i++) {
//                             let service = await Service.find({ "storeid": arr[i] });
//                             if (service) {
//                                 services = services.concat(service);
//                             }
//                         }
                       
//                         res.status(200).json(services);
//                     }
//                 });

//         } else {

//             Store.find({ gender: { $in: ["Women", "Unisex"] } })
//                 .sort({ name: 'asc' })
//                 .exec(async (err, objects) => {
//                     if (err) {
//                         return res.status(500).send(err);
//                     } else {
//                         let a = [];

//                         objects.forEach(element => {
//                             // // // //console.log(element);
//                             element.type = element._id;
//                             a.push(element._id);
//                         });
                        
//                         arr = arr.concat(a);
//                         for (let i = 0; i < a.length; i++) {
//                             let service = await Service.find({ "storeid": a[i] });
//                             if (service) {
//                                 services = services.concat(service);
//                             }
//                         }
//                         res.status(200).json(services);
//                     }
//                 });
//         }


//     } catch (err) {
//         //console.log(err);
//         res.status(501).json({ message: "ERR ", ERR: err });
//     }
// };

// // UPDATE STORE
// export const updateStore = async (req, res) => {
//     // // // //console.log('called');
//     try {
//         const { id,status } = req.params;

//         Store.findByIdAndUpdate(req.params.id,
//             { $set: req.body },
//             function (err, data) {
//                 if (err) {
//                     // // // //console.log(err);
//                     res.status(200).json({ status: false, err: err });
//                 }
//                 else {
//                     // // // //console.log(data);
//                     res.status(200).json({ status: true, data: data });
//                 }
//             });
//     } catch (err) {
//         res.status(404).json({ message: err.message });
//     }
// };

