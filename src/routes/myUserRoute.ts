import express from "express"   
import MyuserContoller from "../controllers/MyuserContoller";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateMyUserRequest } from "../middleware/validation";
const router = express.Router();

router.get("/", jwtCheck,jwtParse,MyuserContoller.getCurrentUser);
router.post("/", jwtCheck,  MyuserContoller.createCurrentUser);
router.put("/",jwtCheck,validateMyUserRequest,jwtParse,MyuserContoller.updateCurrentUser);

export default router;