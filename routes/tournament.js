import express from "express";
import { createTournament,getAllTournaments,getUserTournaments,joinTournament,getTournamentDetails } from "../controllers/tournament.js";

const router = express.Router();

// google user
router.post("/create", createTournament);
router.get("/get/user/all/:userid", getUserTournaments);
router.get("/get/all", getAllTournaments);
router.get("/get/:tid", getTournamentDetails);
router.post("/join/", joinTournament);
 
// router.post("/login", login);
// router.post("/register", register);
// router.post("/update/:userid", update);
// router.get("/location/:userid", userlocation);
// router.get("/saved/:userid", getUserSavedStores);

export default router;
