window.addEventListener('load', (event) => {
  
  
  const hamburgNavLis = document.querySelectorAll('.minus__header__main_-navigationSidebarContainer ul li a');
  
  console.log(hamburgNavLis);
  
  
  if (hamburgNavLis.length > 0) {
   	const firstHamElement = hamburgNavLis[0];
    console.log(firstHamElement.textContent);
    firstHamElement.classList.add('minus__header__main-navSidebarTitle');
  } else {
   console.log('No <li> element found.'); 
  }
  
  
  
  // This code is for the active links

function activeLink() {

    const currentLocation = location.href;
    const menuItem = document.querySelectorAll('.topbar__inner__nav__ul-li a');
    const menuLength = menuItem.length;
    
    for (let i = 0; i < menuItem.length; i++) {
        if(menuItem[i].href === currentLocation) {
            menuItem[i].className = "activeLink";
        };
    };
}


activeLink();





// This code is for the dropdowns


const dropdownMenu = function() {
    const parentLinks = document.querySelectorAll('.topbar__inner__nav__ul-li');


    parentLinks.forEach(function(parentLink) {
        const childLink = parentLink.querySelector(".multilevel-linkul-0");
        parentLink.addEventListener("mouseover", function (e) {
          childLink.style.display = "block";
        });
    
        parentLink.addEventListener("mouseout", function (e) {
            childLink.style.display = "none";
          });
    });
    
    
};



dropdownMenu();
  
  
  
  

const dropdownSubMenu = function() {
    const parentLinks = document.querySelectorAll('.multilevel-linkul-0 li');


    parentLinks.forEach(function(parentLink) {
        const childLink = parentLink.querySelector(".multilevel-linkul-1");
        parentLink.addEventListener("mouseover", function (e) {
          childLink.style.display = "block";
        });
    
        parentLink.addEventListener("mouseout", function (e) {
            childLink.style.display = "none";
          });
    });
    
    
};



dropdownSubMenu();


  
  
  
  
  
  




// // This is for the images within the working section

const animatedBoxes = function() {
    const workBoxes = document.querySelectorAll('.working__box');

    workBoxes.forEach(function(workBox) {
        const workImg = workBox.querySelector('.working__box-img');
        const workTxt = workBox.querySelector('.working__box-txt');
        const workOver = workBox.querySelector('.working__box-overlay');
        workBox.addEventListener("mouseover", function (e) {
                workImg.classList.add("imgScale");
                workTxt.classList.add("txtMove");
                workOver.classList.add("overlayBg");
        });

        workBox.addEventListener("mouseleave", function (e) {
            workImg.classList.remove("imgScale");
            workTxt.classList.remove("txtMove");
            workOver.classList.remove("overlayBg");
        });
    });

    
};

animatedBoxes();


    

  
  
  
const stickyNavigation = function() {

    const nav = document.querySelector('.topbar');

    const header = document.querySelector('.header');

    let pageTop = header.offsetTop;

    function fixedNav() {
        if(window.scrollY >= pageTop) {
            nav.classList.add('sticky');
        } 
        
        if(window.scrollY <= pageTop) {
            nav.classList.remove('sticky');
        }
    }

    window.addEventListener('scroll', fixedNav);

}

stickyNavigation();
  
  
  
  
  
  
  
  


const showMobilNav = function() {
    const menuBtn = document.querySelector('.mobilTopBar__menuToggle');

    const mobilNav = document.querySelector('.mobil');
    
    
    menuBtn.addEventListener("click", function(e) {
    
        mobilNav.classList.toggle("revealNav");
    
    });
};

showMobilNav();
  
  
  
  
  
  
  
  
  
  
const mobileDropDown = function() {
    const parentMobileLis = document.querySelectorAll('.mobile__ul-li');

    parentMobileLis.forEach(function(parentMobileLi) {
        
        const liChild = parentMobileLi.querySelector(".mobile__ul-li-ulsub");
        
    
        parentMobileLi.addEventListener("click", function(e) {
            liChild.classList.toggle("revealMobile");
        })
    });
    
};


mobileDropDown();
  
  
  
  
  const mobileDropDownLvlB = function() {
    const parentMobileLvlBs = document.querySelectorAll('.mobile__ul-li-ulsub-li');

    parentMobileLvlBs.forEach(function(parentMobileLvlB) {
        const lvlBchild = parentMobileLvlB.querySelector(".mobile__ul-li-ulsub-li-ul");

        parentMobileLvlB.addEventListener("click", function(e) {
            lvlBchild.classList.toggle("revealMobile");
        })
    });
};

mobileDropDownLvlB();
  
  
   

  
  
  
const copyright = function() {
    var year = document.querySelector(".footer-year");
    if (year) {
        var date = new Date();
        year.innerText = date.getFullYear().toString();
    }
    
}


copyright();
  
  
  

  
  
  const tabContainer = function() {

    const btns = document.querySelectorAll(".tab-btn");
    const resources = document.querySelector(".resources");
    const articles = document.querySelectorAll(".tab-content");

    resources.addEventListener("click", function(e) {
        const id = e.target.dataset.id;
    
        if (id) {
           btns.forEach(function(btn) {
            btn.classList.remove("active");
            e.target.classList.add("active");
           });


            articles.forEach(function (article) {
                article.classList.remove("active");
            });
            const element = document.getElementById(id);
            element.classList.add("active");
        }
    });

};

tabContainer();
  
  
  
  
  






}); // End of window load event













































