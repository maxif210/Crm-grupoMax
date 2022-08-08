import express from "express";
import cors from "cors";
import {dirname, join} from 'path'
import {fileURLToPath} from 'url'
import { PORT } from "./config.js";

import clientRoutes from "./routes/client.routes.js";
import usersRoutes from "./routes/users.routes.js";
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(__dirname)

app.use(cors());
app.use(express.json());

app.use(usersRoutes);
app.use(clientRoutes);

app.use(express.static(join(__dirname, '../client/dist')))

app.listen(PORT);
console.log(`Server is listening on port ${PORT}`);