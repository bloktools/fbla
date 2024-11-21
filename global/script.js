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
]

//////////////////////////////////////////////////////////////////////
//                                                                  //
//                         GLOBAL ELEMENTS                          //
//                                                                  //
//      This section is for elements that can be shared across      //
//                  pages, such as the navbar.                      //
//                                                                  //
//////////////////////////////////////////////////////////////////////

function injectNav() { // function to add the navbar to a page. puts all navbar code at the start of the body. made so i can update the navbar if necessary
    $('body').prepend('<nav>');
    $('body>nav').prepend('<ul>');
    $('body>nav>ul').append('<a href=/><li>HOME</li></a>')
    $('body>nav>ul').append('<a href=/events/><li>EVENTS</li></a>')
    $('body>nav>ul').append('<a href=/info/><li>INFO</li></a>')
    $('body>nav>ul').append('<a href=/contact/><li>CONTACT US</li></a>')
    $('body>nav').append('</ul></nav>');
    console.log('Navigation bar injected!');
}

function generatePlaceholder(elem) { // function to set src of image to placeholder if needed 
    elem.attr('src', `https://placehold.co/${Math.floor(elem.width())}x${Math.floor(elem.height())}`);
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
    $('img[src=""]').each(function () {
        generatePlaceholder($(this));
    })

    $('[data-background-image]').each(function () {
        insertImage($(this));
    })


    $('body').css('opacity', 1);
})