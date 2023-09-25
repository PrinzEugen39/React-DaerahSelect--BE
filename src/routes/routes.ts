import { Router } from "express";
import TodoControllers from "../controllers/TodoControllers";

// const app = express();
const router = Router();

router.get('/todos', TodoControllers.find)
router.get('/todo/:id', TodoControllers.findOne)
router.post('/todos', TodoControllers.create)
router.put('/todo/:id', TodoControllers.update)
router.delete('/todo/:id', TodoControllers.delete)


export default router

// app.use(express.json());

// app.get("/todos", async (req: Request, res: Response): Promise<Response> => {
//   try {
//     const allTodos = await pool.query(
//       "SELECT * FROM todo ORDER BY todo_id ASC;"
//     );
//     return res.status(200).json(allTodos.rows);
//   } catch (error) {
//     return res.status(500).json({ error: "An error occurred" });
//   }
// });

// app.get("/todo/:id", async (req: Request, res: Response): Promise<Response> => {
//   try {
//     const { id } = req.params;

//     const todoGet = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
//       id,
//     ]);

//     if (todoGet.rows.length === 0)
//       return res.status(404).json({ Error: "Todo not found" });

//     const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
//       id,
//     ]);

//     return res.status(200).json(todo.rows[0]);
//   } catch (error) {
//     return res.status(500).json({ message: "Something error when find one" });
//   }
// });

// app.post("/todos", async (req, res) => {
//   try {
//     const { description } = req.body;
//     const newTodo = await pool.query(
//       "INSERT INTO todo (description) VALUES($1) RETURNING *",
//       [description]
//     );

//     return res.status(200).json(newTodo.rows[0]);
//   } catch (error) {
//     return res.status(500).json({ message: "Something error when POST" });
//   }
// });

// app.put("/todo/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { description } = req.body;

//     const updateTodo = await pool.query(
//       "UPDATE todo SET description = $1 WHERE todo_id = $2",
//       [description, id]
//     );

//     return res.status(200).json("Todo was updated successfully");
//   } catch (error) {
//     return res.status(500).json({ message: "Something error when PUT" });
//   }
// });

// app.delete(
//   "/todo/:id",
//   async (req: Request, res: Response): Promise<Response> => {
//     try {
//       const { id } = req.params;
//       const todoToDelete = await pool.query(
//         "SELECT * FROM todo WHERE todo_id = $1",
//         [id]
//       );

//       if (todoToDelete.rows.length === 0)
//         return res.status(404).json({ Error: "Todo not found" });

//       const deleteTodo = await pool.query(
//         "DELETE from todo WHERE todo_id = $1",
//         [id]
//       );

//       return res.status(200).json("Todo was updated successfully");
//     } catch (error) {
//       return res
//         .status(500)
//         .json({ message: "Something error while delete todo" });
//     }
//   }
// );

// export default app;
