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