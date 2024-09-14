document.getElementById("search-button").addEventListener("click", function () {
  document.getElementById("search-dropdown").classList.toggle("hidden");
});

// 點擊 close-dropdown 按鈕時隱藏 dropdown
document
  .getElementById("close-dropdown")
  .addEventListener("click", function () {
    document.getElementById("search-dropdown").classList.add("hidden");
  });

// 點擊其他地方時隱藏 dropdown
document.addEventListener("click", function (event) {
  const isClickInside =
    document.getElementById("search-button").contains(event.target) ||
    document.getElementById("search-dropdown").contains(event.target);
  if (!isClickInside) {
    document.getElementById("search-dropdown").classList.add("hidden");
  }
});
