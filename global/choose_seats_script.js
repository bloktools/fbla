$(()=>{
    $('body>*').hide();
    $('.container-top-bottom').show();
})

$('.top-seats').click(()=>{
    $('.container-top-bottom').hide();
    $('.container-top-section').show();
    $('.back').show();
})

$('.bottom-seats').click(()=>{
    $('.container-top-bottom').hide();
    $('.container-bottom-section').show();
    $('.back').show();
})

$('.back').click(()=>{
    $('body>*').hide();
    $('.container-top-bottom').show();
})


function showSeatThingy(t, d, p, img, ter) {
    $('.seat-information h1').text(t);
    $('.seat-information p').text(d);
    $('.seat-information h3').text(p);
    $('.seat-information img').attr('src', img);
    $('.seat-information button').css('background', (ter===1) ? 'var(--teritary)' : 'var(--primary)');
    $('body>*').hide();
    $('.seat-information').show();
    $('.back').show();
}

$('.container-top-section>*').on('click', function () {
    const h1 = $(this).text();
    const loadedEvent = JSON.parse(localStorage.getItem('loadedEvent'));

    showSeatThingy(h1, loadedEvent.title, loadedEvent.price, 'https://placehold.co/10x10', 0)
    console.log(localStorage.getItem('loadedEvent'))
})

$('.container-bottom-section>*').on('click', function () {
    const h1 = $(this).text();
    const loadedEvent = JSON.parse(localStorage.getItem('loadedEvent'));

    showSeatThingy(h1, loadedEvent.title, loadedEvent.price, 'https://placehold.co/10x10', 1)
    console.log(localStorage.getItem('loadedEvent'))
})
