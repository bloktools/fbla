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
    [`What are the operating hours of the Arena?`, `The Arena is open Monday to Friday, 8 AM to 8 PM, and weekends from 10 AM to 6 PM. Closed on public holidays.`],
    [`Are food and drinks allowed inside the Arena?`, `Yes, food and drinks are allowed in designated areas, but no outside beverages or large meals.`],
    [`What types of events are hosted at the School Arena Center?`, `We host basketball games, school assemblies, talent shows, concerts, and community fundraisers.`],
    [`Do you offer tours of the Arena for prospective students or families?`, `Yes, tours are available by appointment every Wednesday at 3 PM. Call ahead to schedule.`],
    [`Can students reserve the arena for club or team practice?`, `Yes, students can reserve the Arena for practice by filling out a request form. There is a small fee for non-school events.`],
    [`Are there Wi-Fi or charging stations available in the Arena?`, `Free Wi-Fi is available throughout the Arena, and charging stations are located near the seating areas.`],
    [`What is the seating capacity of the Arena?`, `The Arena can seat up to 3,500 people for large events and 500 for smaller gatherings.`],
    [`Are there volunteer opportunities at the Arena?`, `Yes, volunteers are needed for event assistance, ticket sales, and crowd control. Call ahead to schedule.`],
    [`Does the Arena host any annual or special events?`, `Yes, the Arena hosts an annual sports tournament and a back-to-school fair each fall.`],
    [`Are there any fitness classes or programs held at the Arena?`, `We offer basketball training sessions and occasional yoga classes on weekends.`],
    [`What should I do if I lose something at the Arena?`, `Contact the Arena front desk or email the lost and found department. Items are kept for two weeks.`],
    [`Is there a dress code or special requirements for events?`, `For sports events, athletes must wear official uniforms. Concert-goers are encouraged to dress casually.`],
];
const eventList = [ // title, description, price, start DD MMM. YYYY, end DD MMM. YYYY, H:MM A/PM, IMG
    // set end to -1 to signify single day event
    // set time to -1 to signify all day / or if its multiple days
    // set img to -1 to signify placeholder

//riley: make like 10 events

    ["Winter Sports Season Kickoff", "Celebrate the start of winter sports with games, music, and team introductions.", 10, "November 29, 2024", -1, "5:30 PM", -1],
    ["BlueHaven Holiday Festival", "Enjoy a festive evening with lights, music, and holiday crafts.", 15, "December 10, 2024", -1, "6:00 PM", -1],
    ["Rolling Loud", "Celebrate 10 years of Rolling Loud at the Bluehaven Community Center in Tampa, FL.", 300, "Becember 13, 2024", "15 Dec. 2024", -1, "https://media.npr.org/assets/img/2021/11/16/gettyimages-1235223332_sq-e88ad790d447bd7dfcb0c1571047db26d39a8ee0.jpg?s=1100&c=85&f=jpeg"],
    ["New Year’s Celebration Game", "Kick off the year with an exciting basketball game and halftime show.", 12, "January 5, 2025", -1, "7:00 PM", -1, -1],
    ["Valentine’s Movie Night", "Watch a classic romance movie under the arena lights with snacks.", 8, "February 14, 2025", -1, "8:00 PM", -1],
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
        <ul class='search-settings-nav-container'>
            <input class=nav-search placeholder="Search"></input>
            <button id='activate-settings'><i class=material-symbols-sharp>settings</i></button>
        </ul>
        
        </nav>`);
    $('body').prepend(`<div class=search-results></div>`);
    $('head').append(`<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&text=helpwarningmapevent_seat" />`)
    $('head').append(`<style>
        .material-symbols-sharp {
          font-variation-settings:
          'FILL' 0,
          'wght' 400,
          'GRAD' 0,
          'opsz' 24
        }
        </style>`)
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

function queryScoreMultiplier(idx) {
    return ((2*idx^4+idx^3+24)/(6*idx^4+3*idx^3));
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
            totalScore += checkSimilarCharacters(t, q)*queryScoreMultiplier(e.indexOf(t)); // score
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

function settingsHandler(opt, elem) {
    if (opt === 'inject') {
        $('body').prepend(`
        <div class=settings-container>
            <div class=settings>
                <h1>Settings</h1>
                <label for='select-color-mode'>Color Mode:</label>
                <select name='select-color-mode' id='select-color-mode'>
                    <option value='light'>Light Mode</option>
                    <option value='dark'>Dark Mode</option>
                    <option value='light-high-contrast'>Light Mode (High Contrast)</option>
                    <option value='dark-high-contrast'>Dark Mode (High Contrast)</option>
                </select>

                <button class=close-settings>Close</button>
            </div>
        </div>    
        `)
    $('.settings-container').hide();
    } else if (opt === 'colorMode') {
        const mode = elem.val();
        if (mode==='light') {setLightMode()
            localStorage.setItem('colorMode', 'light')
        }
        else if (mode==='dark') {setDarkMode()
            localStorage.setItem('colorMode', 'dark')
        }
        else if (mode==='light-high-contrast') {setLightModeHighContrast()
            localStorage.setItem('colorMode', 'light-high-contrast')
        }
        else if (mode==='dark-high-contrast') {setDarkModeHighContrast()
            localStorage.setItem('colorMode', 'dark-high-contrast')
        }
        else {console.error('could not change color mode')};
    } else {
        console.error('var opt in settingsHandler was not specified correctly!');
        return;
    }
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
    settingsHandler('inject');
    $('head').prepend(`<link rel="stylesheet" href="/global/normalize.css">`);
    $('body').prepend(`<script src="/global/dark_mode_handler.js">`);
    $('img[src=""]').each(function () {
        generatePlaceholder($(this));
    })

    $('[data-background-image]').each(function () {
        insertImage($(this));
    })
    



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
            console.log(`============\nTerm: ${e.name} | Score: ${e.score}\n | Input Length ${$('.nav-search').val().length}==================`);
            if (e.score > (($('.nav-search').val().length)^4) && order.indexOf(e)<5){
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

    $('#activate-settings').on('click', function () {
        $('.settings-container').toggle();
    })
    $('.close-settings').on('click', function () {
        $('.settings-container').hide();
    })
    
    $('#select-color-mode').on('input', function () {
        settingsHandler('colorMode', $(this));
    })



    $('body').css('opacity', 1);

})

// do not write anything down here