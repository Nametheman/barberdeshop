
 

const backToTopButton = document.getElementById("back-to-top")
        var menuBtn = document.getElementById("menuBtn")
        var sideNav = document.getElementById("sideNav")
        var menu = document.getElementById("menu")
        var navLinks = document.getElementById("navlinks")
    
        window.addEventListener("scroll", scrollFunction);

        function scrollFunction(){
            if(window.pageYOffset > 300){
                if(!backToTopButton.classList.contains("btnEntrance")){
                    backToTopButton.classList.remove("btnExit");
                    backToTopButton.classList.add("btnEntrance");
                    backToTopButton.style.display = "block";
                } 
            }else{
                if (backToTopButton.classList.contains("btnEntrance")){    
                    backToTopButton.classList.remove("btnEntrance");
                    backToTopButton.classList.add("btnExit");
                    setTimeout(function(){
                        backToTopButton.style.display = "none"; 
                    }, 250);
                }
            }
        }

        backToTopButton.addEventListener("click", backToTop);
        function backToTop(){
            window.scrollTo(0,0);
        }


        sideNav.style.right = "-250px";

        menuBtn.onclick = function (){
            if(sideNav.style.right == "-250px"){
                sideNav.style.right = "0";
                menu.src = "images/close.png"
            }else{
                sideNav.style.right ="-250px"
                 menu.src = "images/menu.png"
            }
        }

      navLinks.onclick = function() {navClicked()};
            
          function navClicked(){
              sideNav.style.right ="-250px";
              menu.src = "images/menu.png";
          }
        
        var scroll = new SmoothScroll('a[href*="#"]', {
                speed: 500,
                speedAsDuration: true
            });


let heroBtn = document.querySelector("banner-btn");

heroBtn.addEventListener("click", clickerr);
function clickerr() {
    console.log("hi!");
};            