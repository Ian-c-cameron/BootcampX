SELECT teacher, cohort, COUNT(*) AS total_assistances 
FROM (
  SELECT teachers.name AS teacher, cohorts.name AS cohort
  FROM teachers JOIN assistance_requests ON teacher_id = teachers.id
  JOIN students ON student_id = students.id
  JOIN cohorts ON cohorts.id = cohort_id
  WHERE cohorts.name = 'JUL02'
) AS assistances
GROUP BY teacher, cohort
ORDER BY teacher;