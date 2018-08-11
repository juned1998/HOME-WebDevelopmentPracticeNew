//script.js
$(function()
{
    $('h1').css("color","blue");
    $('button').click(function() {
        $('#box').fadeOut(1000);
    });
    
    //$('h1,h2,h3').css('border','solid 1px red');
    //$('div#container').css('border','solid 1px red');
   // $('p.lead').css('border','solid 1px blue');
    
    //$('li:first').css('border','solid 1px red');
    
   // $('p:even').css('border','solid 1px red');
    //$('div em').css('border','solid 1px red');
    //$('div > p').css('border','solid 1px red');
    // $(':header').css('border','solid 1px red');
   // $('div:contains("Brad")').css('border','solid 1px red');
    
    /*---jQuery Event method*/
    $('#box')
.click(function(){
        alert("clicked a box");
    });
    
    $("input").blur(function()
        {
        if($(this).val() ==""){
            $(this).css("border",'solid 1px red');
            $('#box').text('Forgot to add text?');
            
            }
        }
        );
    
    $("input").keydown(function(){
        if($(this).val()!=="")
          {
            $(this).css('border','solid 1px #777');
            $('#box').text('thanks for that');
           }
    });
    
    $('#box').hover(function()
                   {
        $(this).text('you hovered in');
        
        
    },function(){
        $(this).text('you hovered out');
        
    });
/*-----------Jquery chaining--------------------*/

    $('.notification-bar').delay(1000).slideDown().delay(1000).fadeOut();
/*-----------------Jquery hide /show-------------*/
    
    //$('h1').hide();
    //$('div.hidden').show();
    
    //$('div.hidden').fadeIn(2000);
    
    $('#box1').click(function()
                    {
       $(this).fadeTo(2000,0.25,function(){
           //animation is completed
           $(this).slideUp(1000);
      });
   });
    
        $('div.hidden').slideDown(1000);
        $('button').click(function()
                        {
           $('#box1').slideToggle(); 
        });
    
/*---------Jquery Animate------------*/
     $('#up').click(function(){
        $('.box').animate({
            top:"-=40px",
            opacity:'+=2px'
        },
        function(){
            //animation is complete
        });
        
    });
    
    $('#left').click(function(){
        $('.box').animate({
            left:"-=40px",
            fontSize:'+=2px'
        },
        function(){
            //animation is complete
        });
        
    });
    
    
     $('#right').click(function(){
        $('.box').animate({
            left:"+=40px",
            fontSize:'+=2px'
        },
        function(){
            //animation is complete
        });
        
    });
    
    
    
     $('#down').click(function(){
        $('.box').animate({
            top:"+=40px",
            opacity:'+=2px'
        },
        function(){
            //animation is complete
        });
        
    });
    
/*------------------------
        jQuery CSS
 --------------------------*/
    
    $('#circle2').css({
        'background':'#8a8d22',
        'color':'white',
        'display':'inline-block',
        'height':'140px',
        'width':'140px',
        'line-height':'140px'
    }
    ).addClass('circleShape');

//Click GO button
    $('#go').click(function(){
        
        //check to see if car has won a race
        
        function checkIfComplete(){
            if(isComplete=false){
                isComplete=true;
            }else{
                place = 'second';
            }
        }
        
        
       //get width of cars
        var carWidth = $('.car').width();
        
        var raceTrackWidth = $(window).width()-carWidth;
        
        //generate random number
        
        var raceTime1=Math.floor((Math.random() * 5000) + 1);
        
        var raceTime2=Math.floor((Math.random() * 5000) + 1);
        
        //Set flag variable to default
        
        var isComplete = false;
        var place='first';
        
        //animate car 1
        
        $('#car1').animate({
            //move the car width of the racetrack
            left:raceTrackWidth
            
        }, raceTime1, function(){
            //animation is complete
            //run a function
            checkIfComplete();
            
            $('#raceInfo1 span').text('Finished in '+place+' place and clocked in at '+raceTime1 + 'milliseconds');
        });
        
        //animate car 2
          $('#car2').animate({
            //move the car width of the racetrack
            left:raceTrackWidth
            
        }, raceTime2, function(){
            //animation is complete
            //run a function
            checkIfComplete();
            $('#raceInfo2 span').text('Finished in '+place+' place and clocked in at '+raceTime1 + 'milliseconds');
        });
        
        
        
    });
    //reset the race
    $('#reset').click(function(){
        $('.car').css('left','0');
        $('.raceInfo span').text('');
    });
    
    
    
    
    
    
    
    
    
});


































