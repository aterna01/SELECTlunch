BEGIN;

DROP TABLE IF EXISTS people cascade;
DROP TABLE IF EXISTS lunches cascade;
DROP TABLE IF EXISTS bookings cascade;

CREATE TABLE people (
  people_id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(100) NOT NULL
);

CREATE TABLE lunches (
  lunch_id SERIAL PRIMARY KEY NOT NULL,
  lunch VARCHAR(100) NOT NULL
);

INSERT INTO lunches (lunch)
VALUES  ('Italian'),
        ('Corbyn'),
        ('Chinese'),
        ('Indian');


CREATE TABLE bookings (
  PRIMARY KEY (people_id, lunch_id),
  people_id INTEGER REFERENCES people(people_id) NOT NULL,
  lunch_id INTEGER REFERENCES lunches(lunch_id) NOT NULL,
  vegy BOOLEAN,
  paid BOOLEAN
);

COMMIT;
