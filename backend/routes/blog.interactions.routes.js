import express from "express";
import {
  addComment,
  deleteBlog,
  getComments,
  getReplies,
  isLikedByUser,
  likeBlog,
} from "../controllers/blog.inteactions.controllers.js";
import { Auth } from "../middleware/auth.middleware.js";

const blogInteractionRouter = express.Router();

blogInteractionRouter.post("/like", Auth, likeBlog);
blogInteractionRouter.post("/isLiked", Auth, isLikedByUser);

blogInteractionRouter.post("/comment", Auth, addComment);
blogInteractionRouter.post("/comment/get", getComments);

blogInteractionRouter.post("/reply", getReplies);

blogInteractionRouter.post("/delete", Auth, deleteBlog);

export default blogInteractionRouter;

// Like the blog `${"https://medium-ix5b.onrender.com"}/blog/like`
// Checking if the user has liked that blog - /isLiked
// `${"https://medium-ix5b.onrender.com"}/blog/comment`
