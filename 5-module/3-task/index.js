function initCarousel() {
  const carouselArrowLeft = document.querySelector(`.carousel__arrow_left`);
  const carouselArrowRhight = document.querySelector(`.carousel__arrow_right`);
  const carousel = document.querySelector(`.carousel__inner`);
  const amountOfSlides = 4;

  let counter = 0;

  carouselArrowLeft.style.display = 'none';
  
  carouselArrowLeft.addEventListener('click', () => {

    if (counter === 1) {
      carouselArrowLeft.style.display = 'none';
    }

    carouselArrowRhight.style.display = '';
    carousel.style.transform = `translateX(${-carousel.offsetWidth * (counter -1)}px)`;
    counter -= 1;
    console.log(counter);
  }
  );
  
  carouselArrowRhight.addEventListener('click', () => {
    
    if (counter === amountOfSlides - 2){
      
      carouselArrowRhight.style.display = 'none';
   
    }

    carouselArrowLeft.style.display = '';
    counter += 1;
    console.log(counter);
    carousel.style.transform = `translateX(-${carousel.offsetWidth * counter}px)`;
  })
  };

  
  

