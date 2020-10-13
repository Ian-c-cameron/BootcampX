SELECT teachers.name AS teacher,
students.name AS student,
assignments.name AS assignment,
(assistance_requests.completed_at - assistance_requests.started_at) AS duration
FROM students JOIN assistance_requests ON student_id = students.id
JOIN teachers ON teachers.id = teacher_id
JOIN assignments ON assignment_id = assignments.id
ORDER BY (assistance_requests.completed_at - assistance_requests.started_at);