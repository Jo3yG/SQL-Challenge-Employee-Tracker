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

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
('Jimmy', 'Neutron', 1, 1),
('Cindy', 'Vortex', 2, 2),
('Carl', 'Wheezer', 3, null),
('Sheen', 'Estevez', 4, null),
('Libby', 'Folfax', 4, null),
('Bolbi', 'Stroganofsky', 4, null),
('Nick', 'Dean', 4, null),
('Tim', 'Duncan', 4, null);
