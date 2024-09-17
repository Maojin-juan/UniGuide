import Swiper from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

const swiper = new Swiper(".mySwiper", {
  modules: [Pagination, Autoplay],
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
