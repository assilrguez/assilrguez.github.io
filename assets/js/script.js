const text = document.querySelector("#text-animated");
let messages = ["Hello","Salut","Hola","مرحبا","привет","你好"];
let index = 0;
function typeMessage(message, i) {
    if (i < message.length) {
        text.textContent += message.charAt(i);
        setTimeout(() => typeMessage(message, i + 1), 100);
    } else {
        setTimeout(() => {
        text.textContent = "";
        index = (index + 1) % messages.length;
        typeMessage(messages[index], 0);
    }, 1000);
    }
}
typeMessage(messages[index], 0);

window.onscroll = function() {
    const sections = document.querySelectorAll('section');
    const header = document.querySelector('div.header'); // select the div element with class "header"
    const headerLinks = header.querySelectorAll('nav a');

    const getDistanceFromTop = (element) => {
      return element.offsetTop;
    };

    for (let i = 0; i < sections.length; i++) {
      let section = sections[i];
      let sectionTop = getDistanceFromTop(section) - header.offsetHeight;
      let sectionBottom = sectionTop + section.offsetHeight;

      if (window.pageYOffset >= sectionTop && window.pageYOffset <= sectionBottom) {
        for (let j = 0; j < headerLinks.length; j++) {
          let link = headerLinks[j];
          link.classList.remove('active');
          let target = link.getAttribute('href').slice(1);
          if (target === section.getAttribute('id')) {
            link.classList.add('active');
          }
        }
      }
    }
};      
const button = document.getElementById("send");
