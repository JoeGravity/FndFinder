// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friends = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function (req, res) {
    res.json(friends);
    // console.log(res);
  });

  
  function closestMatch(friends) {
    for (var i = 0; i < friends.length; i++) {
      if (person.totalDiff < totalDiff) {
        person.name = $("#match-name");
        person.photo = $("#match-img");
      }
    } 
  };

  app.post("/api/friends", function (req, res) {

    for (var i = 0; i < friends.length; i++) {
      var userData;
      var person = friends[i];
      var eachDiff = parseInt(person.scores) - parseInt(userData.scores);
      var totalDiff = abs(eachDiff)++;
    }
        //    * The closest match will be the user with the least amount of difference.
    closestMatch();

    friends.push(req.body);
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function () {
    // Empty out the arrays of data
    friends = [];

    console.log(friends);
  });
};
