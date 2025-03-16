import express from "express";
import {
  registerNewUser,
  loginUser,
  logoutUser,
  getCurrentUser,
  updateAvatar,
  resendVerify,
} from "../controllers/authControllers.js";

import { authSchema } from "../schemas/authSchemas.js";
import validateBody from "../helpers/validateBody.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import { upload } from "../middlewares/upload.js";

const authRouter = express.Router();

authRouter.post("/register", validateBody(authSchema), registerNewUser);
authRouter.post("/login", validateBody(authSchema), loginUser);
authRouter.post("/logout", authMiddleware, logoutUser);
authRouter.get("/current", authMiddleware, getCurrentUser);
authRouter.patch(
  "/avatars",
  authMiddleware,
  upload.single("avatar"),
  updateAvatar
);
authRouter.get("/verify/:verificationToken", authControllers.verify);
authRouter.post(
  "/verify",
  validateBody(varifySchema),
  authControllers.resendVerify
);

export default authRouter;
