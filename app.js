const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});
// local reviews data
const reviews = [
  {
    id: 1,
    name: "Muhammad Talha",
    job: "Founder",
    img: "./images/mem1.jpeg",
    contact: "03211270570",
  },
  {
    id: 2,
    name: "Raja Asim Mustafa",
    job: "Hardware Manager",
    img: "./images/mem2.jpg",
    contact: "03325856672",
  },
  {
    id: 3,
    name: "Ahamed Aathif",
    job: "Software Manager",
    img: "./images/mem3.jpg",
    contact: "03195704824",
  },
];
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const members = document.querySelector(".member-center");
// set starting item
let currentItem = 0;
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  members.innerHTML = `<article class="mem">
  <img src=${item.img} class="member-photo" />
  <h3>${item.name}</h3>
  <h4>${item.job}</h4>
    <p><span class="con">contact no:</span> ${item.contact}</p>
  </article>`;
});

// show person based on item
function showPerson(person) {
  const item = reviews[currentItem];
  members.innerHTML = `<article class="mem">
  <img src=${item.img} class="member-photo" />
  <h3>${item.name}</h3>
    <h4>${item.job}</h4>
  <p><span class="con">contact no:</span>${item.contact}</p>
  </article>`;
}
// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
