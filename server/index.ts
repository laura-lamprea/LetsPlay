import express from 'express';
import cors from "cors";
import gameRoutes from './src/routes/index'

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
    cors({
        origin: process.env.CORS_ALLOWS_ORIGIN,
        methods: ["GET", "POST", "PATCH", "DELETE"],
    })
);

app.use(express.json());
app.use("/api", gameRoutes);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
