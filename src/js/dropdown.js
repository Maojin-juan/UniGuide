document.addEventListener("DOMContentLoaded", () => {
  const dropdownWhen = document.getElementById("dropdown-when");
  const datepicker = document.getElementById("datepicker");
  const datepickerTitle = document.querySelector(".datepicker-title");
  const datepickerSelected = document.querySelector(".datepicker-selected");

  const handleTransitionEnd = () => {
    dropdownWhen.classList.remove("rounded-b-none");
    datepicker.removeEventListener("transitionend", handleTransitionEnd);
  };

  dropdownWhen.addEventListener("click", () => {
    if (datepicker.classList.contains("h-0")) {
      datepicker.classList.remove("h-0");
      datepicker.classList.add("h-96");
      dropdownWhen.classList.add(
        "rounded-b-none",
        "border-b",
        "border-neutral-100",
      );
      datepickerTitle.textContent = "When’s the trip?";
      datepickerSelected.textContent = "Aug 1-3";
      datepickerSelected.classList.remove("text-sm");
    } else {
      datepicker.classList.remove("h-96");
      datepicker.classList.add("h-0");
      datepicker.addEventListener("transitionend", handleTransitionEnd);
      datepickerTitle.textContent = "When";
      datepickerSelected.textContent = "From tomorrow";
      datepickerSelected.classList.add("text-sm");
    }
  });
});
