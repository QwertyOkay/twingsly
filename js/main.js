(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),

        openModalBtn1: document.querySelector('[data-modal-open1]'),
        closeModalBtn1: document.querySelector('[data-modal-close1]'),
        modal1: document.querySelector('[data-modal1]'),

        openModalBtn2: document.querySelector('[data-modal-open2]'),
        closeModalBtn2: document.querySelector('[data-modal-close2]'),
        modal2: document.querySelector('[data-modal2]'),

        openModalBtn3: document.querySelector('[data-modal-open3]'),
        closeModalBtn3: document.querySelector('[data-modal-close3]'),
        modal3: document.querySelector('[data-modal3]'),

        openModalBtn4: document.querySelector('[data-modal-open4]'),
        closeModalBtn4: document.querySelector('[data-modal-close4]'),
        modal4: document.querySelector('[data-modal4]'),

        openModalBtn5: document.querySelector('[data-modal-open5]'),
        closeModalBtn5: document.querySelector('[data-modal-close5]'),
        modal5: document.querySelector('[data-modal5]'),
      };

      refs.openModalBtn.addEventListener('click', toggleModal);
      refs.closeModalBtn.addEventListener('click', toggleModal);

      refs.openModalBtn1.addEventListener('click', toggleModal1);
      refs.closeModalBtn1.addEventListener('click', toggleModal1);

      refs.openModalBtn2.addEventListener('click', toggleModal2);
      refs.closeModalBtn2.addEventListener('click', toggleModal2);

      refs.openModalBtn3.addEventListener('click', toggleModal3);
      refs.closeModalBtn3.addEventListener('click', toggleModal3);

      refs.openModalBtn4.addEventListener('click', toggleModal4);
      refs.closeModalBtn4.addEventListener('click', toggleModal4);

    refs.openModalBtn5.addEventListener('click', toggleModal5);
    refs.closeModalBtn5.addEventListener('click', toggleModal5);

    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
  }

    function toggleModal1() {
        refs.modal1.classList.toggle('is-hidden1');
    }

    function toggleModal2() {
        refs.modal2.classList.toggle('is-hidden2');
    }

    function toggleModal3() {
        refs.modal3.classList.toggle('is-hidden3');
    }

    function toggleModal4() {
        refs.modal4.classList.toggle('is-hidden4');
    }
  
  function toggleModal5() {
    refs.modal5.classList.toggle('is-hidden5');
    }

  })();


  var swiper=new Swiper(".bestseller-slider",{slidesPerView:1,spaceBetween:10,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:2500,disableOnInteraction:!1},breakpoints:{640:{slidesPerView:2,spaceBetween:20},768:{slidesPerView:3,spaceBetween:20},1024:{slidesPerView:4,spaceBetween:30}}});
  