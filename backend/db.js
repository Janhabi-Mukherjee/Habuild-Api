const Pool=require('pg').Pool;


const pool= new Pool({
  user:"postgres",
  password:"password",
  database:"habuild",
  host:"localhost",
  port:5432
});
  //pool.connect();

  pool.on('connect', () => {
    console.log('connected to the db');
  });
  
  
  pool.on('end', () => {
    console.log('client removed');
  });
  
  

module.exports = pool;