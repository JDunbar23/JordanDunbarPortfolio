
const navToggle = document.querySelector(".nav-toggle"); 
const navLink = document.querySelectorAll(".nav-link");


// In the event of the navToggle being clicked
navToggle.addEventListener("click", () =>
{

  document.body.classList.toggle("nav-open");
});


// In the event of any link in the navbar being clicked
navLink.forEach(link =>
  {

    link.addEventListener("click", () =>
    {

      document.body.classList.remove("nav-open");
    })
})
