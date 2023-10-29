"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const cors_1 = tslib_1.__importDefault(require("cors"));
const index_1 = tslib_1.__importDefault(require("./src/routes/index"));
require("dotenv").config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use((0, cors_1.default)({
    origin: process.env.CORS_ALLOWS_ORIGIN,
    methods: ["GET", "POST", "PATCH", "DELETE"],
}));
app.use(express_1.default.json());
app.use("/api", index_1.default);
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
