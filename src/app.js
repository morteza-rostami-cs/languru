import express from "express";
import path from "node:path";
import ejsMate from "ejs-mate";

// get file path
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url); // file path
const __dirname = dirname(__filename); // parent of current file

const app = express();

// parse html form submissions
app.use(express.urlencoded({ extended: true }));

// configure ejs
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname)); // where ejs files are? in /src

// app.get("*", (req, res) => {
//   return res.json({ status: "ok" });
// });

// register pages
import registerRoute from "./pages/register/route.js";
import homeRoute from "./pages/index/route.js";
import loginRoute from "./pages/login/route.js";
import storyRoute from "./pages/story/route.js";
import aiChatRoute from "./pages/ai_chat/route.js";
import profileRoute from "./pages/profile/route.js";

app.use(homeRoute);
app.use(registerRoute);
app.use(loginRoute);
app.use(storyRoute);
app.use(aiChatRoute);
app.use(profileRoute);

export default app;
