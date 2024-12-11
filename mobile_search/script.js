$('#search-input-mobile').on('input', () => {
    if($('#search-input-mobile').val()===""){$('.search-results').removeClass('active');}else{$('.search-results').addClass('active');}
    let order = querySearch($('#search-input-mobile').val());

    $('.search-results').html('');

    order.forEach(function (e) {
        console.log(`============\nTerm: ${e.name} | Score: ${e.score}\n | Input Length ${$('#search-input-mobile').val().length}==================`);
        if (e.score > (($('#search-input-mobile').val().length)^4) && order.indexOf(e)<5){
            const matchingItem = searches.find(item => item.name === e.name);
            console.log(matchingItem);
        

        $('.search-results').append(`
            <a class=result href="${e.link}">
                <h2>${matchingItem.displayName}</h2>
                <p>${matchingItem.description}</p>
            </a>    
        `);
    }})



})