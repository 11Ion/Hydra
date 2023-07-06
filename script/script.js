function createSlider(sliderClass, nextBtnId, prevBtnId) {
    var items = document.getElementsByClassName(sliderClass);
    var currentIndex = 0;
    var animationInProgress = false;
  
    function showSlide(items, index, animationClass) {
      for (var i = 0; i < items.length; i++) {
        items[i].classList.remove('active');
        items[i].classList.remove('animRight');
        items[i].classList.remove('animLeft');
      }
  
      if (index >= items.length) {
        index = 0;
      } else if (index < 0) {
        index = items.length - 1;
      }
  
      items[index].classList.add('active');
  
      if (animationClass) {
        items[index].classList.add(animationClass);
      }
  
      currentIndex = index;
  
      setTimeout(function() {
        if (animationClass) {
          items[index].classList.remove(animationClass);
        }
      }, 1000);
    }
  
    function slideToNext() {
      if (animationInProgress) {
        return;
      }
  
      animationInProgress = true;
  
      showSlide(items, currentIndex + 1, 'animRight');
  
      setTimeout(function() {
        animationInProgress = false;
      }, 1000);
    }
  
    function slideToPrev() {
      if (animationInProgress) {
        return;
      }
  
      animationInProgress = true;
  
      showSlide(items, currentIndex - 1, 'animLeft');
  
      setTimeout(function() {
        animationInProgress = false;
      }, 1000);
    }
  
    var nextBtn = document.getElementById(nextBtnId);
    var prevBtn = document.getElementById(prevBtnId);
  
    nextBtn.addEventListener('click', slideToNext);
    prevBtn.addEventListener('click', slideToPrev);
  
    showSlide(items, currentIndex, '');
  }
  
  // Initializează primul slider
  createSlider('item first', 'nextBtn', 'prevBtn');
  
  // Initializează al doilea slider
  createSlider('item two', 'nextBtn2', 'prevBtn2');
  createSlider('item three', 'nextBtn3', 'prevBtn3');
