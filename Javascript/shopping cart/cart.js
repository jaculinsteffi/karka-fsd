$(document).ready(function(){
    fetch('cart.json')
    .then(newcart => newcart.json())
    .then(newdata => {
        // displayItem(newdata.product);
        console .log(newdata)
    });

    function displayItem(product) {
        let sec3 = $('#sec3');
        $.each(product, function(index, product) {
            let div = $('<div>').addClass('box');
            $('<img>').attr('src', product.img).appendTo(div);
            $('<h5>').text('Name: ' + product.name).appendTo(div);
            sec3.append(div);
        });
    }
});
