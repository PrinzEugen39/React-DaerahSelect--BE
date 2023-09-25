import { Request, Response } from "express";
import pool from "../config/db";

export default new (class TodoService {
  async find(req: Request, res: Response): Promise<Response> {
    try {
      const allTodos = await pool.query(
        "SELECT * FROM todo ORDER BY todo_id ASC;"
      );
      return res.status(200).json(allTodos.rows);
    } catch (error) {
      return res.status(500).json({ error: "An error occurred" });
    }
  }

  async findOne(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;

      const todoGet = await pool.query(
        "SELECT * FROM todo WHERE todo_id = $1",
        [id]
      );

      if (todoGet.rows.length === 0)
        return res.status(404).json({ Error: "Todo not found" });

      const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
        id,
      ]);

      return res.status(200).json(todo.rows[0]);
    } catch (error) {
      return res.status(500).json({ message: "Something error when find one" });
    }
  }

  async create(req: Request, res: Response): Promise<Response> {
    try {
      const { description } = req.body;
      const newTodo = await pool.query(
        "INSERT INTO todo (description) VALUES($1) RETURNING *",
        [description]
      );

      return res.status(200).json(newTodo.rows[0]);
    } catch (error) {
      return res.status(500).json({ message: "Something error when POST" });
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const todoToUpdate = await pool.query(
        "SELECT * FROM todo WHERE todo_id = $1",
        [id]
      );

      if (todoToUpdate.rows.length === 0)
        return res.status(404).json({ Error: "Todo not found" });
      const { description } = req.body;

      const updateTodo = await pool.query(
        "UPDATE todo SET description = $1 WHERE todo_id = $2",
        [description, id]
      );

      return res.status(200).json("Todo was updated successfully");
    } catch (error) {
      return res.status(500).json({ message: "Something error when PUT" });
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const todoToDelete = await pool.query(
        "SELECT * FROM todo WHERE todo_id = $1",
        [id]
      );

      if (todoToDelete.rows.length === 0)
        return res.status(404).json({ Error: "Todo not found" });

      const deleteTodo = await pool.query(
        "DELETE from todo WHERE todo_id = $1",
        [id]
      );

      return res.status(200).json("Todo was updated successfully");
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Something error while delete todo" });
    }
  }
})();
