import express from "express";
const router = express.Router();

router.get("/ai/chat/:id", (req, res) => {
  const chatId = req.params.id;

  res.render("pages/ai_chat/view", { chatId });
});

export default router;
