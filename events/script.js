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

    $('.eventButton').on('click', ()=>{
        $('.event-blown-up-container').show();
    })
    $('#back-button-event-blown-up').click(()=>{$('.event-blown-up-container').hide()})
})