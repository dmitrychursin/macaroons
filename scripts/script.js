$(document).ready(function () {



    const product = $('#choice');
    const name = $('#name');
    const phone = $('#phone');
    const loader = $('.loader');
    const orderInfo = $('.order__info');
    const orderForm = $('.order__form');
    const borderRed = $('.base-input');
    const btn = $('#submit');





    $('.main__btn').click(() => {
        $('.products__title')[0].scrollIntoView({behavior: "smooth"});
    });


    $('.order__btn').click((e) => {
        product.val($(e.target).parents('.product').find('.product__title').text());
        $('.order')[0].scrollIntoView({behavior: "smooth"});
    });


    btn.click(function() {
        borderRed.each(function() {
            if (this.value.trim().length === 0)
                $(this).css('border-color', 'red');
            else
                $(this).css('border-color', '');
        });
    });



    btn.click(function () {
        let hasError = false;
        $('.error-input').hide();



        if (!product.val()) {
            product.next().show();
            hasError = true;
        }
        if (!name.val()) {
            name.next().show();
            hasError = true;
        }
        if (!phone.val()) {
            phone.next().show();
            hasError = true;
        }
        if (!hasError) {
            loader.css('display', 'flex');

            $.ajax({
                method: "POST",
                url: "https://testologia.site/checkout",
                data: {product: product.val(), name: name.val(), phone: phone.val()}
            })
                .done(function (message) {
                    loader.hide();
                    if (message.success) {
                        orderForm.hide();
                        orderInfo.css('display', 'flex');
                    } else {
                        alert("Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ");
                    }
                });
        }
    });


});