document.addEventListener("DOMContentLoaded", () => {
  const datepicker = document.getElementById("calendar");

  const generateCalendar = (year, month) => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0).getDate();
    const calendar = [];
    const startDay = 4; // 設定1號在星期四的位置
    let week = Array(startDay).fill("");

    for (let day = 1; day <= lastDay; day++) {
      week.push(day);
      if (week.length === 7) {
        calendar.push(week);
        week = [];
      }
    }

    if (week.length > 0) {
      calendar.push([...week, ...Array(7 - week.length).fill("")]);
    }

    return calendar;
  };

  const renderCalendar = (calendar) => {
    const calendarContainer = document.createElement("div");
    calendarContainer.className = "grid grid-cols-7 gap-3";

    // 渲染星期標題
    ["S", "M", "T", "W", "T", "F", "S"].forEach((day) => {
      calendarContainer.innerHTML += `<div class="text-center py-2 text-[#6A706F] text-xs">${day}</div>`;
    });

    const specialDays = [1, 2, 3]; // 需要特殊處理的日期
    const grayDays = [4, 8, 9, 10, 15, 16, 25, 26, 27, 31]; // 灰色天數

    // 渲染日曆日期
    calendar.flat().forEach((day) => {
      let dayClass = "";
      if (specialDays.includes(day)) {
        if (day === 1) {
          dayClass =
            "text-center rounded-full z-10 bg-brand-300 text-brand-800"; // 1號的樣式
        } else if (day === 2) {
          dayClass = "bg-brand-50 -mx-8"; // 2號的樣式
        } else if (day === 3) {
          dayClass = "bg-yellow-200 rounded-full text-brand-800"; // 3號的樣式
        }
      } else if (grayDays.includes(day)) {
        dayClass = "text-gray-300"; // 灰色天數的樣式
      }
      calendarContainer.innerHTML += `<a href="#" class="focus:bg-brand-300 rounded-full text-center py-1.5 text-sm ${dayClass}">${day}</a>`;
    });

    datepicker.appendChild(calendarContainer);
  };

  renderCalendar(generateCalendar(2024, 7)); // August (0-based index)
});
