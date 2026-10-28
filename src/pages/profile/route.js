import express from "express";
const router = express.Router();

router.get("/profile/:username", (req, res) => {
  const username = req.params.username;

  res.render("pages/profile/view", { username });
});

export default router;
