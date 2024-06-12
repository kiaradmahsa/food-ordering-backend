//All the end points for interacting with all the restaurants in the app

import express from "express";
import { param } from "express-validator";
import RestaurantController from "../controllers/RestaurantController";

const router = express.Router();

router.get("/:restaurantId",
            param("restaurantId").
            isString().
            trim().
            notEmpty()
            .withMessage("restaurantId parameter must be a valid string"),
            RestaurantController.getRestaurant
);


//api/restaurant/search/city(london)

router.get(
    "/search/:city" ,
    param("city").
    isString().
    trim().
    notEmpty()
    .withMessage("City parameter must be a valid string"),
    RestaurantController.searchRestaurant
);

export default router;