import express from "express";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import Connection from "./shared/db";
import checkRouting from "./modules/routes/check"


// Config
dotenv.config({ path: path.resolve(__dirname, "./.env") });
const app = express();


// to handle cors
const corsOptions = {
  origin: ["http://192.168.1.79:5173",""],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  optionsSuccessStatus: 200,
  credentials:true
};



// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Routing
app.use("/api/check",checkRouting)

app.listen(process.env.PORTNUMBER || 5000, async () => {
    console.log("server is running")
    await Connection()
})