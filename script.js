$(document).ready(function () {
    fetch("./boxes.json")
        .then(response => {
            return response.json();
        })
        .then(data => {

            var row = 0;

            data.boxes.sort((a, b) => parseFloat(a.order) - parseFloat(b.order));

            data.boxes.forEach((box, index) => {
                var i = index + 1;
                if (i == 1) {
                    createRow(row);
                }

                $('#row' + row).append(
                    $('<div>').prop({
                        id: 'box' + index,
                        style: 'background-color: ' + /*'rgb(17, 119, 253)',*/ box.color,
                        className: 'col-sm-6 col-md-3 ml-3 mr-3'
                    }).append(
                        $('<div>').prop({
                            id: 'bb' + index,
                            className: 'box '
                        })
                    )
                );

                $('#bb' + index).append(
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

                if (multiple(i, 3)) {
                    row += 1;
                    createRow(row);
                }
            });
        });

});

function multiple(valor, multiple) {
    resto = valor % multiple;
    if (resto == 0)
        return true;
    else
        return false;
}

function createRow(row){
    $('.container').append(
        $('<div>').prop({
            id: "row" + row,
            className: 'row mt-5'
        })
    );
}