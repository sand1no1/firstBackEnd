import TweetService from "../db/tweet";

export class TweetController {
    private service: TweetService;

    constructor(service: TweetService){
        this.service = service;
    }

    async getAll(){
        return this.service.getAllTweets();
    }

    async getAllEven(){
        const tweets = this.getAll();
        return (await tweets).filter((tweet) => tweet % 2 == 0);
    }
}

export default TweetController;