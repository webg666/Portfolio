const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
      console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }  else {
        entry.target.classList.remove('show');
      }
    });
  });
  
  
  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));

  //Responsive navbar

  const toggleNav = () =>{
    document.body.dataset.nav = document.body.nav === "true" ? "false" : "true";
  }