SELECT cohorts.name AS cohort,
SUM(assistance_requests.completed_at - assistance_requests.started_at) AS total_duration
FROM students JOIN cohorts ON cohorts.id = cohort_id
JOIN assistance_requests ON student_id = students.id
GROUP BY cohorts.name
ORDER BY total_duration;