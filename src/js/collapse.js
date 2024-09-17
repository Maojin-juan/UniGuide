document.addEventListener("DOMContentLoaded", () => {
  const dropdownWhen = document.getElementById("dropdown-when");
  const datepicker = document.getElementById("datepicker");
  const datepickerTitle = document.querySelector(".datepicker-title");
  const datepickerSelected = document.querySelector(".datepicker-selected");

  const accordionWho = document.getElementById("accordion-who");
  const member = document.getElementById("member");
  const memberTitle = document.querySelector(".member-title");
  const memberSelected = document.querySelector(".member-selected");

  const removeTransitionStyles = (element) => {
    element.classList.remove(
      "rounded-b-none",
      "border-b",
      "border-neutral-100",
    );
  };

  const handleTransitionEnd = (event) => {
    if (event.propertyName === "height") {
      removeTransitionStyles(event.target.previousElementSibling);
      event.target.removeEventListener("transitionend", handleTransitionEnd);
    }
  };

  dropdownWhen.addEventListener("click", () => {
    if (datepicker.classList.contains("h-0")) {
      datepicker.classList.remove("h-0");
      datepicker.classList.add("h-[334px]");
      dropdownWhen.classList.add(
        "rounded-b-none",
        "border-b",
        "border-neutral-100",
      );
      datepickerTitle.textContent = "When’s the trip?";
      datepickerSelected.textContent = "Aug 1-3";
      datepickerSelected.classList.remove("text-sm");
    } else {
      datepicker.classList.remove("h-[334px]");
      datepicker.classList.add("h-0");
      datepicker.addEventListener("transitionend", handleTransitionEnd);
      datepickerTitle.textContent = "When";
      datepickerSelected.textContent = "From tomorrow";
      datepickerSelected.classList.add("text-sm");
    }
  });

  accordionWho.addEventListener("click", () => {
    if (member.classList.contains("h-0")) {
      member.classList.remove("h-0");
      member.classList.add("h-[260px]");
      accordionWho.classList.add(
        "rounded-b-none",
        "border-b",
        "border-neutral-100",
      );
      memberTitle.textContent = "Who’s going?";
      memberSelected.textContent = "1 Adult";
    } else {
      member.classList.remove("h-[260px]");
      member.classList.add("h-0");
      member.addEventListener("transitionend", handleTransitionEnd);
      memberTitle.textContent = "Who";
      memberSelected.textContent = "Only me";
    }
  });
});
