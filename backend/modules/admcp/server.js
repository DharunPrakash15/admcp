
import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

export default function exportAdMcpRouter(app) {

    // Sample route handler
    const adMcpRouter = express.Router();

    // Resolve __dirname
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    // Serve frontend from Program Files folder
    adMcpRouter.use(express.static(path.join(__dirname, "../../../frontend/app/admcp/dist")));

    adMcpRouter.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../../../frontend/app/admcp/dist/index.html"));
    });


    adMcpRouter.get("/status", (req, res) => {
        res.json({ module: "AD MCP Module", status: "running" });
    });


    app.use("/admcp", adMcpRouter);

}