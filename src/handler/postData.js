const dbConnection = require("../../database/db_connection.js");


// common table expressions
// - insert into one table, use this to add to another

// beware of variable shadowing below
// - use of err and res in nested queries
// - use different names for these
// - e.g. (err, res), (error, result), (fail, success)



const postData = (formData, cb) => {


  // name
  const name = formData[0];
  // console.log(name);

  // food
  const food = formData[1].charAt(0).toUpperCase() + formData[1].slice(1);
  // console.log(food);

  // veg
  const veg = formData[2];
  // console.log(veg);

  // paid
  const paid = formData[3];
  // console.log(paid);


  // 1. people table
  dbConnection.query(
    // return personId which contains people_id - to be passed in to bookings table
    "INSERT INTO people (name) VALUES ($1) RETURNING people_id",
    [name],
    (err, personId) => {
      // console.log(personId); // logs out object for person
      if (err) {
        return err;
      } else {


        // 2. lunches table
        // - get lunch_id from lunches by variable 'food'
        dbConnection.query(`SELECT lunch_id from lunches WHERE lunch LIKE '${food}'`, (error, result) => {
          if (error) {
            // console.log(error, ' error at lunch table SELECT');
            return error;
          } else {
            // console.log(result.rows[0].lunch_id); // logs out lunch_id

            
            // 3. bookings table
            dbConnection.query(
              "INSERT INTO bookings (people_id, lunch_id, vegy, paid) VALUES ($1, $2, $3, $4)",
              [personId.rows[0].people_id, result.rows[0].lunch_id, veg, paid],
              fail => {
                // console.log("bookings table working");
                if (fail) return fail;
              }
            );


          }
        }); // end lunches table SELECT query

      }



  }); // end people table INSERT query


};



module.exports = postData;
