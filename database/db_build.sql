BEGIN;

DROP TABLE IF EXISTS people cascade;

CREATE TABLE people (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(100) NOT NULL
);



  -- DROP TABLE IF EXISTS lunches cascade;

  -- CREATE TABLE lunches (
  --   id SERIAL PRIMARY KEY NOT NULL,
  --   lunch VARCHAR(100) NOT NULL,
  -- );
  --
  -- INSERT INTO lunches (lunch) VALUES
  --   ('Italian'),
  --   ('Indian'),
  --   ('Chinese'),
  --   ('Corbyn');
  --
  -- DROP TABLE IF EXISTS bookings cascade;
  --
  --   CREATE TABLE bookings (
  --     id SERIAL PRIMARY KEY NOT NULL,
  --     PRIMARY KEY VARCHAR(100) NOT NULL,
  --   );


COMMIT;
