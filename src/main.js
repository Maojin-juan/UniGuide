import "flowbite/dist/flowbite.min.js";
import "boxicons/css/boxicons.min.css";

import "./assets/style/tailwind.css";

// show more、show less button
document.getElementById("showButton").addEventListener("click", function () {
  const textElement = document.getElementById("truncateText");

  // 切換 .expanded，控制內文是否截斷
  textElement.classList.toggle("expanded");

  // 更新按鈕文字
  if (textElement.classList.contains("expanded")) {
    this.textContent = "Show less";
  } else {
    this.textContent = "Show more";
  }
});

// Read more、read less button
document.querySelectorAll(".readButton").forEach((button) => {
  button.addEventListener("click", function () {
    // 找到相應的 p 元素
    const textElement = this.previousElementSibling;

    // 切換 .expanded，控制內文是否截斷
    textElement.classList.toggle("expanded");

    // 更新按鈕文字
    if (textElement.classList.contains("expanded")) {
      this.textContent = "Read less";
    } else {
      this.textContent = "Read more";
    }
  });
});

import "./js/carousel";
import "./js/collapse";
import "./js/datepicker";
