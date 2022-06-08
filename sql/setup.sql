-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

DROP table if exists books;

CREATE table books (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR NOT NULL,
    genre VARCHAR NOT NULL,
    url VARCHAR,
    released INT NOT NULL
);

INSERT INTO books (name, genre, url, released) VALUES
('1984', 'dystopian function', 'https://en.wikipedia.org/wiki/Nineteen_Eighty-Four', 1949),
('The Most Dangerous Game', 'fiction', 'https://en.wikipedia.org/wiki/The_Most_Dangerous_Game', 1932),
('The Kite Runner', 'historical fiction', 'https://en.wikipedia.org/wiki/The_Kite_Runner', 2003),
('Enders Game', 'science fiction', 'https://en.wikipedia.org/wiki/Ender%27s_Game', 1985),
('Dune', 'epic science fiction', 'https://en.wikipedia.org/wiki/Dune_(novel)', 1965),
('Of Mice and Men', 'fiction', 'https://en.wikipedia.org/wiki/Of_Mice_and_Men', 1937);