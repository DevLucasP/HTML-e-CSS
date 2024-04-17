window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 500)
})

/* HERO*/

const text = document.querySelector(".typed");
  const textLoad = () => {
    setTimeout(() => {
      text.textContent = "Freelancer";
      }, 0);
      setTimeout(() => {
        text.textContent = "Web Developer";
      }, 4000);
      setTimeout(() => {
        text.textContent = "Frontend Developer";
      }, 8000); 
}
textLoad();
setInterval(textLoad, 12000);