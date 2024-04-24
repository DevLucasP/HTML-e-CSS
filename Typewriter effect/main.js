const text = document.querySelector(".typed");
  const textLoad = () => {
    setTimeout(() => {
      text.textContent = "Desenvolvedor Front";
      }, 0);
      setTimeout(() => {
        text.textContent = "Desenvolvedor Web";
      }, 4000); 
      setTimeout(() => {
        text.textContent = "Freelancer";
      }, 8000);
}
textLoad();
setInterval(textLoad, 12000);