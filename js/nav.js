const main_nav = document.querySelector("div.control");
const body = document.querySelector(".body");

main_nav.addEventListener("click", (event) => {
  const target = event.target;
  const tag_name = event.target.tagName;
  const class_name = target.className;
  if (tag_name === "I") {
    if (class_name == "fa-solid fa-calendar-days") {
      importHTML(body, "./calendar.html");
    } else if (class_name === "fa-solid fa-circle-plus") {
      improtHTML(body, "./add.html");
    } else if (class_name === "fa-solid fa-bell") {
      importHTML(body, "./bell.html");
    }
  }
});
