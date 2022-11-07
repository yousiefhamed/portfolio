document.getElementById('about').addEventListener('click', () => {
  document.getElementById('aboutSec').scrollIntoView({ behavior: "smooth" });
});

document.getElementById('services').addEventListener('click', () => {
  document.getElementById('servicesSec').scrollIntoView({ behavior: "smooth" });
});

document.getElementById('skills').addEventListener('click', () => {
  document.getElementById('skillsSec').scrollIntoView({ behavior: "smooth" });
});

document.getElementById('projects').addEventListener('click', () => {
  document.getElementById('projectsSec').scrollIntoView({ behavior: "smooth" });
});

document.getElementById('contact').addEventListener('click', () => {
  document.getElementById('contactSec').scrollIntoView({ behavior: "smooth" });
});

let orderElements = document.getElementsByClassName('order');
for (let orderElement of orderElements) {
  orderElement.addEventListener('click', () => {
    document.location = 'https://wa.me/qr/H4QUJTE4EQDOE1';
  })
}