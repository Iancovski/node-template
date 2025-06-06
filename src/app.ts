import express from "express";
import userRouter from "./routes/user.route";
import environment from "./config/environment";

const app = express();

app.use(express.json());

app.use("/api/users", userRouter);

const port = environment.port || 3000;

app.listen(port, () => {
    console.info(`Server listening on http://localhost:${port}`);
});
