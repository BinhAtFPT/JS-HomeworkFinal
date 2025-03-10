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
    document.getElementById('image').style.backgroundImage = `url('${previewPic.src}')`;
    origDiv = image.innerHTML;
    document.getElementById('image').innerHTML = previewPic.alt;
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
    replace.style.backgroundImage = `url('${css.backgroundImage}')`;
    replace.innerHTML = origDiv;
}

function giveTabIndex() {
    console.log("Giving all images a tabindex");
    currentImages = document.querySelectorAll(".preview");
    for (i = 0; i < currentImages.length; i++) {
        console.log("Image "+ i);
        currentImages[i].setAttribute("tabindex", i + 1);
    }
}