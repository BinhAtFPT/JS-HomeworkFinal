/*Name this external file gallery.js*/

// Original Div text
let origDiv = '';

function upDate(previewPic){
    /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image
       
    2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */
    console.log("upDate Function is triggered");
    const replace = document.getElementById('image');
    const imgSrc = previewPic.src;
    const imgAlt = previewPic.alt;
    // Save the Original Div text to later undo
    origDiv = image.innerHTML;
    replace.style.backgroundImage = `url('${imgSrc}')`;
    replace.innerHTML = previewPic.alt;
}
   
function unDo(){
    /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was
       
    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */
    console.log("unDo Function is triggered");
    const replace = document.getElementById('image');
    const css = getComputedStyle(replace);
    const imgSrc = css.backgroundImage;
    replace.style.backgroundImage = `url('${imgSrc}')`;
    replace.innerHTML = origDiv;
}