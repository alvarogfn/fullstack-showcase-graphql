import express from "express";
import { config } from "dotenv";
import moongose from "mongoose";
import route from "./routes";
import morgan from "morgan";
import { handleError } from "./middlewares/handleError";

config({ override: true });

const app = express();

app.use(morgan("tiny"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(route);

app.use(handleError);

const hostname = process.env.HOSTNAME ?? "localhost";
const port = parseInt(process.env.PORT ?? "3000");

(async () => {
  await moongose.connect("mongodb://db:27017/showcases");
  app.listen(port, hostname, () => {
    const url = `http://${hostname}:${port}`;
    console.log("Your app is running: " + url);
  });
})();
