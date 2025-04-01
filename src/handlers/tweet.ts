import { Request, Response, NextFunction } from "express";
import TweetService from "../db/tweet";
import TweetController from "../controllers/tweet";

const controller = new TweetController(new TweetService());

class TweetHttpHandler{

    async getTweets(request: Request, response: Response, next: NextFunction) {  
        try{
            const tweets = await controller.getAllEven();
            response.json(tweets);

        } catch (error) {
            next(error);
        }
    }
    async getTweetById(request: Request, response: Response, next: NextFunction) {
    }    
    async updateTweet(request: Request, response: Response, next: NextFunction) {
    }
    async deleteTweet(request: Request, response: Response, next: NextFunction) {
    }

}

export default TweetHttpHandler;
