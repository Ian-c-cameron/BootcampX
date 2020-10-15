const { Pool } = require('pg');
const args = process.argv.slice(2);

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});
const queryString = `
SELECT students.id, students.name AS name, cohorts.name AS cohort_name
FROM students JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE $1
LIMIT $2;
`;
let cohortName = args[0];
let limit = args[1];
let values = [`%${cohortName}%`, limit];

pool.query(queryString, values)
  .then(res => {
    console.log(res);
  })
  .catch(err => console.error('query error', err.stack));