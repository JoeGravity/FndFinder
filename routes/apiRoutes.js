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

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the  JSON is pushed to the appropriate JavaScript array

  // (ex. User fills out survey ... this data is then sent to the server...
  // Then the server saves the data to the friends array)
  // ---------------------------------------------------------------------------

  // * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 

  function closestMatch(friendsArray) {
    for (var i = 0; i < friendsArray.length; i++) {
      if (person.totalDiff < totalDiff) {
        person.name = $("#match-name");
        person.photo = $("#match-img");
      }
    }
  };

  app.post("/api/friends", function (req, res) {

    // 6. Determine the user's most compatible friend using the following as a guide:
    //    * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
    //    * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
    //      * Example: 
    //        * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
    //        * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
    //        * Total Difference: **2 + 1 + 2 =** **_5_**
    //    * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on
    for (var i = 0; i < friendsArray.length; i++) {
      var person = friendsArray[i];
      var eachDiff = parseInt(person.score) - parseInt(userData.score);
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
