var imgs = ["images/img_1.png","images/img_2.png","images/img_3.png","images/img_4.png"];

var i = 0;

function changeImg() {

    if (i == imgs.length) {
        i = 0;
    }

    document.getElementById("img").src = imgs[i];
    console.log(i + " " + imgs[i]);

    i++;

    setTimeout('changeImg()',4000);


}