$(function(){
  $('.btn-lg').click(function(){
    $('footer').toggle(),
      $('header').toggle();
  })
});
$(function(){
  $('.add').click(function(){
    $('.send').css('display','block');
  })
});
$(function(){
  $('#cancel').click(function(){
    $('.send').css('display','none');
  })
});

/*$(function( ){
  $('.fa-chalkboard-teacher').toogle( );
});
let menu = document.getElementsByClassName('.btn-ln');
let header= document.getElementsByName('header');
let footer = document.getElementsByName('footer';)
function(cache)=>{
  
}*/
