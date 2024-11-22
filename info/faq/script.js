


const items = questions

function addItem(q, a) {
    $('body').append(`
    <div class="faq-item">
        <h3 class="question">${q}</h3>
        <div class="expand-me">
            <br>
            <p class="answer">${a}</p>
        </div>
    </div>
    `)
}


$(()=>{
    items.forEach(function (e) {
        addItem(e[0], e[1])
    })
})

$('body').on('click', '.faq-item', function () {
    if ($(this).hasClass('active')) {
        $('.active').removeClass('active');
    } else {
        $('.active').removeClass('active');
        $(this).addClass('active');
    }
})