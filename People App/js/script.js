var splashScreen = document.querySelector('.splash');
splashScreen.addEventListener('click',()=>{
  splashScreen.style.opacity = 0;
  setTimeout(()=>{
    splashScreen.classList.add('hidden')
  },610)
})

var a;
function Addtolist() {
  if(a==1) {
    document.getElementById("user1").style.display="none"
    return a=1;
  } else {
    document.getElementById("user1").style.display="inline"
    return a=0;
  }
}

function Showdetail() {
  window.location.href = 'form.html';
 }