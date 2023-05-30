const { Pool } = require('pg');
const pool = new Pool({
    user: 'user',
    host: 'localhost',
    database: 'mybd',
    password: 'user',
    port: '5432'
  });

class ChaineController {

     static async getAll(req, res) {
        const { rows } = await pool.query('SELECT * FROM chaine');
        res.json(rows);
      }

      static async getById(req, res) {
        const { id } = req.params;
        const { rows } = await pool.query('SELECT * FROM chaine WHERE id = $1', [id]);
        if (rows.length === 0) {
          return res.status(404).json({ error: 'Chaine not found' });
        }
        res.json(rows[0]);
      }


      static async create(req, res) {
        const { name,  image } = req.body;
        const { rows } = await pool.query(
          'INSERT INTO chaine (name,  image) VALUES ($1, $2) RETURNING *',
          [name,  image,]
        );
        res.status(201).json(rows[0]);
      }

      static async update(req, res) {
        const { id } = req.params;
        const { name,  image } = req.body;
        const { rows } = await pool.query(
          'UPDATE chaine SET name = $1,  image = $2 WHERE id = $3 RETURNING *',
          [name,  image, id]
        );
        if (rows.length === 0) {
          return res.status(404).json({ error: 'Chaine not found' });
        }
        res.json(rows[0]);
      }

      static async delete(req, res) {
        const { id } = req.params;
        const { rows } = await pool.query('DELETE FROM chaine WHERE id = $1 RETURNING *', [id]);
        if (rows.length === 0) {
          return res.status(404).json({ error: 'Chaine not found' });
        }    
        res.json(rows[0]);
      }
 
  }
  

  module.exports = ChaineController;
