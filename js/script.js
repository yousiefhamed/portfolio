const logoHome = document.getElementById('logoHome');
logoHome.addEventListener('click', () => {document.location = '#'});

const navBar = document.getElementById('navBar');
const mainHeader = document.getElementById('mainHeader');
const rocket = document.getElementById('rocket');
document.addEventListener('scroll', () => {
  if (mainHeader.getBoundingClientRect().top.toFixed() < 0) {
    navBar.classList.add('fixed-nav-bar');
    document.body.style.marginTop = '50px';
    rocket.style.display = 'block';
  } else {
    navBar.classList.remove('fixed-nav-bar');
    document.body.style.marginTop = '0';
    rocket.style.display = 'none';
  }
})
rocket.addEventListener('click', () => {
  document.location = '#';
})

const navMenuFig = document.getElementById('navMenuFig');
const menu = `<img src="assets/imgs/icons/menu.png">`;
const close = `<img src="assets/imgs/icons/close.png">`;
navMenuFig.innerHTML = menu;
navMenuFig.addEventListener('click', () => {
  if (navMenuFig.innerHTML == menu) {
    navMenuFig.innerHTML = close;
    let newNav = document.createElement("nav");
    let sections = ['About', 'Services', 'Skills', 'Projects', 'Contact'];
    for (let i = 0; i < 5; i++) {
      let newA = document.createElement('a');
      let newText = document.createTextNode(sections[i]);
      newA.appendChild(newText);
      newNav.appendChild(newA);
      newNav.className = 'nav-menu-items flex';
      newA.className = sections[i];
      newA.href = `#${sections[i]}`
    }
    navBar.appendChild(newNav);
  } else {
    navMenuFig.innerHTML = menu;
    navBar.removeChild(navBar.lastChild);
  }
})

const profileLogoFigure = document.getElementById('profileLogoFigure');
const profileLogo = document.getElementById('profileLogo');
const messengerMe = document.getElementById('messengerMe');
profileLogoFigure.addEventListener('click', () => {window.open(`${icons[5].link}`)});
profileLogoFigure.addEventListener('mouseover', () => {messengerMe.style.display = 'block'});
profileLogoFigure.addEventListener('mouseout', () => {messengerMe.style.display = 'none'});


let icons = [
  {
    name: 'github',
    link: 'https://github.com/yousiefhamed',
  },
  {
    name: 'behance',
    link: '#',
  },
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/in/youssef-hamed-helmy',
  },
  {
    name: 'gmail',
    link: 'mailto:yousiefhamed1@gmail.com',
  },
  {
    name: 'facebook',
    link: 'https://www.facebook.com/yousief.hamed.5',
  },
  {
    name: 'messenger',
    link: 'https://m.me/yousief.hamed.5',
  },
  {
    name: 'instagram',
    link: 'https://www.instagram.com/youssefhamed511/',
  },
  {
    name: 'whatsapp',
    link: 'https://wa.me/qr/H4QUJTE4EQDOE1',
  },
  {
    name: 'telegram',
    link: 'https://t.me/youssef_hamed_511',
  }
];

let socialIcons = document.getElementsByClassName('social-media-icons');
for (let socialIcon of socialIcons) {
  for (let icon of icons) {
    socialIcon.innerHTML += `
        <a href="${icon.link}" target="_blank" class="flex"><img class="flex" src="assets/imgs/icons/logo/social/${icon.name}.png"></a>
    `;
  }
}


let animationBg = document.getElementById('animationBg');
let stars = document.getElementsByClassName('star');
for (let i = 0; i < 150; i++) {
  animationBg.innerHTML += `
    <div class="star"></div>
  `;
  for (let star of stars) {
    star.style.top = `${Math.round(Math.random()*100)}%`;
    star.style.left = `${Math.round(Math.random()*100)}%`;
    star.style.animationDelay = `${Math.round(Math.random()*4)}s`;
  }
}

/*
const vid = document.getElementById('vid');
vid.addEventListener('click', () => {
  if (vid.play == true) {
    vid.pause();
  } else {
    vid.play();
  }
})
*/
