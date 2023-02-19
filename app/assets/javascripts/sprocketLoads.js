//= require jquery
//= require rails-ujs
//= require materialize-sprockets
//= require materialize-form
//= require vue
//= require best_in_place
//= require_tree .

$(window).bind("load", function () {
    var footer = $("#footer");
    var pos = footer.position();
    var height = $(window).height();
    height = height - pos.top;
    height = height - footer.height();
    if (height > 0) {
        footer.css({
            'margin-top': height + 'px'
        });
    }
  });
  
  $(document).ready(function() {
    jQuery(".best_in_place").best_in_place();
  });
  
  // Flash fade
  $(function() {
     $('.alert-box').fadeIn('normal', function() {
        $(this).delay(3700).fadeOut();
     });
  });
  
  // Carousel function
  $(document).ready(function(){
    
    $('.carousel').carousel();
  });
  
  // Search submit on enter
  $(document).ready(function() {
    function submitForm() {
      document.getElementById("search").submit();
    }
    document.onkeydown = function () {
      if (window.event.keyCode == '13') {
          submitForm();
      }
    }
  });
  
  
