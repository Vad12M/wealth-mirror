import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import cors from 'cors';
import { authRouter } from "./routes/authRoutes.js";
import { adminRouter } from "./routes/adminRoutes.js";
import { carRouter } from "./routes/carRoutes.js";
import { cardRouter } from "./routes/cardRoutes.js";
import { realEstateRouter } from "./routes/realEstateRoutes.js";
import { stockRouter } from "./routes/stockRoutes.js";
import { mutualFundRouter } from "./routes/mutualFundRoutes.js";
import { incomeRouter } from "./routes/incomeRoutes.js";
import { expensesRouter } from "./routes/expensesRoutes.js";
import { fixedDepositRouter } from "./routes/fixedDepostRoutes.js";
import { goldRouter } from "./routes/goldRoutes.js";
import { liquidCashRouter } from "./routes/luquidCashRoutes.js";
import { savingRouter } from "./routes/savingRoutes.js";
import { cryptoRouter } from "./routes/cryptoRoutes.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connected to the database'))
  .catch((err) => console.log('Error connecting to the database', err));


const app = express();
app.use(cors());
app.use(express.json());


app.use(authRouter);
app.use(adminRouter);
app.use(carRouter);
app.use(cardRouter);
app.use(realEstateRouter);
app.use(stockRouter);
app.use(mutualFundRouter);
app.use(incomeRouter);
app.use(expensesRouter);
app.use(fixedDepositRouter);
app.use(goldRouter);
app.use(liquidCashRouter);
app.use(savingRouter);
app.use(cryptoRouter);


app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
