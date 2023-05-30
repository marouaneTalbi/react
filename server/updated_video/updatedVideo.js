const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

const pool = new Pool({
    user: 'user',
    host: 'localhost',
    database: 'mybd',
    password: 'user',
    port: '5432'
  });

class UpdatedVideoController {

     static async getAll(req, res) {
        const { rows } = await pool.query('SELECT * FROM updated_video');
        res.json(rows);
      }

      static async getById(req, res) {
        const { id } = req.params;
        const { rows } = await pool.query('SELECT * FROM updated_video WHERE id = $1', [id]);
        if (rows.length === 0) {
          return res.status(404).json({ error: 'Chaine not found' });
        }
        res.json(rows[0]);
      }

      static async create(req, res) {
        // console.log('===>',req.body)
        const { name, url,  chaine_id, emission_id } = req.body;
        const { rows } = await pool.query(
          'INSERT INTO updated_video (name, url, chaine_id, emission_id) VALUES ($1, $2, $3, $4) RETURNING *',
          [name, url,  chaine_id, emission_id]
        );
        res.status(201).json(rows[0]);
      }

      static async getVideoByName(req, res) {
        const { filename } = req.params;
        const videoPath = path.join(__dirname, '../telechargement', filename);
      
        fs.stat(videoPath, (err, stats) => {
          if (err) {
            console.error(err);
            res.status(404).json({ error: 'La vidéo demandée n\'existe pas' });
            return;
          }
      
          const range = req.headers.range;
          const fileSize = stats.size;
          const chunkSize = 10 ** 6; // Taille du chunk (1 Mo)
      
          if (range) {
            // Récupération partielle de la vidéo
            const [start, end] = range.replace(/bytes=/, '').split('-');
            const startByte = parseInt(start, 10);
            const endByte = Math.min(parseInt(end, 10), fileSize - 1);
      
            const contentLength = endByte - startByte + 1;
            const headers = {
              'Content-Range': `bytes ${startByte}-${endByte}/${fileSize}`,
              'Accept-Ranges': 'bytes',
              'Content-Length': contentLength,
              'Content-Type': 'video/mp4'
            };
      
            res.writeHead(206, headers);
      
            const fileStream = fs.createReadStream(videoPath, { start: startByte, end: endByte });
            fileStream.pipe(res);
          } else {
            // Récupération complète de la vidéo
            const headers = {
              'Content-Length': fileSize,
              'Content-Type': 'video/mp4'
            };
      
            res.writeHead(200, headers);
      
            const fileStream = fs.createReadStream(videoPath);
            fileStream.pipe(res);
          }
        });
        
      }

      static async getUpdatedVideos(req, res) {
        const videoDirectory = path.join(__dirname, '../telechargement');
        fs.readdir(videoDirectory, (err, files) => {
          if (err) {
            console.error(err);
            res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des vidéos' });
          } else {
            const videoFiles = files.filter(file => path.extname(file) === '.mp4');
      
            res.json({ videos: videoFiles });
          }
        });
      }
  }
  

  module.exports = UpdatedVideoController;
