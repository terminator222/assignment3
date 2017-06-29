$(document).ready(function() {

    var myFacebookToken = 'EAACEdEose0cBAOIntFiZAILPzH3LrIYswdSMzXRkdX2G0JnrhdJluLaqGaLUuwZA9TPeKOWqOSCKMWb6LxaZCDsnZChuJQPXWNNPKZA6ePIF82Rl3xXW90KkC0OFdxhQfe3tZAALZCZCDTSqGMYzUkZB1o0Ei8kJZAbYEJ40YGNrlgVwU0IIyb4yeTR9JjJJJS8WAZD';

    function getFacebookInfo(){

        $.ajax('https://graph.facebook.com/me?access_token='+myFacebookToken,{

                success : function(response){
                    $("#myName").text(response.name);
                    $("#myEmail").text(response.email);
                    $("#myBirthday").text(response.birthday);
                    $("#myHometown").text(response.hometown.name);




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