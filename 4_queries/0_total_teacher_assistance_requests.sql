SELECT COUNT(*) AS total_assistances,
teachers.name AS name
FROM teachers JOIN assistance_requests
ON teacher_id = teachers.id
GROUP BY teachers.name
HAVING teachers.name = 'Waylon Boehm';