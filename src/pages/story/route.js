import express from "express";
const router = express.Router();

// GET /story
router.get("/story/:slug", (req, res) => {
  const slug = req.params.slug;

  res.render("pages/story/view", { slug });
});

// POST /story -- store highlight
router.post("/story/:slug", (req, res) => {
  const slug = req.params.slug;

  res.render("pages/story/view", {
    success: `storing a highlight ${slug}!`,
  });
});

export default router;
