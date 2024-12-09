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


function showSeatThingy(t, d, p, img) {
    $('.seat-information h1').text(t);
    $('.seat-information p').text(d);
    $('.seat-information h3').text(p);
    $('.seat-information img').attr('src', img);
    $('body>*').hide();
    $('.seat-information').show();
}

$('.container-top-section>*').on('click', function () {
    const h1 = $(this).text();
    
    showSeatThingy(h1, 'test', 'test', 'https://placehold.co/10x10')
})
