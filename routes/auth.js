import express from "express";
import { saveUser } from "../controllers/auth.js";
// import { getUserSavedStores, login,register,update,userlocation } from "../controllers/auth.js";

const router = express.Router();

// google user
router.post("/save-user", saveUser);

// router.post("/login", login);
// router.post("/register", register);
// router.post("/update/:userid", update);
// router.get("/location/:userid", userlocation);
// router.get("/saved/:userid", getUserSavedStores);

export default router;
