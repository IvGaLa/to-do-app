CREATE TABLE tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user TEXT NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    finished INTEGER DEFAULT 0,
    createdAt TEXT,
    modifiedAt TEXT,
    finishedAt TEXT
);


INSERT INTO tasks (user, title, description, finished, createdAt, modifiedAt, finishedAt) VALUES
('c9b2b8f5-6a1e-4a15-9c89-5e5dcb5e8b73', 'Hacer la compra', 'Comprar frutas y verduras para la semana.', 0, '2024-05-02T14:30', '2024-06-01T14:30', NULL),
('d1c3f8e4-7d5b-4ab7-9a5c-6c90f285eabc', 'Estudiar React', 'Repasar conceptos de React y practicar con ejemplos.', 1, '2024-05-02T09:00', '2024-08-02T09:00', '2024-12-20T11:00'),
('8eaf7c2e-309f-4b15-9474-176e328e660d', 'Lavar la ropa', 'Lavar y secar la ropa de la semana.', 0, '2024-03-03T16:45', '2024-05-03T16:45', NULL),
('f8dff3c8-e61b-41c0-bd9d-14498c887ef4', 'Hacer ejercicio', 'Salí a correr durante 30 minutos.', 1, '2024-01-04T07:30', '2024-05-04T07:30', '2024-07-04T08:00'),
('12c5e593-6f92-4c7d-bb6a-90dc814f4c2f', 'Leer un libro', 'Leer al menos un capítulo del libro que estoy leyendo.', 1, '2023-05-15T20:00', '2024-05-05T20:00', '2024-09-05T20:00'),
('0a9eb1a4-0806-4aeb-9a51-cd24f6fbcce9', 'Reunión de trabajo', 'Asistir a la reunión semanal del equipo.', 1, '2022-12-22T10:00', '2024-01-06T10:00', '2024-05-06T11:00'),
('b5d45a7e-5ebd-4c1c-9d93-702fa69cbb5f', 'Planificar las vacaciones', 'Investigar destinos y actividades para las próximas vacaciones.', 0, '2022-10-23T15:30', '2024-09-07T15:30', NULL);
