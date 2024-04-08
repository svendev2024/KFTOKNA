$(document).ready(function(){
  $(".tech-data-slide").click(function() {
    if ($(this).parent().children('.data').attr('class').includes('hide') == true) {
      $(this).parent().children('.data').removeClass('hide')
      $(this).parent().children('.data').addClass('flex')
    }
    else {
      $(this).parent().children('.data').addClass('hide')
      $(this).parent().children('.data').removeClass('flex')
    }
  })

  $(".submit-btn").click(function() {
    $(this).css('background-color', 'white')
    $(this).html('');
    var span = '<span class="loader"></span>'
    $(this).append(span)
  })
}); 