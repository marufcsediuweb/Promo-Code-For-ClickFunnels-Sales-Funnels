
// Coupon Code 
    var mainProd = '1234567'; // Main Product ID
    var promoProd = '7654321'; // Promo Product One ID

    var promoCodes = ['LUNCH65']; //PROMO CODES - SHOULD ALWAYS BE UPPER CASE

    var head = '';

    var field = '<input type=\'text\' id=\'promo_code\' name=\'promo_code\' placeholder=\'Enter promo code...\' class=\'elInput elInput100 elAlign_left elInputSmall elInputStyl0 elInputBG1 elInputBR5 elInputI0 elInputIBlack elInputIRight elInputStyle1 elInputSmall garlic-auto-save\' />';

    $(document).ready(function () {

        $('.elOrderProductOptions').last().after(head + field);

        $('.elOrderProductOptinProductName [value='+promoProd+']').closest('.elOrderProductOptinProducts').hide();

        $('#promo_code').on('keyup', function (ev) {
          console.log("yessss");

            if ($.inArray($('#promo_code').val().toUpperCase(),promoCodes) > -1) {

                $('.elOrderProductOptinProductName [value='+promoProd+']').click();

                $('.elOrderProductOptinProductName [value='+mainProd+']').closest('.elOrderProductOptinProducts').hide();

                $('.elOrderProductOptinProductName [value='+promoProd+']').closest('.elOrderProductOptinProducts').show();

            } else {

                $('.elOrderProductOptinProductName [value='+mainProd+']').click();

                $('.elOrderProductOptinProductName [value='+promoProd+']').closest('.elOrderProductOptinProducts').hide();

                $('.elOrderProductOptinProductName [value='+mainProd+']').closest('.elOrderProductOptinProducts').show();

            }

        });

    });
