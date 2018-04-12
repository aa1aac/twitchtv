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
// for status of fcc
.done(function(data){
    if (data.stream===null){$("#fccStatus").text("FCC is currently offline");
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
       logo(i);
       status(i);
       };

    function logo(i){
    user=arr[i];
  var apiUrl="https://wind-bow.glitch.me/twitch-api/channels/"+user;
  $.getJSON(apiUrl,function(data2){
    $("#followerinfo").append('<div class='+'"'+'row" id="row">'
    +'<div class="'+'col-lg-4 col-md-4 col-sm-4 col-xs-4 col-4" >'+
          '<h1><img src='+'"'+data2.logo+'">'+'</h1>'+
       '</div>'
      +' <div class="'+'col-lg-4 col-md-4 col-sm-4 col-xs-4 col-4">'+
           '<h1><a href="'+data2.url+'" target="blank">'+data2.display_name+'</a></h1>'+
       '</div>'+
       '<div class="'+'col-lg-4 col-md-4 col-sm-4 col-xs-4 col-4" id="status'+i+'">'+
         '<h1></h1>'+
       '</div></div>');
})
}
// function for status
function status(i){
    var user=arr[i];
    var url="https://wind-bow.glitch.me/twitch-api/streams/"+user;
    var stat="";
     $.get(url)
     .done(function(data1){
        if (data1.stream===null){
       stat="OFFLINE";
       $("#status"+i).append(stat);
        }  
         else{
       stat="ONLINE";
       $("#status"+i).append(stat);
              }   
    })

.fail(function(){
  alert("Some error occured getting status");
 })
}
})