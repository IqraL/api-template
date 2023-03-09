import express from "express";
import cors from "cors";
import { yourExpressRouter } from "./routes";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 5001;

app.use(yourExpressRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
