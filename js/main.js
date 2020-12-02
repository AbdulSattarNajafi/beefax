{//--------------Preloader
  const preloader = document.querySelector('.preloader'); 
  window.addEventListener('load', function() {
    setInterval(loader, 300);
    function loader() {
      preloader.style.display = 'none';
      clearInterval();
    }
  });
};//-----------End of preloader

{//-------------Navbar
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.nav-menu');
const links = document.querySelector('.nav-links');
const closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener('click', function() {
  const linksContainerHeight = menu.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

   if(linksContainerHeight === 0) {
     menu.style.height = `${linksHeight}px`;
   }else{
     menu.style.height = 0;
   } 
});

closeBtn.addEventListener('click', function() {
  menu.style.height = 0;
});
};//------End of Navbar

{//----------Search area
const searchBtn = document.querySelector('.search-btn');
const closeSearchBtn = document.querySelector('.close-search');
const searchArea = document.querySelector('.search-area');
searchBtn.addEventListener('click', function() {
  searchArea.classList.add('show-search-area');
});
closeSearchBtn.addEventListener('click', function() {
  searchArea.classList.remove('show-search-area');
});
};//--------End of search area

{//---------Scrop top
  const scrollTop = document.querySelector('.scroll-up');
  window.addEventListener('scroll', function() {
    const scrollHeight = window.pageYOffset;
    if(scrollHeight > 500) {
      scrollTop.classList.add('show-scroll-up');
    }else {
      scrollTop.classList.remove('show-scroll-up');
    }
  })
};//---------End of Scroll Top

{//---------countup for Facts
  const counters = document.querySelectorAll('.counter');
  const speed = 300;
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;

      const inc = target / speed;

      if(count < target) {
        counter.innerText = Math.ceil(count + inc);
        setTimeout(updateCount, 1);
      } else {
        count.innerText = target;
      }
    }
    updateCount();
  });
};//---------End of countup

{//--------FAQ page
  const questions = document.querySelectorAll('.article-box');
  questions.forEach(function(btns) {
    const specificBtn = btns.querySelector('.answer-btn');
    specificBtn.addEventListener('click', function() {
      questions.forEach(function(item) {
        if(item !== btns){
          item.classList.remove('show-answer');
        }
      })
      btns.classList.toggle('show-answer')
    })
  });
};//----------End of FAQ page

{//----------Setting date for Footer
  const date = document.getElementById('date');
  date.innerText = new Date().getFullYear();
};//----End of setting date for footer


