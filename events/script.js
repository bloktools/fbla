function addEvent(title, description, price, startDate, endDate, time, imageUrl, arrayNumber) { // function to add an event
// set end date to -1 to make it a one-day event
// set time to -1 to make it an all day event or if using start and end date
// set imageUrl to -1 for placeholder
    var finalDateRange;
    if (endDate === -1) {
        finalDateRange = startDate
    } else {
        finalDateRange = `${startDate} - ${endDate}`
    }
    var finalTime;
    if (time === -1) {
        finalTime = ""
    } else {
        finalTime = time;
    }
    if (imageUrl === -1) {
        finalImageUrl = 'https://placehold.co/270x270';
    } else {
        finalImageUrl = imageUrl;
    }
    $('.event-list>ul').append(`
        <li data-array-number=${arrayNumber}>
            <div class=event-image style="background-image: url(${finalImageUrl})"></div>
            <div class=text>
                <div>
                    <div>
                        <h1>${title}</h1>
                        <h2>${description}</h2>
                    </div>
                </div>
                <h3>$${price}</h3>
                <div>
                    <h4>${finalDateRange}</h4>
                    <h5>${finalTime}</h5>
                </div>
                <button class=eventButton>Get Tickets</button>
            </div>
        </li>
    `);
}


$(()=>{

    $("body").prepend('<img class=model-image>')

    $(".event-blown-up-container").hide();


    eventList.forEach(function (e) {
        addEvent(e[0],e[1],e[2],e[3],e[4],e[5],e[6],eventList.indexOf(e));
    });

    $('.eventButton').on('click', function () {
        const title = $(this).parent().children('div:nth-child(1)').children('div').children('h1').text();
        const description = $(this).parent().children('div:nth-child(1)').children('div').children('h2').text();
        const price = $(this).parent().children('h3').text();
        const dates = $(this).parent().children('div:nth-child(3)').children('h4').text();
        const time = $(this).parent().children('div:nth-child(3)').children('h5').text();
        $('.event-blown-up-container>.event-blown-up>.event-details>h2').text(title);
        $('.event-blown-up-container>.event-blown-up>.event-details>h3').text(dates);
        $('.event-blown-up-container>.event-blown-up>.event-details>h4').text(time);
        $('.event-blown-up-container>.event-blown-up>.event-details>p').text(description);
        $('.event-blown-up-container').show(); 

        localStorage.setItem('loadedEvent', ''+JSON.stringify({
            'title': ''+title+'',
            'description': ''+description+'',
            'price': ''+price+'',
            'dates': ''+dates+'',
            'time': ''+time+''
        }))
    })
    $('#back-button-event-blown-up').click(()=>{$('.event-blown-up-container').hide()})
})