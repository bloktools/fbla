//////////////////////////////////////////////////////////////////////
//                                                                  //
//                        GLOBAL VARIABLES                          //
//                                                                  //
//     This section is for variables that can be shared across      //
//                           all scripts.                           //
//                                                                  //
//////////////////////////////////////////////////////////////////////

const images = [
    ['corner_view', '/global/assets/arena_renders/corner_view.PNG'],
    ['head_on', '/global/assets/arena_renders/head_on.PNG'],
]

const questions = [
    [`Where is the arena located?`, `The Bluehaven Community Center Arena is located in St. Petersburg, Florida. You can see directions <a href="/info/directions">here</a>.`],
    [`When was the arena built?`, `The Bluehaven Community Center Arena was built in November 2024.`],
    [`Who?`, `Me`],
    [`Question 4`, `Answer 4`],
    [`Question 5`, `Answer 5`],
    [`Question 6`, `Answer 6`],
    [`Question 7`, `Answer 7`],
    [`Question 8`, `Answer 8`],
];
const eventList = [ // title, description, price, start DD MMM. YYYY, end DD MMM. YYYY, H:MM A/PM, IMG
    // set end to -1 to signify single day event
    // set time to -1 to signify all day / or if its multiple days
    // set img to -1 to signify placeholder

//riley: make like 10 events

    ["Event 1", "This is the description for event 1.", 10, "24 Nov. 2024", -1, "6:30 PM", -1],
    ["Event 2", "This is the description for event 2.", 15.99, "25 Nov. 2024", -1, -1, -1],
    ["Event 3", "This is the description for event 3.", 120, "27 Nov. 2024", "1 Dec. 2024", -1, -1],
    ["Event 4", "This is the description for event 4.", 30, "3 Dec. 2024", -1, "11:00 AM", -1],
    ["Rolling Loud", "Celebrate 10 years of Rolling Loud at the Bluehaven Community Center in Tampa, FL.", 300, "13 Dec. 2024", "15 Dec. 2024", -1, "https://media.npr.org/assets/img/2021/11/16/gettyimages-1235223332_sq-e88ad790d447bd7dfcb0c1571047db26d39a8ee0.jpg?s=1100&c=85&f=jpeg"],
]

// ['name of page', 'link', ['commonly', 'associated', 'keywords'], extra (-1 if none)]
const siteHiearchy = [
    ['home', '/', ['homepage', 'start', 'main', 'bluehaven'], -1],
    ['about', `/#about`, ['about'] , -1],
    ['events', '/events', ['tickets', 'buy', 'calendar', 'seats', 'perform', 'play', 'playing'],
        1, eventList
    ],
    ['info', '/info', ['information', 'inf', 'about', 'faq', 'qna', 'policies', 'directions', 'seating'], -1],
    ['faq', '/info/faq', ['faq', 'qna', 'questions', 'facts', 'ask', 'frequently asked'], 2, questions],
    ['policies', '/info/policies', ['policy', 'rules', 'can'], -1],
    ['directions', '/info/directions', ['map', 'google maps', 'apple maps', 'maps', 'way', 'city'], -1],
    ['seating', '/info/seating', ['chart', 'map', 'seats', 'sit'], -1],
    ['contact', '/contact', ['reach out', 'number', 'email', 'text', 'call'], -1]
]

searches = [
    {
        name: 'home',
        displayName: 'Home',
        description: 'Homepage of the website.',
        path: '/'
    },
    {
        name: 'about',
        displayName: 'About',
        description: 'A section describing Bluehaven Community Center Arena.',
        path: '/#about'
    },
    {
        name: 'events',
        displayName: 'Events',
        description: 'A list of upcoming events where you can purchase tickets.',
        path: '/events'
    },
    {
        name: 'info',
        displayName: 'Info',
        description: 'Information about Bluehaven and the Commnuity Center Arena.',
        path: '/info'
    },
    {
        name: 'faq',
        displayName: 'FAQ',
        description: 'Frequently Asked Questions.',
        path: '/info/faq'
    },
    {
        name: 'policies',
        displayName: 'Policies',
        description: 'Rules and guidelines for the Bluehaven Community Center Arena',
        path: '/info/policies'
    },
    {
        name: 'directions',
        displayName: 'Directions',
        description: 'Directions to the Bluehaven Community Center Arena. Also includes Apple and Google maps links.',
        path: '/info/directions'
    },
    {
        name: 'seating',
        displayName: 'Seating',
        description: 'Seating chart of the Bluehaven Community Center Arena.',
        path: '/info/seating'
    },
    {
        name: 'contact',
        displayName: 'Contact Us',
        description: 'Contact information for the Bluehaven Community Center Arena and a place to book the arena for your own event.',
        path: '/contact'
    },
]

//////////////////////////////////////////////////////////////////////
//                                                                  //
//                         GLOBAL ELEMENTS                          //
//                                                                  //
//      This section is for elements and functions that can         //
//         be shared across pages, such as the navbar.              //
//                                                                  //
//////////////////////////////////////////////////////////////////////

function injectNav() { // function to add the navbar to a page. puts all navbar code at the start of the body. made so i can update the navbar if necessary
    $('body').prepend('<nav>');
    $('body>nav').prepend('<ul>');
    $('body>nav>ul').append('<a href=/><li>HOME</li></a>')
    $('body>nav>ul').append('<a href=/events/><li>EVENTS</li></a>')
    $('body>nav>ul').append('<a href=/info/><li>INFO</li></a>')
    $('body>nav>ul').append('<a href=/contact/><li>CONTACT US</li></a>')
    $('body>nav').append(`</ul>
        <ul>
            <input class=nav-search placeholder="Search"></input>
        </ul>
        
        </nav>`);
    $('body').prepend(`<div class=search-results></div>`);
    console.log('Navigation bar injected!');
}

function generatePlaceholder(elem) { // function to set src of image to placeholder if needed 
    elem.attr('src', `https://placehold.co/${Math.floor(elem.width())}x${Math.floor(elem.height())}`);
}

function checkSimilarCharacters(one, two) {
    var c = 0;
    var f = -1;
    for (i=0;i<one.length;i++) {
        f = two.indexOf(one.charAt(i));
        if (f > -1) {
            c++;
            two = two.substr(0, f) + two.substr(f + 1)
        }
    }
    return c;
}

function insertImage(elem) {
    const index = images.findIndex(image => image[0] === $(elem).data('background-image'));
    let path = null;
    if (index !== -1) {
        path = images[index][1]
    }
    elem.css('background-image', `url(${path})`);
    console.log((()=>{if(path===null){return `Failed to insert image!\n\nDebug: index=${index}\n$(elem).data('background-image'): ${$(elem).data('background-image')}`}else{return `Inserted ${path}.`}})())
}

function querySearch(q) {
    console.log('Searching for: '+q);
    var possibleQueries = structuredClone(siteHiearchy);
    possibleQueries.forEach(function (e) { //adds a value to the end of every array to give it a score against the current query
        e.push(0);
    })
    const len = q.length //short
    var termsScored = []; //define variable
    possibleQueries.forEach(function (e) {
        console.log(e[0], e[2])
        const combinedTerms = [e[0], ...e[2]];
        
        let totalScore = 0;
        combinedTerms.forEach(function (t) {
            totalScore += checkSimilarCharacters(t, q)/((combinedTerms.indexOf(t)+1)*(2^((-1 * combinedTerms.indexOf(t))+1))); // score
        })

        termsScored.push({
            name: e[0],
            link: e[1],
            score: totalScore+1
        });
    });

    termsScored.sort((a,b) => b.score - a.score); // sort the terms
    
    console.log(termsScored);

    return termsScored;
}

//////////////////////////////////////////////////////////////////////
//                                                                  //
//                           ON PAGE LOAD                           //
//                                                                  //
//      This section is for running functions when the page         //
//                             loads.                               //
//                                                                  //
//////////////////////////////////////////////////////////////////////

$(function () {
    injectNav();
    $('head').prepend(`<link rel="stylesheet" href="/global/normalize.css">`)
    $('body').prepend(`<script src="/global/events.js/" type="module">`)
    $('img[src=""]').each(function () {
        generatePlaceholder($(this));
    })

    $('[data-background-image]').each(function () {
        insertImage($(this));
    })


    $('body').css('opacity', 1);

//////////////////////////////////////////////////////////////////////
//                                                                  //
//                         EVERYTHING ELSE                          //
//                                                                  //
//////////////////////////////////////////////////////////////////////

    // search function
    $('.nav-search').on('focus', () => {
        if($('.nav-search').val()!==""){$('.search-results').addClass('active');}
    })
    $('.nav-search').on('input', () => {
        if($('.nav-search').val()===""){$('.search-results').removeClass('active');}else{$('.search-results').addClass('active');}
        let order = querySearch($('.nav-search').val());

        $('.search-results').html('');

        order.forEach(function (e) {
            if (e.score > $('.nav-search').val().length/order[0].score){
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
    $('.nav-search').on('blur', () => {
        setTimeout(()=>{$('.search-results').removeClass('active');},200)
    })

})

// do not write anything down here