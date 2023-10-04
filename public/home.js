
  function checkScroll() {
    
    const scrollTop = window.pageYOffset;
    const topSide = document.getElementById("top_slide");
    const topSideRect = topSide.getBoundingClientRect();
   
    console.log("top side",topSideRect.top);
   console.log("scrollTop",scrollTop);
    console.log(topSideRect.top- scrollTop)
    if(topSideRect.top-scrollTop >= 50){
        
    }
   else if (topSideRect.top-scrollTop <= -400) {

    topSide.style.display=''
        topSide.style.animation = "slideInFromRight 0.8s ease forwards";
    }
      
    
  
   return window.requestAnimationFrame(checkScroll);
  }

  window.addEventListener('scroll', function() {
    window.requestAnimationFrame(checkScroll);
  });