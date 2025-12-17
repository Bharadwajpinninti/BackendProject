import express from "express";
import {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook
} from "../controllers/bookController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getBooks);
router.get("/:id", getBookById);
router.post("/", protect, createBook);
router.put("/:id", protect, updateBook);
router.delete("/:id", protect, deleteBook);

export default router;
