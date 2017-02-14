$(document).ready(function(){
var signupData = $("#signup-form").serialize();
  console.log(signupData);
  // send POST request to /users with the form data
  $.post('/users', signupData, function(response){
    console.log(response);
  })
});