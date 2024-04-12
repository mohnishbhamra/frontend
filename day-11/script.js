const key = document.getElementById("key");
const keyCode = document.getElementById("keycode");
const code = document.getElementById("code");
const intro = document.querySelector('.intro')
const dataPane = document.querySelector('.data-pane ')

window.addEventListener(
    "keydown",
    (event) => {
        intro.classList.add('hide');
        dataPane.classList.remove('hide');
        key.innerText= event.key==' ' ? 'Space': event.key;
        keycode.innerText = ""+event.key.charCodeAt(0);
        code.innerText=""+event.code;
    },
    true,
  );