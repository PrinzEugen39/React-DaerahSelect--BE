import express, { Request, Response } from "express";
import iTodos from "./src/interface/Todos";
import Todos from "./src/mocks/Todos";

const app = express();
const PORT = 5000;

app.use(express.json());

app.get("/", (req: Request, res: Response): Response => {
  return res.status(200).json({ message: "OK" });
});

app.get("/todos", (req: Request, res: Response): Response => {
  return res.status(200).json({ data: Todos });
});

app.get("/todo/:id", (req: Request, res: Response): Response => {
  const { id } = req.params;
  const data = Todos.find((data) => data.id === Number(id));
  return res.status(200).json({ data });
});

app.post("/todos", (req: Request, res: Response): Response => {
  const data: iTodos = req.body;
  Todos.push(data);

  return res.status(201).json({ data: Todos });
});

app.delete("/todo/:id", (req: Request, res: Response): Response => {
  const { id } = req.params;
  const data: iTodos[] = Todos.filter((data) => data.id !== Number(id));
  return res.status(200).json({ data });
});

async function start(): Promise<void> {
  try {
    app.listen(PORT, () => {
      console.log("Server started on port " + PORT);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

void start();
