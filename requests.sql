CREATE TABLE chaine (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  image TEXT NOT NULL
  description TEXT  NULL,
);

CREATE TABLE emission (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  url TEXT NOT NULL,
  image TEXT NOT NULL,
  description TEXT  NULL,
  updated BOOLEAN NOT NULL,
  chaine_id INTEGER NOT NULL REFERENCES chaine(id) ON DELETE CASCADE
);

CREATE TABLE updated_video (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  url TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  chaine_id INTEGER NOT NULL REFERENCES chaine(id) ON DELETE CASCADE,
  emission_id INTEGER NOT NULL REFERENCES emission(id) ON DELETE CASCADE
);

-- Données pour la table "chaine"
INSERT INTO chaine (name, image, description)
VALUES
  ('TF1', 'https://example.com/tf1.jpg',  'Description de TF1'),
  ('France 2', 'https://example.com/france2.jpg',  'France 2'),
  ('France 3', 'https://example.com/france3.jpg',  'France 3'),
  ('Canal+', 'https://example.com/canalplus.jpg',  'Canal+');

-- Données pour la table "emission"
INSERT INTO emission (title, url, image, updated, chaine_id, description)
VALUES
  ('Journal de 20h', 'https://example.com/jt20h', 'https://example.com/jt20h.jpg', FALSE, 1, 'Description de Journal de 20h'),
  ('Plus belle la vie', 'https://example.com/pblv', 'https://example.com/pblv.jpg', TRUE, 2,  'Description de Plus belle la vie'),
  ('Des racines et des ailes', 'https://example.com/drdap', 'https://example.com/drdap.jpg', FALSE, 3,  'Description de Des racines et des ailes'),
  ('Le Bureau des légendes', 'https://example.com/bdl', 'https://example.com/bdl.jpg', TRUE, 4,  'Description de Le Bureau des légendes'),
  ('C dans l''air', 'https://example.com/cdl', 'https://example.com/cdl.jpg', FALSE, 1,  'Description de C dans l''air'),
  ('Faites entrer l''accusé', 'https://example.com/fea', 'https://example.com/fea.jpg', FALSE, 2,  'Description de Faites entrer l''accusé');
