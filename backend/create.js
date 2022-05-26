const pool=require('./db');

const createTableTopics = async() => {

    await pool.connect();
    
      const createQuery_1 =
      `CREATE TABLE IF NOT EXISTS
        topics(
          t_id SERIAL PRIMARY KEY,
          topic VARCHAR(128) 
        )`;
    try{
        const result=await  pool.query(createQuery_1)
        console.log(result);
        pool.end();
    }
    catch(err){
      console.log(err);
      pool.end();
    };

}

const createTableranking=async()=>{
    await pool.connect();
    
    const createQuery_2 =
      `CREATE TABLE IF NOT EXISTS
        ranking(
          id  SERIAL PRIMARY KEY,
          t_id INT,
          rank INT
        )`;
    try{
        const result=await  pool.query(createQuery_2)
        console.log(result);
        pool.end();
    }
    catch(err){
        console.log(err);
        pool.end();
    };
}

createTableTopics();
createTableranking();
  