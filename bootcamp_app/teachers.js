const { Pool } = require('pg');
const args = process.argv.slice(2);

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});
let values = [`${args[0]}`];
let queryString = `
SELECT DISTINCT(teachers.name) AS teacher, cohorts.name AS cohort
FROM teachers JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name = $1
ORDER BY teachers.name;
`;

pool.query(queryString, values)
  .then(res => {
    let rows = res.rows;
    for (const row of rows) {
      console.log(`${row.cohort}: ${row.teacher}`);
    }
  })
  .catch(err => console.error('query error', err.stack));