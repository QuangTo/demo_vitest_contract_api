import express from "express";
import userRouter from "./routers/user-router";

const app = express();
const port = 3000;
app.use(express.json());
app.use("/users", userRouter);

app.listen(port, () => {
  console.log("start listen");
});

export default app;
