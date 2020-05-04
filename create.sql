CREATE TABLE flights6 (id INT PRIMARY KEY, origin_id INT NOT NULL, destination_id INT NOT NULL, duration INT NOT NULL);

INSERT INTO flights6 (id, origin_id, destination_id, duration) VALUES (1, 1, 4, 415);
INSERT INTO flights6 (id, origin_id, destination_id, duration) VALUES (2, 2, 7, 760);
INSERT INTO flights6 (id, origin_id, destination_id, duration) VALUES (3, 3, 8, 700);
INSERT INTO flights6 (id, origin_id, destination_id, duration) VALUES (4, 1, 7, 435);
INSERT INTO flights6 (id, origin_id, destination_id, duration) VALUES (5, 5, 7, 245);
INSERT INTO flights6 (id, origin_id, destination_id, duration) VALUES (6, 6, 1, 455);

CREATE TABLE passengers2 (id INT PRIMARY KEY NOT NULL, name VARCHAR(20) NOT NULL, flight_id INTEGER REFERENCES flights6);

INSERT INTO passengers2 (id, name, flight_id) VALUES (1, 'Alice', 1);
INSERT INTO passengers2 (id, name, flight_id) VALUES (2, 'Bob', 1);
INSERT INTO passengers2 (id, name, flight_id) VALUES (3, 'Charlie', 2);
INSERT INTO passengers2 (id, name, flight_id) VALUES (4, 'Dave', 2);
INSERT INTO passengers2 (id, name, flight_id) VALUES (5, 'Erin', 4);
INSERT INTO passengers2 (id, name, flight_id) VALUES (6, 'Frank', 6);
INSERT INTO passengers2 (id, name, flight_id) VALUES (7, 'Grace', 6);