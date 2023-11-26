const express = require("express");

const app = express();

app.use(express.static(path.join(process.cwd(), "/public/dist")));

app.listen("8080", () => console.log("--- START ---"));
