SELECT cohorts.name AS name,
AVG(completed_at - started_at) AS average_assisatance_time
FROM students JOIN cohorts ON cohorts.id = cohort_id
JOIN assistance_requests ON student_id = students.id
GROUP BY cohorts.name
HAVING AVG(completed_at - started_at) = (SELECT MAX(average_assisatance_time)
FROM (
  SELECT AVG(completed_at - started_at) AS average_assisatance_time
  FROM students JOIN cohorts ON cohorts.id = cohort_id
  JOIN assistance_requests ON student_id = students.id
  GROUP BY cohorts.name
) AS assistance_averages
);