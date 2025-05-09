import express from "express"
import { addFood } from "../controllers/foodController.js";
import multer from "multer";

const foodRouter = express.Router();



//image storage engine
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Folder for storing uploaded files
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + '-' + file.originalname);
    }
});

const upload = multer({storage:storage})


foodRouter.post("/add", upload.single("image"), addFood)


export default foodRouter;