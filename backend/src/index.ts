import express from "express";
import cors from "cors";
import morgan from "morgan";
import router from "./router/index.route";

const app = express();
app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["POST"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(morgan("dev"));
app.use(router);

app.listen(3000, () => {
  console.log("server is run on http://localhost:3000/");
});
