import express from "express";
import dotenv from "dotenv";
import router from "./src/routes/routes";
import cors from 'cors';

async function start(): Promise<void> {
  try {
    dotenv.config();

    const app = express();
    const PORT = process.env.APP_PORT;

    app.use(cors());
    app.use(express.json());
    app.use(router);



    app.listen(PORT, () => {
      console.log("Server started on port " + PORT);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

void start();
