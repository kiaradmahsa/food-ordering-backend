import express  from "express";
import myUserController from "../controllers/myUserController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateMyUserRequest } from "../middleware/validation";


const router = express.Router();

// /api/my/user
router.get("/",jwtCheck, jwtParse, myUserController.getCurrentUser);
router.post("/",jwtCheck, myUserController.createCurrentUser); //create user
router.put(
    "/",
    jwtCheck,
    jwtParse ,
    validateMyUserRequest,
    myUserController.updateCurrentUser); //update user




export default router;