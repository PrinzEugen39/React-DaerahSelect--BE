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
