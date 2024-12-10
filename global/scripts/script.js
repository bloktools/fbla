var blueizerImageInput = document.getElementById('blueizer-input');
blueizerImageInput.addEventListener('change', blueizerHandleImage, false);

function blueizerHandleImage(e) {
    // canvas & context
    const c = document.getElementById('blueizer-output');
    const ctx = c.getContext('2d');

    // create image
    var reader = new FileReader();
    reader.onload = function(e) {
        var img = new Image();

        img.onload = function () {
            ctx.filter = `grayscale(100%) contrast(70%)`;
            ctx.drawImage(img, 0, 0);
            ctx.filter = `none`;
            ctx.globalCompositeOperation = `overlay`;
            ctx.fillStyle = `${getComputedStyle(document.body).getPropertyValue(`--light-primary`)}`;
            ctx.fillRect(0, 0, 1920, 1080)
            ctx.globalCompositeOperation = 'source-over';
        }

        img.src = e.target.result
    }
    reader.readAsDataURL(e.target.files[0]); 
}

function opct(citation) {
    $('#source-output').text(citation);
}

function generateCitation(name, website, desc, author, xtrainfo) {
    var isAuthor = (author!="");
    var isXtraInf = (xtrainfo!="");

    console.log(isAuthor, isXtraInf);
    if (name=="") {
        opct('Err: no source name!');
        return 'Err: no source name!' ;
    }
    if (website=="") {
        opct('Err: no website !');
        return 'Err: no website !' ;
    }
    
    if (desc=="") {
        opct('Err: no description!');
        return 'Err: no description!' ;
    }

    let output = "";

    if (isAuthor && isXtraInf) {
        output = `${name}: ${website}. ${desc} by ${author}. ${xtrainfo}`;
    } else if (isAuthor && !isXtraInf) {
        output = `${name}: ${website}. ${desc} by ${author}.`;
    } else if (!isAuthor && isXtraInf) {
        output = `${name}: ${website}. ${desc}. ${xtrainfo}`;
    } else {
        output = `${name}: ${website}. ${desc}.`;
    }

    opct(output);
    console.log('Citation generated!')
}


$('#parse').click(()=>{
    generateCitation($('#source-name').val(), $('#source-website').val(), $('#source-description').val(), $('#source-author').val(), $('#source-extra-info').val())
})