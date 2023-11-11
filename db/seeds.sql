USE employeesDB;

INSERT INTO department (name)
VALUES
('Director of Nursing'),
('Assistent Director of Nursing'),
('Charge Nurse'),
('Nurse');

INSERT INTO role (title, salary, department_id)
VALUES
('Director of Nursing', 160000, 1),
('Assistent Director of Nursing', 80000, 2),
('Director,Charge Nurse', 70000, 3),
('Charge Nurse', 60000, 3),
('A-Hall Nurse', 40000, 4),
('B-Hall Nurse', 40000, 4),
('C-Hall Nurse', 40000, 4);
