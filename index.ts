import express from "express";
import dotenv from "dotenv";
// import routes from "./src/routes/routes";
import router from "./src/routes/routes";

async function start(): Promise<void> {
  try {
    dotenv.config();

    const app = express();
    const PORT = process.env.APP_PORT;

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
