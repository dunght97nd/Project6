import express from "express";
import { createMessage, getMessages } from "../controllers/message.js";
import {
  verifyToken,
  verifyTokenAndAuth,
  verifyTokenAndAdmin,
} from "./verifyToken.js";

const router = express.Router();

router.post("/", verifyToken, createMessage);
router.get("/:id", verifyToken, getMessages);

export default router;
