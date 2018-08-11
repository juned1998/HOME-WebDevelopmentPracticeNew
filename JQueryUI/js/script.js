//script.js

$(function(){
    
    $('.box').draggable() ;
     $('#box1').draggable({scroll :true,revert:"invalid"}) ;
    $('#box2').draggable({axis:'x'}) ;
    $('#box3').draggable({axis:'y'}) ;
    $('#box4').draggable({containment:'.container',revert:'invalid'}) ;
    
    
    //DROPPABLE
    $('#droppable').droppable({
        accept:'#box1',
        drop:function(){
            $(this).find('span').html("Box is dropped");
        }
    });
    
    //SORTABLE
    $('#sortable').sortable({connectWith:'#sortableToo',placeholder:'placeholderBox'});
    
    $('#sortableToo').sortable({connectWith:'#sortable',placeholder:'placeholderBox'});
    
    //ACCORDIAN
    
    $('#accordion').accordion({collapsible:true,heightStyle:'content' });
    
    //DATEPICKER
    
    $('.date').datepicker({
        showOtherMonths:true,
        selectOtherMonths:true,
        showButtonPanel:true,
        changeMonth:true,
        changeYear:true,
        numberOfMonths:2,
        minDate:"-1W -3D",
        maxDate:"+1W +50D"
    });
    
    //todo List
    
    $('#todoList ul').sortable({
        items: "li:not('.listTitle, .addItem')",
        connectWith: "ul",
        dropOnEmpty: true,
        placeholder: "emptySpace"
    });
    
    $('input').keydown(function(e){
        if(e.keyCode==13) {
            var item = $(this).val();
            
            $(this).parent().parent().append('<li>' + item + '</li>');
            $(this).val('');
        }
    });
    
    $('#trash').droppable({
       drop:function(event , ui) {
           ui.draggable.remove();
       }
    });
        
});
    
    
    
    
    
    

    
