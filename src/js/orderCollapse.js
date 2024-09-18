document.addEventListener("DOMContentLoaded", () => {
  const orderDropdownWhen = document.getElementById("orderDropdown-when");
  const orderDatepicker = document.getElementById("orderDatepicker");
  const orderDatepickerTitle = document.querySelector(".orderDatepicker-title");
  const orderDatepickerSelected = document.querySelector(
    ".orderDatepicker-selected",
  );

  const orderAccordionWho = document.getElementById("orderAccordion-who");
  const orderMember = document.getElementById("orderMember");
  const orderMemberTitle = document.querySelector(".orderMember-title");

  const orderAccordionTime = document.getElementById("orderAccordion-time");
  const orderTime = document.getElementById("orderTime");
  const orderTimeTitle = document.querySelector(".orderTime-title");

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

  orderAccordionWho.addEventListener("click", () => {
    if (orderMember.classList.contains("h-0")) {
      orderMember.classList.remove("h-0");
      orderMember.classList.add("h-[260px]");
      orderAccordionWho.classList.add(
        "rounded-b-none",
        "border-b",
        "border-neutral-100",
      );
      orderMemberTitle.textContent = "Who’s going?";
    } else {
      orderMember.classList.remove("h-[260px]");
      orderMember.classList.add("h-0");
      orderMember.addEventListener("transitionend", handleTransitionEnd);
      orderMemberTitle.textContent = "Who";
    }
  });

  orderDropdownWhen.addEventListener("click", () => {
    if (orderDatepicker.classList.contains("h-0")) {
      orderDatepicker.classList.remove("h-0");
      orderDatepicker.classList.add("h-[334px]");
      orderDropdownWhen.classList.add(
        "rounded-b-none",
        "border-b",
        "border-neutral-100",
      );
      orderDatepickerTitle.textContent = "Select a date?";
      orderDatepickerSelected.textContent = "Aug 2";
      orderDatepickerSelected.classList.remove("text-sm");
    } else {
      orderDatepicker.classList.remove("h-[334px]");
      orderDatepicker.classList.add("h-0");
      orderDatepicker.addEventListener("transitionend", handleTransitionEnd);
      orderDatepickerTitle.textContent = "When";
      orderDatepickerSelected.textContent = "From tomorrow";
      orderDatepickerSelected.classList.add("text-sm");
    }
  });

  orderAccordionTime.addEventListener("click", () => {
    if (orderTime.classList.contains("h-0")) {
      orderTime.classList.remove("h-0");
      orderTime.classList.add("h-[288px]");
      orderAccordionTime.classList.add(
        "rounded-b-none",
        "border-b",
        "border-neutral-100",
      );
      orderTimeTitle.textContent = "Select time";
    } else {
      orderTime.classList.remove("h-[288px]");
      orderTime.classList.add("h-0");
      orderTime.addEventListener("transitionend", handleTransitionEnd);
      orderTimeTitle.textContent = "Time";
    }
  });
});
