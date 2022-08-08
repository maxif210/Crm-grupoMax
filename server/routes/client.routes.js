import { Router } from "express";
import { getClients, getClient, deleteClient, updateClient, createClient } from "../controllers/client.controller.js";
const router = Router();

router.get('/clients', getClients);
router.get('/clients/:id', getClient);
router.post('/clients', createClient);
router.put('/clients/:id', updateClient);
router.delete('/clients/:id', deleteClient);

export default router;