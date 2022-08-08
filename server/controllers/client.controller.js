import { pool } from "../db.js";

export const getClients = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM clients ORDER BY createAt ASC"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getClient = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM clients WHERE id = ?", [
      req.params.id,
    ]);

    if (result.length === 0)
      return res.status(404).json({ message: "client not found" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createClient = async (req, res) => {
  try {
    const { tel, name, email, age } = req.body;
    const [result] = await pool.query(
      "INSERT INTO clients(tel, name, email, age) VALUES (?, ?, ?, ? )",
      [tel, name, email, age]
    );
    res.json({
      id: result.insertId,
      tel,
      name,
      email,
      age
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateClient = async (req, res) => {
  try {
    const result = await pool.query("UPDATE clients SET ? WHERE id = ?", [
      req.body,
      req.params.id,
    ]);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteClient = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM clients WHERE id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "client not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};