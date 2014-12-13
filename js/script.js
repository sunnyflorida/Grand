 $(document).ready(function(){ 
    $(".list_nav").hide();
    $(".btn_catalog").on('click', function(){
      $(this).parent().children('div').toggle(); 
    });

    $(".additional_products_row_2").hide();
    $(".items2").on('click', function(){
        $(".additional_products_row_1").hide();
        $('.additional_products_row_2').show(); 
        $('.nav-tabs li:first-child').removeClass('active');
        $('.nav-tabs li:last-child').addClass('active');
        event.preventDefault();
    });
    $(".items1").on('click', function(){
        $(".additional_products_row_2").hide();
        $('.additional_products_row_1').show(); 
        $('.nav-tabs li:last-child').removeClass('active');
        $('.nav-tabs li:first-child').addClass('active');
        event.preventDefault();
    });

    $('.product_option_image').on('click',function(){
      var src = $(this).children('img').attr('src');
      $(".product_item_big_wrapper").children('img').attr('src',src);   
      }
  ); 

});