{//Header Slider
  const slideContainer = document.querySelector('.hero');
  const slide = document.querySelector('.slider-container');
  const prevBTn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const interval = 5000;

  let slides = document.querySelectorAll('.slide');
  let index = 1;
  let slideId;
  
  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);

  firstClone.id = 'firs-clone';
  lastClone.id = 'last-clone';

  slide.append(firstClone);
  slide.prepend(lastClone);

  let slideWidht = 101.5;
  slide.style.transform = `translate(${ - slideWidht * index}%)`;

  const startSlide = () => {
   slideId = setInterval(() => {
    nextSlide();
    }, interval);
  };
  const getSlides = () => document.querySelectorAll('.slide');
//Restarting the Slide
  slide.addEventListener('transitionend', function(){
    slides = getSlides();
    if(slides[index].id === firstClone.id) {
      slide.style.transition = 'none';
      index = 1;
      slide.style.transform = `translate(${ - slideWidht * index}%)`;
    }
    if(slides[index].id === lastClone.id) {
      slide.style.transition = 'none';
      index = slides.length - 2;
      slide.style.transform = `translate(${ - slideWidht * index}%)`;
    }
  });
//Function for Next Slide Button
  const nextSlide = () => {
    slides = getSlides();
    if(index >= slides.length - 1) return;
    index++;
    slide.style.transform = `translate(${ - slideWidht * index}%)`;
    slide.style.transition = '.8s';
  };

//Function for Prev Slide Button
  const prevSlide = () => {
    if(index <= 0) return;
    index--;
    slide.style.transform = `translate(${ - slideWidht * index}%)`;
    slide.style.transition = '.8s';
  };
  startSlide();

  //Mouse out and Mouseover
 /* slideContainer.addEventListener('mouseenter', function() {
    clearInterval(slideId);
  });
  slideContainer.addEventListener('mouseleave', startSlide);*/
//Next and Prev Buttons
  nextBtn.addEventListener('click', nextSlide);
  prevBTn.addEventListener('click', prevSlide);
};
//--------------Slider for services Section
