"use strict";
const { log } = console,
  prices = [
    {
      text: "Течет стиральная машина",
      price: 100,
    },
    {
      text: "Не открывается люк",
      price: 120,
    },
    {
      text: "Не греет воду",
      price: 300,
    },
    {
      text: "Стиральная машина не отжимает",
      price: 250,
    },
    {
      text: "Не работает слив в стиральной машине",
      price: 500,
    },
    {
      text: "Не вращается барабан",
      price: 800,
    },
  ];

// Render of list prices

prices.forEach((elem) => {
  const div = document.createElement("div"),
    projectEl = document.createElement("div"),
    projectPrice = document.createElement("div"),
    projectButton = document.createElement("div");
  div.className =
    "flex items-center justify-between flex px-[20px] sm:px-[70px] py-[22px]  h-full";
  projectEl.className = `w-[350px] text-[20px] sm:text-[16px]`;
  projectButton.className =
    "btn  btn-shad text-center py-3 w-[250px] bg-[#00BB34] cursor-pointer hidden sm:inline-block text-white font-bold rounded-[10px]";
  projectPrice.className = "w-[350px] text-lg flex items-end gap-x-2";
  projectButton.textContent = `Заказать мастера`;
  projectEl.textContent = `${elem.text}`;
  projectPrice.className = "pl-3 sm:pl-0 whitespace-nowrap ";
  projectPrice.innerHTML = `Ремонт от <span class='text-[20px] sm:text-3xl text-[#FF5C00] font-bold'>${elem.price} руб</span>`;
  div.appendChild(projectEl);
  div.appendChild(projectPrice);
  div.appendChild(projectButton);
  priceTable.append(div);
});
const lastDiv = document.createElement("div");
lastDiv.innerHTML = `<div class="px-[20px] sm:px-[70px] py-[22px] font-normal text-lg italic cursor-pointer underline">Подробные цены на ремонт стиральных машин</div>`;
priceTable.append(lastDiv);

// Render of list prices second
const listInstruction = [
    {
      src: "../img/power 1.svg",
      text: "Не включается стиральная машина",
    },
    {
      src: "../img/water-drop 1.svg",
      text: "Течет стиральная машина",
    },
    {
      src: "../img/washing-machine-2 1.svg",
      text: "Не открывается дверка",
    },
    {
      src: "../img/washing-machine-3 1.svg",
      text: "Не работает отжим в машинке",
    },
    {
      src: "../img/warning 1.svg",
      text: "Не завершает процесс стирки",
    },
  ],
  elemPar = document.createElement("div");

listInstruction.forEach((elem) => {
  const parElem = document.createElement("div"),
    child = document.createElement("div"),
    title = document.createElement("h2"),
    imgs = document.createElement("img");
  imgs.src = `${elem.src}`;
  title.textContent = `${elem.text}`;
  parElem.className =
    "py-5 relative w-[306px] sm:w-[602px] rounded-[27px] flex items-center justify-center mb-11 bg-line";
  title.className = "text-white font-bold";
  child.className =
    "bg-white rounded-[50%] h-[61px] w-[61px] sm:w-[95px] sm:h-[95px] border border-[#5F24A8] flex justify-center items-center absolute left-0";
  child.append(imgs);
  parElem.append(child);
  parElem.append(title);
  elemPar.append(parElem);
});
washMach.append(elemPar);

//Slider
const __centSlide = document.querySelector(".slide-cent"),
  __parElem = document.createElement("div"),
  slideUrls = ["./img/feed1.png", "./img/feed2.png", "./img/feed3.png"],
  slideNames = ["Елизавета", "Александр", "Мария"],
  slideDates = ["18 января 2021", "18 ноября 2020", "21 января 2021"];

document.onclick = ({ target }) => {
  if (target.id === "modal") {
    target.style.transform = "scale(0)";
  }
};

const __btns = document.querySelectorAll(".btn");
__btns.forEach((el) => {
  el.onclick = () => {
    modal.style.transform = "scale(1)";
  };
});
const mediaQuery = window.matchMedia("(min-width: 768px)");

try {
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: false,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
} catch (e) {
  document.querySelector(".swiper").style.display = "none";
}
//Push other data
for (let i = 0; i < 4; i++) {
  slideUrls.push(...slideUrls);
  slideNames.push(...slideNames);
  slideDates.push(...slideDates);
}
//render elem of slider

for (let i = 0; i < 26; i++) {
  document.querySelector(".swiper-wrapper").innerHTML += `
  <div class="swiper-slide  bg-white rounded-[42px] px-7 py-6 " style="box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 10px 5px; width: 236px; margin-right: 30px;" data-swiper-slide-index="2" role="group" aria-label="3 / 10"><div class="flex justify-between items-start mb-6">
  <div class="flex items-center gap-x-4">
    <img src='${slideUrls[i]}' alt="" class="rounded-[50%]">
    <div>
      <h2 class="font-bold text-lg mb-2">${slideNames[i]}</h2>
      <p class="text-[#585858]">${slideDates[i]}</p>
    </div>
  </div>
  <div class="flex gap-x-2">
    <img src="./img/icon-vk.svg" alt="Vk icon" class="cursor-pointer">
    <img src="./img/icon-face.svg" alt="Facebook icon" class="cursor-pointer">
  </div>
  </div>
  <div class="text-[20px] max-w-[318px]">Идейные соображения высшего порядка, а также реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании направлений прогрессивного развития.</div>
</div>
  `;
}

//Event onCancel
const onCancel = () => {
  modal.style.transform = "scale(0)";
};
// Check if the media query is true
const __btnCalls = document.querySelectorAll(".back-call");
__btnCalls.forEach((el) => {
  el.addEventListener("click", ({ target }) => {
    target.disabled = true;
    target.style.backgroundColor = "#f0f0f0";
    target.style.color = "#000";
    target.style.boxShadow = "none";
    setTimeout(() => {
      target.nextElementSibling.textContent =
        "Мастер перезвонит в течение 15 мин";
    }, 500);
    setTimeout(() => {
      target.disabled = false;
      target.nextElementSibling.textContent = "";
      target.style.backgroundColor = "#00BB34";
      target.style.color = "white";
    }, 15 * 60 * 1000);
  });
});

/*  Burger menu  */
let isShow = false;
burger.onclick = ({ target }) => {
  isShow = !isShow;
  isShow
    ? (modalShow.style.display = "block")
    : (modalShow.style.display = "none");
  isShow
    ? (target.src = "./img/cancel.svg")
    : (target.src = "./img/list 1.svg");
};
