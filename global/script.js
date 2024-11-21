//////////////////////////////////////////////////////////////////////
//                                                                  //
//                        GLOBAL VARIABLES                          //
//                                                                  //
//     This section is for variables that can be shared across      //
//                           all scripts.                           //
//                                                                  //
//////////////////////////////////////////////////////////////////////



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
    elem.attr('src', `https://placehold.co/${elem.width()}x${elem.height()}`);
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
    for (i=0;i<$('img[src=""]').length;i++) {
        generatePlaceholder($(`img[src=""]:nth-child(${i+1})`));
    }


    $('body').css('opacity', 1);
})