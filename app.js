let sections = document.querySelectorAll(".landing__container");
console.log(sections.length);
let mains = document.querySelector("main");
// console.log();
let unord = document.querySelector("#navbar__list");

// countArray();
// scroolWED();
// function countArray() {

for (let i = 1; i <= sections.length; i++) {
  let listitems = document.createElement("li");
  listitems.textContent = `Section:${i}`;
  listitems.style.marginRight = "4rem";
  listitems.style.padding = "0.9rem";
  unord.appendChild(listitems);
}

function colored(elem) {
  let rect = Math.floor(elem.getBoundingClientRect().top);
  return rect;
}

// const h2Element = document.querySelectorAll(".landing__container h2");
// let mappedh2 = Array.from(h2Element).map((h2Element) => {
//   let m = h2Element.textContent[8];
//   return m;
// });

const listItems = unord.querySelectorAll("li");
let mapped = Array.from(listItems).map((item) => {
  let rop = item;
  return rop;
});

function handleScroll() {
  //   scroloedcd();
  console.log(sections.length);
  sections.forEach((element) => {
    console.log(element);
    let value = colored(element);
    if (value >= -380 && value <= 380) {
      element.classList.add("active");
      chexCked(element);
    } else {
      revoked(element);
      element.classList.remove("active");
    }
  });
}

let chexCked = (element) => {
  if (element.classList.contains("active")) {
    const h2Element = element.querySelector("h2");
    const h2TextContent = h2Element.textContent[8];
    mapped.forEach((item) => {
      const correspondingElement = h2TextContent;
      //   console.log(correspondingElement);
      if (item.textContent[8] === correspondingElement) {
        item.classList.add("selected-hov");
      } else {
        item.classList.remove("selected-hov");
      }
    });
  }
};
let revoked = (element) => {
  if (element.classList.contains("active")) {
    mapped.forEach((item) => {
      item.classList.remove("selected-hov");
    });
  }
};
var floatingButtonContainer = document.querySelector(".floating-button-div");
function scoolded() {
  floatingButtonContainer.classList.remove("button-div");
}

floatingButtonContainer.addEventListener("click", () => {
  let sectioned = document.createElement("section");

  let addMore = document.createElement("div");
  let paraamed = document.createElement("h2");
  let paraamed2 = document.createElement("p");
  let paraamed3 = document.createElement("p");

  //   addMore.style.height = "460px";
  //   addMore.style.background = "green";

  addMore.classList.add("landing__container");
  sections = document.querySelectorAll(".landing__container");
  paraamed.textContent = `Section ${sections.length + 1}`;
  console.log(sections.length);
  clickedNaved(sections);
  handleScroll();
  console.log(sections.length);

  var tonContainer1 = document.querySelector(".para1");
  var tonContainer2 = document.querySelector(".para2");
  //   const lineBreak = document.write("<br>");
  let combined1 = tonContainer1.innerText;
  let combined2 = tonContainer2.innerText;
  paraamed2.textContent = combined1;
  paraamed3.textContent = combined2;
  mains.appendChild(sectioned);
  sectioned.appendChild(addMore);
  addMore.appendChild(paraamed);
  addMore.appendChild(paraamed2);
  addMore.appendChild(paraamed3);
  // mains.append(sectioned);
  // console.log(sections.length);
});

//   });
// document.getElementById("printButton").addEventListener("click",
let clickedNaved = (sections) => {
  for (let i = 1; i <= 1; i++) {
    let listitems = document.createElement("li");
    let counted = sections.length + 1;
    listitems.textContent = `Section:${counted}`;
    listitems.style.marginRight = "4rem";
    listitems.style.padding = "0.9rem";
    unord.appendChild(listitems);
    // console.log(unord);
  }
};
