$(document).ready(function() {

    var myFacebookToken = 'EAACEdEose0cBAH74KzCaRLKkZCLsrIGE1RXSRkIpiK1P207ZA86V4QMBKR5llCCQxyqI3MgMuiMErCVlmwZAZAK7I5E5cu9cdZCxUfl8rRnS9uMaoACMUw4lpymJ0x52QEWOEnQwqpkZAVRoxmtVoz3kq9HE7hAACIsRNO6oQ0KZCoBdmnrgQMLy6HeiVsdzpkZD';

    function getFacebookInfo(){

        $.ajax('https://graph.facebook.com/me?fields=posts&access_token='+myFacebookToken,{


                success : function(response){
                     var obj = response.posts.data[0];
            var myJson =JSON.stringify(response);
            console.log(myJson);
          document.getElementById("myPost").innerHTML = myJson;
                

},

error: function(response) {
                     alert(JSON.stringify(response));
                     $(".initial-div").show();
                 }


            }//end argument list 



        );// end ajax call 


    }// end get facebook info

    $("#facebookBtn").on('click',getFacebookInfo);



  });