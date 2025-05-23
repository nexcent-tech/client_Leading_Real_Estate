import { luxuriousProperties, sisterConcerns, faqProperties } from "./data.js";

// Sister Concerns start
const sisterList = document.getElementById("sister-list");

sisterList.innerHTML = sisterConcerns
  .map(
    (item) =>
      `<li class="flex gap-3">
              <img
                src="https://www.assuregroupbd.com/images/arrow.svg"
                alt="list arrow"
                class="w-5 h-5 mt-px"
              />
              <a
                href="${item.link}"
                target="_blank"
                rel="noopener noreferrer"
                class="text-blue-500 hover:text-indigo-600 duration-200 transition-colors"
                >${item.label}</a
              >
       </li>`
  )
  .join("");
// Sister Concerns end

// Luxurious Property start
const luxuriousList = document.getElementById("luxurious-list");

luxuriousList.innerHTML = luxuriousProperties
  .map(
    (item) => `
    <div class="group flex flex-col items-center justify-center bg-white shadow-lg overflow-hidden">
      <div class="relative w-full h-full max-h-[30rem] overflow-hidden">
        <img
          src="${item.image}"
          alt="${item.name}"
          class="w-full h-full object-cover"
        />

        <!-- Text Overlay (hidden by default, appears on hover) -->
        <div class="absolute inset-0 text-white z-10  opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-y-auto">
          <div class="h-full flex flex-col justify-start">
            <h3 class="text-[22px] text-center font-semibold border-b px-4 pt-4 pb-2 leading-tight">
              ${item.type} ${item.name}
            </h3>
            <ul class="p-4 space-y-1.5">
              ${item.info
                .map(
                  (it) => `<li class="flex gap-2 text-white card-context"> 
                <svg class="fill-current h-3.5 shrink-0 relative top-1.5" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path  d="M17.47 250.9C88.82 328.1 158 397.6 224.5 485.5c72.3-143.8 146.3-288.1 268.4-444.37L460 26.06C356.9 135.4 276.8 238.9 207.2 361.9c-48.4-43.6-126.62-105.3-174.38-137z"></path></g></svg>
                <span>${it.label} ${it.value}</span>
                </li>`
                )
                .join("")}
            </ul>
          </div>
        </div>

        <!-- Left Overlay: Top to Bottom -->
        <div
          class="z-0 absolute left-0 top-0 h-full w-1/2 bg-primary/60 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500"
        ></div>

        <!-- Right Overlay: Bottom to Top -->
        <div
          class="z-0 absolute right-0 top-0 h-full w-1/2 bg-primary/60 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"
        ></div>
      </div>

      <div class="px-4 py-5 flex flex-col items-center">
        <p class="text-[15px] text-center text-primary">${item.type}</p>
        <h3 class="text-primary card-title text-center">${item.name}</h3>
        <p class="text-gray-600 text-center flex items-center gap-1 card-sub-title">
        <svg class="fill-primary h-3.5 w-3.5" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 395.71 395.71" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738 c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388 C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191 c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"></path> </g> </g></svg>
        <span>${item.location}</span></p>
      </div>
    </div>
    `
  )
  .join("");

// Luxurious Property end

// FAQ start
document.addEventListener("DOMContentLoaded", function () {
  const faqList = document.getElementById("faq-list");

  if (!faqList) {
    console.error("Element with id 'faq-list' not found.");
    return;
  }

  faqList.innerHTML = faqProperties
    .map(
      (item, index) => `
        <li class="overflow-hidden mb-1.5">
          <button
            id="button-${index}"
            class="faq-button cursor-pointer text-[#4d5192] bg-[#E0E0E0] text-[clamp(16px,1.5vw,1px)] px-5 py-3 w-full
             flex items-center justify-between transition-all duration-500 ease-in-out"
            onclick="toggleFaq(${index})"
          >
            <span class="text-left">${item.title}</span>
            <svg
              class="transition-transform duration-300 transform h-5 w-5 fill-current"
              id="icon-${index}"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25 25"
            >
              <path d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" />
            </svg>
          </button>
          <div
            id="panel-${index}"
            class="faq-panel max-h-0 overflow-hidden transition-all duration-500 ease-in-out
             bg-white px-5 border-b border-l border-r border-gray-200"
          >
            <p class="py-4 text-gray-800 text-[clamp(14px,1.5vw,16px)] leading-relaxed">
              ${item.description}
            </p>
          </div>
        </li>
      `
    )
    .join("");

  // Open the first panel by default
  const firstPanel = document.getElementById("panel-0");
  const firstIcon = document.getElementById("icon-0");
  const firstButton = document.getElementById("button-0");

  firstPanel.classList.remove("max-h-0");
  firstPanel.classList.add("max-h-96");
  firstIcon.classList.add("rotate-90");
  firstButton.classList.add("bg-primary", "text-white");
  firstButton.classList.remove("bg-[#E0E0E0]", "text-[#293190]");

  window.toggleFaq = function (index) {
    const panel = document.getElementById(`panel-${index}`);
    const icon = document.getElementById(`icon-${index}`);
    const button = document.getElementById(`button-${index}`);

    const isOpen = panel.classList.contains("max-h-96");

    // Close all panels and reset styles
    document.querySelectorAll(".faq-panel").forEach((el) => {
      el.classList.remove("max-h-96");
      el.classList.add("max-h-0");
    });
    document.querySelectorAll(".faq-button").forEach((btn) => {
      btn.classList.remove("bg-primary", "text-white");
      btn.classList.add("bg-[#E0E0E0]", "text-[#293190]");
    });
    document.querySelectorAll(".faq-button svg").forEach((svg) => {
      svg.classList.remove("rotate-90");
    });

    // If it wasn't already open, open it
    if (!isOpen) {
      panel.classList.remove("max-h-0");
      panel.classList.add("max-h-96");
      icon.classList.add("rotate-90");
      button.classList.add("bg-primary", "text-white");
      button.classList.remove("bg-[#E0E0E0]", "text-[#293190]");
    }
  };
});

// FAQ end

//phone number start
const phoneNumber = [
  {
    number: "01729202008 ",
    link: "#",
  },
  {
    number: "01729202008 ",
    link: "#",
  },
  {
    number: "01729202008 ",
    link: "#",
  },
  {
    number: "01729202008 ",
    link: "#",
  },
  {
    number: "01729202008 ",
    link: "#",
  },
  {
    number: "01729202008 ",
    link: "#",
  },
  {
    number: "01729202008 ",
    link: "#",
  },
  {
    number: "01729202008 ",
    link: "#",
  },
  {
    number: "01729202008 ",
    link: "#",
  },
  {
    number: "01729202008 ",
    link: "#",
  },
  {
    number: "01729202008 ",
    link: "#",
  },
  {
    number: "01729202008 ",
    link: "#",
  },
  {
    number: "01729202008 ",
    link: "#",
  },
  {
    number: "01729202008 ",
    link: "#",
  },
  {
    number: "01729202008 ",
    link: "#",
  },
  {
    number: "01729202008 ",
    link: "#",
  },
  {
    number: "01729202008 ",
    link: "#",
  },
];

const phone = document.getElementById("phone-number");
phone.innerHTML = phoneNumber
  .map(
    (item) =>
      `<li class="">
              <a
                href="${item.link}"
                target="_blank"
                rel="noopener noreferrer"
                class="text-[#BEBEBE] hover:text-[#28a745] duration-200 transition-colors"
                >${item.number}</a
              >
        </li>`
  )
  .join("");

//phone number end

//Business link start
const BusinessLink = [
  {
    Name: "AMARA Development & Design Ltd",
    link: "#",
  },
  {
    Name: "AMARA Builders Ltd",
    link: "#",
  },
  {
    Name: "AMARA Tourism (Dera Resort)",
    link: "#",
  },
  {
    Name: "AMARA Tours and Travels",
    link: "#",
  },
  {
    Name: "AMARA General Hospital Ltd",
    link: "#",
  },
  {
    Name: "AMARA Agro Complex Ltd",
    link: "#",
  },
  {
    Name: "Bangla Version",
    link: "#",
  },
];

const businessLink = document.getElementById("businessLink");
businessLink.innerHTML = BusinessLink.map(
  (item) =>
    `<li  class="">
              
              <a
                href="${item.link}"
                target="_blank"
                rel="noopener noreferrer"
                class="text-[#BEBEBE]  hover:text-[#28a745] duration-200 transition-colors"
                >${item.Name}</a
              >
        </li>`
).join("");

//Business link end

//Property Collections start
const Phases = [
  {
    phases: "Ongoing",
    link: "#",
  },
  {
    phases: "Upcoming",
    link: "#",
  },
  {
    phases: "Completed",
    link: "#",
  },
];
const Types = [
  {
    types: "Residential",
    link: "#",
  },
  {
    types: "Commercial",
    link: "#",
  },
  {
    types: "Integrated",
    link: "#",
  },
];
const Locatins = [
  {
    locations: "Dhanmondi",
    link: "#",
  },
  {
    locations: "Uttora",
    link: "#",
  },
  {
    locations: "Gulshan",
    link: "#",
  },
];

const phases = document.getElementById("Phases");
phases.innerHTML = Phases.map(
  (item) =>
    `<li  class="">
              
              <a
                href="${item.link}"
                target="_blank"
                rel="noopener noreferrer"
                class="text-[#BEBEBE]  hover:text-[#28a745] duration-200 transition-colors"
                >${item.phases}</a
              >
        </li>`
).join("");

const types = document.getElementById("Types");
types.innerHTML = Types.map(
  (item) =>
    `<li  class="">
              
              <a
                href="${item.link}"
                target="_blank"
                rel="noopener noreferrer"
                class="text-[#BEBEBE]  hover:text-[#28a745] duration-200 transition-colors"
                >${item.types}</a
              >
        </li>`
).join("");
const locations = document.getElementById("Locations");
locations.innerHTML = Locatins.map(
  (item) =>
    `<li  class="">
              
              <a
                href="${item.link}"
                target="_blank"
                rel="noopener noreferrer"
                class="text-[#BEBEBE]  hover:text-[#28a745] duration-200 transition-colors"
                >${item.locations}</a
              >
        </li>`
).join("");

//Property Collections end
