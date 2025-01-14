import express,{Application,Request,Response,NextFunction} from 'express';
import crypto from "crypto";
import dotenv from "dotenv";
import config from "config";
import bodyParser from "body-parser"
import { connectdb } from './config/db';

const app: Application = express();

// let token =crypto.randomBytes(64).toString('hex');
// console.log(token)

const port=3000;
dotenv.config();

//connect database
connectdb();


//Values inside the environoment variable
//console.log(process.env.ACCESS_TOKEN)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/helloworld", (req: Request, res: Response) => {
  res.send("Hello World");
});
 
app.listen(port, () => {
      console.log("Server started on port 3000!");
});