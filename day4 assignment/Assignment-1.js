function changeimg(){
    const im=document.getElementById("image1");
    const newimage="krishna.jpg";
    // console.log(im.id)
    im.src=newimage;
}

function original(){
    const im1= document.getElementById("image1");
    const newi="shivaji.jpg";
    im1.src=newi;
}

function change(){
    const im2=document.getElementById("image1");
    if(im2.src.match("shivaji")){
        im2.src="krishna.jpg";
    }
    else{
        im2.src="shivaji.jpg";
    }
}