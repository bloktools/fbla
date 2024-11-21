


const items = [
    [`Where is the arena located?`, `The Bluehaven Community Center Arena is located in St. Petersburg, Florida. You can see directions <a href="/info/directions">here</a>.`],
    [`When was the arena built?`, `The Bluehaven Community Center Arena was built in November 2024.`],
    [`Question 3`, `Answer 3`],
    [`Question 4`, `Answer 4`],
    [`Question 5`, `Answer 5`],
    [`Question 6`, `Answer 6`],
    [`Question 7`, `Answer 7`],
    [`Question 8`, `Answer 8`],
];

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