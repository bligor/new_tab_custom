$(document).ready(function () {
    fetch("./boxes.json")
        .then(response => {
            return response.json();
        })
        .then(data => {
            $('.container').append(
                $('<div>').prop({
                    className: 'row'
                })
            );

            data.boxes.forEach((box, index) => {

                $('.row').addClass('mt-5').append(
                    $('<div>').prop({
                        id: 'box' + index,
                        style: 'background-color: ' + box.color,
                        className: 'box col-3 mt-5 ml-5'
                    })
                );

                $('#box' + index).append(
                    $('<a>').prop({
                        id: 'a' + index,
                        href: box.url,
                        //innerHTML: function() { if(text){box.title}}
                    })
                );
            });
        });
});

function getPosition(order) {
    console.log(order);
    switch (order) {
        case 1:
            console.log("wer 1");
            return 'margin-top: 20; margin-left: 20';
        case 2:
            console.log("wer 2");
            return 'margin-top: 20; margin-left: 270';
        case 3:
            console.log("wer 3");
            return 'margin-top: 20; margin-left: 520';
        default:
            console.log("wer");
            return 'margin-top: 20; margin-left: 520';
    }
}