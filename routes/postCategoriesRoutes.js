import express from "express";
import {
  createPostCategory,
  deletePostCategory,
  getAllPostCategories,
  updatePostCategory,
} from "../controllers/postCategoriesControllers";
import { adminGuard, authGuard } from "../middleware/authMiddleware";
const router = express.Router();
router
  .route("/")
  .post(authGuard, adminGuard, createPostCategory)
  .get(getAllPostCategories);

router
  .route("/:postCategoryId")
  .put(authGuard, adminGuard, updatePostCategory)
  .delete(authGuard, adminGuard, deletePostCategory);

export default router;
