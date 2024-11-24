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