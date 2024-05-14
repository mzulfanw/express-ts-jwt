import express from "express";
import dotenv from "dotenv";
import apiServices from '../src/api'
import {errorHandler} from "./middleware";

// configures dotenv to work in your application
dotenv.config();
const app = express();
// get PORT of server
const PORT = process.env.PORT;

app.use(express.json());
// register api services
app.use('/api/v1/', apiServices)

app.use(errorHandler)

app.listen(PORT, () => {
  console.log("Server running at PORT: ", PORT);
}).on("error", (error) => {
  // gracefully handle error
  throw new Error(error.message);
});