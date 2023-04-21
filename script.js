const circle = document.querySelector("#circle");
// querySelector는 한 개의 요소를 선택하여 가져올 때 사용! ( ex. id를 붙인 요소 )
const item_content = document.querySelectorAll(".endtext");
// querySelectorAll은 여러 개의 요소를 선택하여 가져올 때 사용! ( ex. class를 붙인 요소 )

circle.addEventListener("click", function () {
  // circle click했을 때!

  for (let i = 0; i < item_content.length; i = i + 1) {
    item_content[i].classList.add("active");

    const x = Math.random() * 1000; // 0 ~ 639.9999.. 사이의 랜덤한 수
    const y = Math.random() * 640;

    item_content[i].style.left = x + "px";
    item_content[i].style.top = y + "px";
    item_content[i].style.display = `block`;
    item_content[i].style.position = `fixed`;

    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;

    item_content[i].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    item_content[i].style.color = `rgb(${255 - r}, ${255 - g}, ${255 - b})`;

    item_content[i].style.transform = `rotateZ(${Math.random() * 255}deg)`;
  }
});

for (let i = 0; i < item_content.length; i = i + 1) {
  item_content[i].addEventListener("click", function () {
    item_content[i].style.display = `none`;
  });
}

const dark = document.querySelector("#m5");
const darktext = document.querySelectorAll(".darktext");

dark.addEventListener("click", function () {
  for (let i = 0; i < darktext.length; i = i + 1) {
    darktext[i].classList.add("dkactive");

    const x = Math.random() * 800; // 0 ~ 639.9999.. 사이의 랜덤한 수
    const y = Math.random() * 640;

    darktext[i].style.left = x + "px";
    darktext[i].style.top = y + "px";
    darktext[i].style.display = `block`;
    darktext[i].style.position = `fixed`;
  }
});

for (let i = 0; i < darktext.length; i = i + 1) {
  darktext[i].addEventListener("click", function () {
    darktext[i].style.display = `none`;
  });
}

const light = document.querySelector("#m6");
const lighttext = document.querySelectorAll(".lighttext");

light.addEventListener("click", function () {
  for (let i = 0; i < lighttext.length; i = i + 1) {
    lighttext[i].classList.add("lactive");

    const x = Math.random() * 1000; // 0 ~ 639.9999.. 사이의 랜덤한 수
    const y = Math.random() * 640;

    lighttext[i].style.left = x + "px";
    lighttext[i].style.top = y + "px";
    lighttext[i].style.display = `block`;
    lighttext[i].style.position = `fixed`;
  }
});

for (let i = 0; i < lighttext.length; i = i + 1) {
  lighttext[i].addEventListener("click", function () {
    lighttext[i].style.display = `none`;
  });
}
