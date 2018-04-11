// run the function when the window is loaded
$(document).ready(function(){
    var arr=["ESL_SC2",
     "OgamingSC2",
      "cretetion",
       "freecodecamp",
        "storbeck",
         "habathcx",
         "RobotCaleb", 
    "noobs2ninjas"]
    var url="https://wind-bow.glitch.me/twitch-api/streams/freecodecamp";


$.get(url)
.done(function(data1){
    if (data1.stream===null){
    $("#fccStatus").text("FCC is currently offline");
    }
    else{
        $("#fccStatus").text("FCC is Streaming currently");

    }
})

.fail(function(){
  alert("Some error occured");
 })
    for (var i=0;i<arr.length;i++){
        // logo and display name 
        user=arr[i];
  var apiUrl="https://wind-bow.glitch.me/twitch-api/channels/"+user;
  $.getJSON(apiUrl,function(data2){
    console.log(data2);
    $("#followerinfo").html(<div class="row">'+
    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 col-4" >
          <h1> LOGO</h1>
       </div>
       <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 col-4">
           <h1>NAME</h1>
       </div>
       <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 col-4">
         <h1>STATUS</h1>
       </div>
    
   </div>);
    
   })
var url="https://wind-bow.glitch.me/twitch-api/streams/"+user;


$.get(url)
.done(function(data1){
    if (data1.stream===null){
    $("#fccStatus").text("FCC is currently offline");
    }
    else{
        $("#fccStatus").text("FCC is Streaming currently");

    }
})

.fail(function(){
  alert("Some error occured");
 })
}


})