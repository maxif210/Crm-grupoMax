import express from "express";
import cors from "cors";

import { PORT } from "./config.js";

import clientRoutes from "./routes/client.routes.js";
import usersRoutes from "./routes/users.routes.js";

const app = express();


app.use(cors());
app.use(express.json());

app.use(clientRoutes);
app.use(usersRoutes);



app.listen(PORT);
console.log(`Server is listening on port ${PORT}`);