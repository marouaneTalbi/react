// Définition de la classe pour les requêtes d'émissions
const { Pool } = require('pg');
const pool = new Pool({
    user: 'user',
    host: 'localhost',
    database: 'mybd',
    password: 'user',
    port: '5432'
  });

class EmissionController {
    
    static async getAll(req, res) {
      const { rows } = await pool.query('SELECT * FROM emission');
      res.json(rows);
    }
  
    static async getById(req, res) {
      const { id } = req.params;
      const { rows } = await pool.query('SELECT * FROM emission WHERE id = $1', [id]);
      if (rows.length === 0) {
        return res.status(404).json({ error: 'Emission not found' });
      }
      res.json(rows[0]);
    }

    static async getByChaineId(req, res) {
      const { chaine_id } = req.params;
      const { rows } = await pool.query('SELECT * FROM emission WHERE chaine_id = $1', [chaine_id]);
      if (rows.length === 0) {
        return res.status(404).json({ error: 'chaines not found' });
      }
      res.json(rows);
    }

  
    static async create(req, res) {
      const { title, url, image, updated, chaine_id } = req.body;
      const { rows } = await pool.query(
        'INSERT INTO emission (title, url, image, updated, chaine_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [title, url, image, updated, chaine_id]
      );
      res.status(201).json(rows[0]);
    }
  
    static async update(req, res) {
      const { id } = req.params;
      const { title, url, image, updated, chaine_id } = req.body;
      const { rows } = await pool.query(
        'UPDATE emission SET title = $1, url = $2, image = $3, updated = $4, chaine_id = $5 WHERE id = $6 RETURNING *',
        [title, url, image, updated, chaine_id, id]
      );
      if (rows.length === 0) {
        return res.status(404).json({ error: 'Emission not found' });
      }
      res.json(rows[0]);
    }
  
    static async delete(req, res) {
      const { id } = req.params;
      const { rows } = await pool.query('DELETE FROM emission WHERE id = $1 RETURNING *', [id]);
      if (rows.length === 0) {
        return res.status(404).json({ error: 'Emission not found' });
      }
      res.json(rows[0]);
    }
  }
  

  module.exports = EmissionController;
