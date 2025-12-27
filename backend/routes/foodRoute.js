import express from "express"
import { addFood, ListFood , removeFood  } from "../controllers/foodController.js";
import multer from "multer";


const foodRouter = express.Router();




//image storage engine
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/"); 
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + '-' + file.originalname);
    }
});

const upload = multer({storage:storage})

foodRouter.post("/add", upload.single("image"),addFood)
foodRouter.get("/list",ListFood)
foodRouter.post("/remove",removeFood);

export default foodRouter;