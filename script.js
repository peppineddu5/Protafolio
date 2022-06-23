const cursor = document.createElement("div");

cursor.classList.add("cursor");
const follow = document.createElement("div");
follow.classList.add("follow");
follow.innerHTML = `

`
let block = false;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

} else {

    document.body.appendChild(cursor);

    document.body.appendChild(follow);
    document.addEventListener("DOMContentLoaded", function () {
        init();
    });
}


let xMousePos = 0;
let yMousePos = 0;
let lastScrolledLeft = 0;
let lastScrolledTop = 0;
function move(obj) {
    obj.style = ""
    obj.style.top = yMousePos + "px";
    obj.style.left = xMousePos + "px";

}
function moveWS(obj) {

    obj.style.top = yMousePos + "px";
    obj.style.left = xMousePos + "px";

}

function init() {
    document.body.style.cursor = "none";
    if (cursor) {
        document.addEventListener("mousemove", updateMousPosi);
        document.addEventListener("scroll", updateMousScrollPosi);
        document.addEventListener("mousemove", MouseEvent1);
        document.addEventListener("scroll", MouseEvent1);
    }
}
function updateMousPosi(e) {
    xMousePos = e.pageX;
    yMousePos = e.pageY;
}
function updateMousScrollPosi() {
    const Y = window.pageYOffset || document.documentElement.scrollTop
    const X = window.pageXOffset || document.documentElement.scrollLeft
    if (lastScrolledLeft != X) {
        xMousePos -= lastScrolledLeft;
        lastScrolledLeft = X;
        xMousePos += lastScrolledLeft;
    }
    if (lastScrolledTop != Y) {
        yMousePos -= lastScrolledTop;
        lastScrolledTop = Y;
        yMousePos += lastScrolledTop;
    }
}

function MouseEvent1(e) {

    const t = e.target;
    const f = follow;
    const c = cursor;
    if(e.type=="scroll"){
        move(c);
        move(f);
        f.classList.remove("on-focus");
        f.classList.remove("full");
        return
    }
    if (t.tagName == "H1" || t.tagName == "IMG" || t.tagName == "SPAN"|| t.classList.contains("poinetCustom")) {
        c.style.backgroundColor = "transparent";
        f.classList.add("full");
        moveWS(c);
        moveWS(f);
    } else if (t.classList.contains("cursorhover")) {
        c.style.backgroundColor = "transparent";
        const act = t.getBoundingClientRect()
        f.style.top = act.top + 9 + "px";
        f.style.left = act.left + 9 + "px";
        f.style.width = act.width + "px";
        f.style.height = act.height + "px";
        f.classList.add("on-focus");
    } else {
        move(c);
        move(f);
        f.classList.remove("on-focus");
        f.classList.remove("full");
    }
    
}


let distanceScrolled = 0
document.addEventListener("scroll",()=>{
    const element = document.querySelector('.conoscenze');
    const position = element.getBoundingClientRect();
    console.log(document.querySelector('.conoscenze h2').scrollWidth)
    // checking whether fully visible
    if (position.top >= 0 && position.bottom <= window.innerHeight) {
        
    }

    // checking for partial visibility
    if (position.top < window.innerHeight && position.bottom >= 0) {
        
        console.log(position.top *100/document.querySelector('.conoscenze h2').scrollWidth)

        element.scrollTo(position.top*4.7,0)
    }
})

async function onScroll1() {
    //distanceScrolled = document.documentElement.scrollTop;
    /*
    const element = document.querySelectorAll('.home')[3];
    const position = element.getBoundingClientRect();

    // checking whether fully visible
    if (position.top >= 0 && position.bottom <= window.innerHeight) {
        

    }

    // checking for partial visibility
    if (position.top < window.innerHeight && position.bottom >= 0) {

    }
    */
}


/*
const attac=document.querySelectorAll(".attac");
attac.forEach((buttonBox)=>{
    buttonBox.addEventListener("mousemove",(e)=>{
        
        const position= buttonBox.getBoundingClientRect()
        const x=e.pageX-position.left-position.width/2;
        const y=e.pageY-position.top-position.height/2;
       
        buttonBox.style.transform=`translate(${x*0.30}px,${y*0.30}px)`
        buttonBox.children[0].style.transform=`translate(${x*0.3}px,${y*0.3}px)`
    })
    buttonBox.addEventListener("mouseout",(e)=>{
        buttonBox.style.tranform=`translate(0px,$0px)`
    })
})
*/
