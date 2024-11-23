$(()=>{
    $('body>*').hide();
    $('.container-top-bottom').show();
})

$('.top-seats').click(()=>{
    $('.container-top-bottom').hide();
    $('.container-top-section').show();
})