// these are all undefined with just a ; at the end of a variable
var randomResult;
var loss = 0;
var win = 0;
var previous = 0;

// Setters - setting values
// Getters - getting values

var resetandStart = function() {
  // this will clear out the crystals after every game
  $(".crystals").empty();

  var images = [
    "https://fossbytes.com/wp-content/uploads/2017/04/time-crystals--640x360.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb4aHmvMJKBfHKNH__9idnlov_NjOv1GOabJ_8x42G2o94j8qW",
    "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcwSit_iqGsxvozXs3vxwX5pnU59FIBDuCpfTQkUdMbaK4sjcm62c3ILpZeEEjMhdTYtJNwWdaxXA.ldn0HHU39C8TyyIWIpobOMa.4xby0XHPSzBssOUzZzaejEenyvSUERd26P0HiL3950fWT74W1OXIvsQcoUEIP20S1_Bxwmc-&h=1080&w=1920&format=jpg",
    "https://m.media-amazon.com/images/I/71GADww3MwL._SR500,500_.jpg"
  ];

  //  comes up with the number that you need to match with your crystals
  randomResult = Math.floor(Math.random() * 69) + 30;
  // console.log(randomResult)
  // This will put text in my p id=result.
  $("#result").html("Number to Match: " + randomResult);

  // creates 4 divs inside of the crystal div with the math.floor giving each div a random number
  for (var i = 0; i < 4; i++) {
    var random = Math.floor(Math.random() * 11) + 1;
    // console.log(random);

    var crystal = $("<div>");
    crystal.attr({
      // if it works this will assign the 4 random numbers to the 4 divs created in this for loop example - div should be class=crystal data-random=randomnumber
      class: "crystal",
      "data-random": random
    });

    crystal.css({
      "background-image": "url('" + images[i] + "')",
      "background-size": "cover"
    });
    $(".crystals").append(crystal);
  }
  $("#previous").html("Total Score: " + previous);
};

resetandStart();

// Event delegation
$(document).on("click", ".crystal", function() {
  var num = parseInt($(this).attr("data-random"));
  previous += num;

  $("#previous").html("Total Score: " + previous);
  // console.log(previous)

  if (previous > randomResult) {
    loss++;
    $("#loss").html("Losses: " + loss);
    previous = 0;

    // console.log("You Lost");
    resetandStart();
  } else if (previous === randomResult) {
    win++;
    $("#win").html("Wins: " + win);
    previous = 0;

    // console.log("You Win")
    resetandStart();
  }
  // console.log(previous)

  // saw this online, seems like a way to console log onclicks update: it worked
  // console.log($(this).attr('data-random'));
});
// Pseudo
// game with 4 crystals
//  every crystal needs to have a random number that number should be generated every single gaame.

// when clicking any crystal, it should be adding with the previous result until it hits the total score
// if it is not equal then we start over
// if it is equal, then we increment a win counter
