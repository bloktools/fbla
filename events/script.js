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

const eventList = [
    ["Event 1", "This is the description for event 1.", 10, "24 Nov. 2024", -1, "6:30 PM", -1],
    ["Event 2", "This is the description for event 2.", 15.99, "25 Nov. 2024", -1, -1, -1],
    ["Event 3", "This is the description for event 3.", 120, "27 Nov. 2024", "1 Dec. 2024", -1, -1],
    ["Event 4", "This is the description for event 4.", 30, "3 Dec. 2024", -1, "11:00 AM", -1],
    ["Rolling Loud", "Celebrate 10 years of Rolling Loud at the Bluehaven Community Center in Tampa, FL.", 300, "13 Dec. 2024", "15 Dec. 2024", -1, "https://media.npr.org/assets/img/2021/11/16/gettyimages-1235223332_sq-e88ad790d447bd7dfcb0c1571047db26d39a8ee0.jpg?s=1100&c=85&f=jpeg"],
]

$(()=>{

    $("body").prepend('<img class=model-image>')

    eventList.forEach(function (e) {
        addEvent(e[0],e[1],e[2],e[3],e[4],e[5],e[6],eventList.indexOf(e));
    });
})