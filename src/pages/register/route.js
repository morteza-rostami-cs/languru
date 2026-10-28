import express from "express";
const router = express.Router();

// GET /register
router.get("/register", (req, res) => {
  res.render("pages/register/view");
});

// POST /register
router.post("/register", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    // render same page with error
    return res.status(400).render("pages/register/view", {
      error: "please fill in all fields",
    });
  }

  res.render("pages/register/view", {
    success: `Registration successful for ${email}!`,
  });
});

export default router;
