"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const database_1 = __importDefault(require("./database"));
const auth_1 = __importDefault(require("./routes/auth"));
const app = (0, express_1.default)();
(0, database_1.default)();
app.use(body_parser_1.default.json({ limit: "30mb" }));
app.use(body_parser_1.default.urlencoded({ limit: "30mb", extended: true }));
app.use((0, cors_1.default)());
app.use("/auth", auth_1.default);
app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}!`));
