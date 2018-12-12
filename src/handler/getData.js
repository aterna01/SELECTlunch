const dbConnection = require("../../database/db_connection.js");
const getData = cb => {


  // FIRST idea (similar to postData.js):

  // 1. get bookings table
  // 2. get name(s) from people table by people_id (in bookings)
  // 3. get lunch(es) from lunch table by lunch_id (in bookings)
  // 4. add vegy and paid
  // 5. put them all in a big sexy callback

  


  // SECOND idea
  // - came from running queries, and trying out inner join
  // - found I could return 3 out of 4 columns I needed with one inner join query
  // - needed to inner join with 3 tables
  // - helped by this link: https://www.quora.com/How-do-you-join-three-tables-in-SQL
  // - final query assigns variables/references to tables with letters 'b', 'p', and 'l'

  
  /*

  SELECT * from lunches INNER JOIN bookings ON lunches.lunch_id = bookings.lunch_id

  SELECT lunch, vegy, paid from lunches INNER JOIN bookings ON lunches.lunch_id = bookings.lunch_id

  SELECT lunch, vegy, paid from lunches
    INNER JOIN bookings ON people.people_id = bookings.people_id
    INNER JOIN bookings ON lunches.lunch_id = bookings.lunch_id

  
    this one gets all:
  SELECT * from bookings b INNER JOIN people p ON b.people_id = p.people_id INNER JOIN lunches l ON b.lunch_id = l.lunch_id

    this one omits id field we dont need:
  SELECT name, lunch, vegy, paid from bookings b INNER JOIN people p ON b.people_id = p.people_id INNER JOIN lunches l ON b.lunch_id = l.lunch_id
  */





  dbConnection.query("SELECT name, lunch, vegy, paid from bookings b INNER JOIN people p ON b.people_id = p.people_id INNER JOIN lunches l ON b.lunch_id = l.lunch_id", (error, result) => {
    if (error) {
      console.log(error, ' GET data error');
      cb(error);
    } else {
      // logs array of objects to terminal
      // console.log(result.rows);
      
      const bookings = result.rows.slice();
      cb(null, bookings);

      
      // dont need this nested nonsense!
      // dbConnection.query("SELECT name from people INNER JOIN bookings ON people.people_id = bookings.people_id", (err, res) => {
      //   if (err) {
      //     console.log(err);
      //   } else {
      //     console.log(res.rows);
      //   }
      // });

    }
  });
};


module.exports = getData;
