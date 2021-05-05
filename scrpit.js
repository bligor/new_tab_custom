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
                        className: 'box col-6 col-md-3 mt-5 ml-3 mr-3'
                    })
                );

                $('#box' + index).append(
                    $('<a>').prop({
                        id: 'a' + index,
                        href: box.url,
                    }).append(
                        $('<label>').prop({
                            id: 'label' + index,
                            innerHTML: box.title
                        })
                    )
                );
            });
        });

});