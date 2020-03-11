// Your code goes here

// import { gsap } from "gsap";

// function clickEventHandler(event){
//     event.preventDefault();
//     console.log(event.type + '!!!!!!!!!!')
//     console.log(event.target)
//     console.log(event.currentTarget)

//     // document.body.innerHTML = "<div>gone</div>"
// }

// homeLink.addEventListener(
//     'click', ()=> {
//         console.log('the link was clicked')
//     }


// )

// document.querySelector('nav').addEventListener('click', (clickEventHandler))

// document.querySelector('.intro').addEventListener('click',(clickEventHandler))

// document.body.addEventListener('click', (clickEventHandler)
//     )

// document.addEventListener('click', (clickEventHandler))

// window.addEventListener('click', (clickEventHandler))
// document.querySelector('a').addEventListener('click', event => {
//     event.stopPropagation();
//     console.log('hahaha stop the prop')
// })
// document.querySelector('header').addEventListener('click', clickEventHandler)
///mouseOver
const navHead = document.querySelector('.nav-container .logo-heading');

navHead.addEventListener("mouseover", ()=>{
    navHead.style.color= "red"
    // navHead.style.transform ="scale(1.2)"
    
})

const navText = document.querySelectorAll('.nav .nav-link').forEach((el) => 
    el.addEventListener('mouseover', () =>{
        el.style.color = "red"
        el.style.transform ="scale(1.2)";
    } )
)


/// mouseLeave
const navTextback = document.querySelectorAll('.nav .nav-link').forEach((el) => 
    el.addEventListener('mouseleave', () =>{
        el.style.color = "blue"
        // el.style.transform ="scale(1)";
    } )
)


///onclick/ preventDefault

const onclickNav =  document.querySelectorAll('.nav .nav-link').forEach((el) => 
el.addEventListener('click', (event) =>{
    el.style.color = "green"
    // el.style.transform ="scale(1)";
    event.preventDefault();
} )
)





///keyDown 
const keyDownHead = document.querySelectorAll('h2')
document.addEventListener("keydown", event => {
    if (event.keyCode == "38" ) {
      return;
    }
    keyDownHead[0].style.color = "red"
    keyDownHead[0].style.transform ="scale(1.5)";
    keyDownHead[1].style.color = "red"
    keyDownHead[1].style.transform ="scale(1.5)";
    keyDownHead[2].style.color = "red"
    keyDownHead[2].style.transform ="scale(1.5)";
    keyDownHead[3].style.color = "red"
    keyDownHead[3].style.transform ="scale(1.5)";
  });


  ///wheel

  const scaleImg = document.querySelector('.intro img')
  
  scaleImg.addEventListener('wheel', ()=>{
        scaleImg.style.transform= "scale(1)"
  })

  const scaleImg2 = document.querySelector('.content-destination img')
  
  scaleImg2.addEventListener('wheel', ()=>{
        scaleImg2.style.transform= "scale(1)"
  })

//   gsap.to('img', {rotation: 27, x: 100, duration: 1});

  //scroll 
  const scrolImg = document.querySelector('.intro img')

  window.addEventListener('scroll', ()=>{
        scrolImg.style.transform = "scale(2)"
  })


//dblclick

const dblNav = document.querySelectorAll('.nav .nav-link').forEach(el => el.addEventListener('dblclick', ()=>{
    el.style.transform = "scale(2)"
}))


//load

window.addEventListener('load', (event) => {
    alert('page is fully loaded');
  });

  //resize

  const resizedImg = document.querySelector('.content-destination img')

  window.addEventListener('resize', ()=>{
      resizedImg.style.transform = "scale(1.2)"
      resizedImg.src = "img/green-palm-trees-near-body-of-water-1030322.jpg"
  } )

  //focus

  const focusFoot = document.querySelector('.footer')

  focusFoot.addEventListener('focus', ()=> {
      focusFoot.style.transform ="scale(2)"
  })

