var user1 = {'name': 'Elise', 'email': 'eyw009@ucsd.edu', 'street': '1234 ucsd street', 'unit': 'Unit 100', 'townzip':'La Jolla, CA 12345', 'profileimg':'https://marketplace.canva.com/MAB4Yqx-uWs/1/thumbnail/canva-young-executive-woman-profile-icon--MAB4Yqx-uWs.png'};
var user2 = {'name': 'hold', 'email': 'blah@blah.com', 'street': '1111 asdf street', 'unit':'', 'townzip': 'LA, CA 11111', 'profileimg': 'https://i.pinimg.com/originals/fb/ad/99/fbad991624eee2ff5bb9f0563959d1b9.png'};
localStorage.setItem('user1', JSON.stringify(user1));
localStorage.setItem('user2', JSON.stringify(user2));


$(document).ready(function() {
  initializePage();
})

function initializePage() {

  $("#loggedout").click(function(e) {
    localStorage.setItem('loggedin', 0);
  });

  //check if logged in
  var loginstatus = localStorage.getItem('loggedin');
  console.log(loginstatus);
  if (loginstatus == 1){
    $('#loggedin').html("<div class='navbtn hvr-grow' id='navlogin'>Profile</div>");
    $('#loggedin').attr("href", "profile.html");
  }
  else{
    $('#loggedin').html("<div class='navbtn hvr-grow' id='navlogin'>Login</div>");
    $('#loggedin').attr("href", "login.html");
  }


  var user = localStorage.getItem('user');
  console.log(user);
  var curruser;
  if (user == 1) {
    curruser = JSON.parse(localStorage.getItem('user1'));
    console.log(curruser);
  }
  if (user == 2) {
    curruser = JSON.parse(localStorage.getItem('user2'));
  }

  var source = $("#profile-template").html();
  var template = Handlebars.compile(source);

  var parentDiv = $("#profileinfo");

  // now iterate through the complexData list and keep appending:
  var curHtml = template(curruser);
  parentDiv.append(curHtml);




}
