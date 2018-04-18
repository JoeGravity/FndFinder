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
    console.log(friends);
  });

  // function closestMatch(friends) {
  //   for (var i = 0; i < friends.length; i++) {
  //     if (person.totalDiff < totalDiff) {
  //       person.name = $("#match-name");
  //       person.photo = $("#match-img");
  //     }
  //   } 
  // };


  // app.post("/api/friends", function (req, res) {

  // console.log(closestMatch(friends));

  app.post("/api/friends", function (req, res) {
    console.log(req.body);
    var userData;
    var totalDiff;
    var closestFriend
    for (var i = 0; i < friends.length; i++) {
      // var userData;
      var person = friends[i];
      for (var k = 0; k < person.scores.length; k++) {
        // here's where we itereate thru scores
        var eachDiff = parseInt(person.scores[k]) - parseInt(req.body.scores[k]);
        // var totalDiff = (eachDiff + Math.abs(eachDiff))++;
        var totalDiff = eachDiff++;
        if (person.totalDiff < totalDiff) {
          // $("#match-name") = person.name;
          // $("#match-img") = person.photo;
        }
      }
    }
    friends.push(req.body);
    res.end();
  });

  //    * The closest match will be the user with the least amount of difference.
  // closestMatch();

  // closestMatch(friends);
  // console.log(person);

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function () {
    // Empty out the arrays of data
    friends = [];

    console.log(friends);
  });
};
