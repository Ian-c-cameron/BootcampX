const { Pool } = require('pg');
const args = process.argv.slice(2);

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`
SELECT students.id, students.name AS name, cohorts.name AS cohort_name
FROM students JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE '%${args[0]}%'
LIMIT ${args[1]};
`)
  .then(res => {
    console.log(res);
  })
  .catch(err => console.error('query error', err.stack));