


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
        $(this).removeClass('active');
    } else {
        $(this).addClass('active');
    }
})

$('#expand-collapse-questions').click(function() {
    if ($(this).text() === "Expand all") {
        $(this).text("Collapse all");
        $(this).css('background', 'var(--light-teritary)');
        $('.faq-item').removeClass('active');
        $('.faq-item').addClass('active');
    } else {
        $(this).text("Expand all");
        $(this).css('background', 'var(--light-primary)');
        $('.faq-item').removeClass('active');
    }
})