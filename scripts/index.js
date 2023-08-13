const data = [{
    mainInfo: {
        brand: 'BeeCode',
        name: 'Youssef Hamed',
        greeting: "Hi, I'm",
        bio: 'Frontend Developer (React.js) specialized in Webb Development',
        about: [
            {
                id: 'shortAbout', //the short
                paragraph: [
                    'Passionate Frontend Developer crafting capitative web experiences.',
                    'Expert in HtML, CSS, JavaScript, and React.js.',
                ],
                callToAction: "_Let's bring your vesion to life ;)"
            },
            {
                id: 'longAbout', //the long
                paragraph: [
                    "I'm Youssef Hamed, a dedicated Frontend Developer specializing in crafting captivating web experiences using the power of React, delivering captivating web experiences that merge design and functionality.",
                    "With over 3 years of industry experience, I've honed my skills in HTML, CSS, and JavaScript to perfection. I transform design visions into responsive, interactive interfaces that engage users effectively utilizing React's capabilities to build dynamic and efficient applications.",
                    "My focus on user experience drives me to create designs that adapt seamlessly across devices, ensuring a consistent and enjoyable interaction.",
                    "Through continuous learning and innovative solutions, I aim to contribute to the evolution of web development. I'm driven by a deep enthusiasm for creating user-centric websites that leave a lasting impression.",
                ],
                callToAction: "Let's collaborate to bring your ideas to life!",
            },
            {
                id: 'callToAction',
                name: 'Download my CV',
                icon: 'resume',
                link: 'https://drive.google.com/u/0/uc?id=1T4X_bipQv0JKJtLfHGZ0EByppFQnXypl&export=download'
            },
        ],
        mainCallToAction: 'Explore My Work',
        navCallToAction: "Let's Talk!",
    },
    contact: {
        socialMedia: [
            {
                name: 'linkedin',
                link: 'https://www.linkedin.com/in/youssef-hamed-3b4931213/',
                color: '#0072b1',
            },
            {
                name: 'github',
                link: 'https://github.com/yousiefhamed/',
                color: '#000',
            },
            {
                name: 'facebook',
                link: 'https://www.facebook.com/profile.php?id=100095711435785',
                color: '#0072b1',
            },
            {
                name: 'whatsapp',
                link: 'https://wa.me/+201279237596',
                color: '#075e54',
            },
            {
                name: 'gmail',
                link: 'mailto:yousiefhamed1@gmail.com',
                color: '#C71610',
            },
            {
                name: 'resume',
                link: 'https://drive.google.com/file/d/1T4X_bipQv0JKJtLfHGZ0EByppFQnXypl/view?usp=sharing',
                color: '#132F3B',
            },
        ],
        footer:
        {
            desc: "Contact me directly through the form for any inquiries or collaboration opportunities. I would love to hear from you! You can also connect with me on social media by clicking on the icons below. Let's stay in touch and explore exciting possibilities together.",
            connect: [
                {
                    name: 'call',
                    text: '+(20) 12 792 37 596',
                    link: 'tel:+201279237596'
                },
                {
                    name: 'mail',
                    text: 'yousiefhamed1@gmail.com',
                    link: 'mailto:yousiefhamed1@gmail.com'
                },
                {
                    name: 'location',
                    text: 'Alexandria, Egypt',
                    link: '#contact'
                }
            ],
            icons: [
                {
                    name: 'whatsapp',
                    link: 'https://wa.me/+201279237596',
                },
                {
                    name: 'telegram',
                    link: '#',
                },
                {
                    name: 'messenger',
                    link: '#',
                },
            ]
        },
    },
    work: {
        stat: [
            {
                name: 'Experiences',
                number: '+3 Years',
            },
            {
                name: 'Clients',
                number: '+10',
            },
            {
                name: 'Projects',
                number: '+5',
            },
        ],
        skills: [
            {
                name: 'HTML',
                title: 'HTML (Hypertext Markup Language)',
                percentage: '98%',
            },
            {
                name: 'CSS',
                title: 'CSS (Cascading Style Sheet)',
                percentage: '99%',
            },
            {
                name: 'SASS',
                title: 'SASS & SCSS',
                percentage: '90%',
            },
            {
                name: 'JavaScript',
                title: 'JavaScript & Ecmascript 6+ (ES 6+)',
                percentage: '80%',
            },
            {
                name: 'Mongodb',
                title: 'Mongodb',
                percentage: '20%',
            },
            {
                name: 'Express',
                title: 'Express',
                percentage: '10%',
            },
            {
                name: 'Reactjs',
                title: 'React.js',
                percentage: '60%',
            },
            {
                name: 'Nodejs',
                title: 'Node.js',
                percentage: '20%',
            },
            {
                name: 'SEO',
                title: 'Search Engine Optimization (SEO)',
                percentage: '55%',
            },
            {
                name: 'figma',
                title: 'figma for UX UI',
                percentage: '70%',
            },
        ],
        expertise: [
            {
                name: 'Website Design and Development',
                desc: "Create visually appealing and functional websites that effectively convey your brand and message.",
            },
            {
                name: 'Frontend Web Development',
                desc: "Build user-friendly and interactive interfaces using HTML, CSS, and JavaScript to enhance the user experience.",
            },
            {
                name: 'UI/UX Design',
                desc: "Craft intuitive and aesthetically pleasing user interfaces, focusing on user experience and usability.",
            },
            {
                name: 'Responsive Web Design',
                desc: "Develop websites that adapt seamlessly to different screen sizes and devices, ensuring a consistent and optimal experience for all users.",
            },
            {
                name: 'HTML/CSS Development',
                desc: "Write clean and semantic HTML code and apply CSS styling to create visually appealing web pages.",
            },
            {
                name: 'JavaScript Development',
                desc: "Utilize the power of JavaScript to add dynamic and interactive elements to web applications and enhance user interactions.",
            },
            {
                name: 'React.js Development',
                desc: "Leverage the React.js framework to build efficient, modular, and reusable components for scalable web applications.",
            },
            {
                name: 'SEO Optimization',
                desc: "Implement effective strategies to improve search engine visibility and optimize website content to drive organic traffic and improve rankings.",
            },
        ],
        projects: [
            {
                name: 'BeeCode',
                bio: 'my personal portfolio',
                desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercise nulla pariatur",
                url: '#',
            },
            {
                name: 'Appie',
                bio: 'An application Landing Page',
                desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercise nulla pariatur",
                url: "https://appie-hamed.vercel.app/",
            },
            {
                name: 'MAP DESIGN',
                bio: 'Interior design blogger website',
                desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercise nulla pariatur",
                url: "https://map-interior-design.blogspot.com/",
            },
            {
                name: 'CodVanced',
                bio: 'A programmers support business project',
                desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercise nulla pariatur",
                url: "https://codvanced.vercel.app/",
            },
            {
                name: 'Programmito',
                bio: 'An articles website project',
                desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercise nulla pariatur",
                url: "https://programmito.vercel.app/",
            },
        ],
    }
}];

function Header() {
    function NavMenu() {
        let logoNav = () => {
            document.location.href = '#';
        };
        return (
            <nav className="flex">
                <div className="brand flex animation-side-left">
                    <img onClick={logoNav} src="assets/brand/logo.png" alt="Youssef-Hamed brand logo" />
                    <h1 onClick={logoNav}>{data[0].mainInfo.brand}</h1>
                </div>
                <div className="navigation flex">
                    <ul className="menu flex">
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#expertise">Expertise area</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li className='menuIcon'><img src="assets/icons/menu.png" alt="menu_icon" /></li>
                    </ul>
                    <ul className="call-to-action">
                        <li><a href="#contactForm">{data[0].mainInfo.navCallToAction}</a></li>
                    </ul>
                </div>
                <div className="slide-menu flex">
                    <ul className="flex animation-following">
                        <li className='animation-side-right'><a href="#about">About</a></li>
                        <li className='animation-side-right'><a href="#skills">Skills</a></li>
                        <li className='animation-side-right'><a href="#expertise">Expertise area</a></li>
                        <li className='animation-side-right'><a href="#projects">Projects</a></li>
                        <li className='animation-side-right'><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
    function HeroSection() {
        function LeftSection() {
            return (
                <div className="left-section flex">
                    <h1 className='animation'>
                        <span className="greeting">{data[0].mainInfo.greeting}</span>
                        {data[0].mainInfo.name}
                    </h1>
                    <p className='bio animation animation-side-left'>{data[0].mainInfo.bio}</p>
                    <div className="stat-numbers flex animation-following">
                        {
                            data[0].work.stat.map((x, i) => (
                                <p key={`${i}-stat-item`} className="flex animation-side-left">
                                    <span className="number">{x.number}</span>
                                    {x.name}
                                </p>
                            ))
                        }
                    </div>
                    <a href="#projects" className='animation'>
                        <p className="call-to-action">
                            {data[0].mainInfo.mainCallToAction}<i className="fa-solid fa-arrow-right"></i>
                        </p>
                    </a>
                </div>
            )
        }
        function MiddleSection() {
            return (
                <div className="middle-section">
                    <img src={`assets/brand/${data[0].mainInfo.name}.png`} className='animation' />
                </div>
            )
        }
        function RightSection() {
            let shortAbout = data[0].mainInfo.about.find(x => x.id === "shortAbout");
            return (
                <div className="right-section">
                    <div className="skills-icons flex animation-following">
                        {
                            data[0].work.skills.map((x, i) => (
                                <img className='animation-side-right' key={`${i}-skill`} src={`assets/skills/${x.name}.png`} alt={`${x.name}`} />
                            ))
                        }
                    </div>
                    <div className="about animation-following">
                        {
                            shortAbout.paragraph.map((x, i) => (
                                <p className='animation-side-right' key={`paragraph-${i}`}>{x}</p>
                            ))
                        }
                        <p className="call-to-action animation-side-right">{shortAbout.callToAction}</p>
                    </div>
                </div >
            )
        }
        return (
            <div className="hero-section flex">
                <LeftSection />
                <MiddleSection />
                <RightSection />
            </div>
        );
    }
    function SocialMedia() {
        return (
            <div className="social-media-section flex animation-following">
                {data[0].contact.socialMedia.map((x, i) => (
                    <a href={x.link} target="_blank" key={`${i}- link`} className="flex animation-side-left" style={{ color: `${x.color}` }}>
                        <img src={`./assets/social_media/${x.name}.png`} alt={x.name + ' link'} />
                        <p>{x.name}</p>
                    </a>
                ))}
            </div >
        )
    }
    function Background() {
        return (
            <div className="background">
                <img src='assets/backgrounds/header wave home.png' alt='background' />
            </div>
        )
    }
    return (
        <header id="header" className="header flex">
            <NavMenu />
            <HeroSection />
            <SocialMedia />
            <Background />
        </header>
    )
}
function MainContent() {
    function About() {
        const about = data[0].mainInfo.about.find(x => x.id === "longAbout");
        const callToAction = data[0].mainInfo.about.find(x => x.id === "callToAction");
        return (
            <div id="about" className="about flex">
                <h1 className='animation-side-left'>About</h1>
                <div className="body flex">
                    <div className="about-text animation-side-left animation-following">
                        {
                            about.paragraph.map((x, i) => (<p key={`paragraph-${i}`}>{x}</p>))
                        }
                        {
                            <p className="call-to-action">{about.callToAction}</p>
                        }
                        {
                            <a className="flex" href={callToAction.link} target='_blank'>
                                <img src={`assets/social_media/${callToAction.icon}.png`} alt='resume icon' />
                                {callToAction.name}
                            </a>
                        }
                    </div>
                    <div className="about-img animation-side-right">
                        <img src='assets/brand/about.png' alt='about image for a developer' />
                    </div>
                </div>
                <div className="end-line"></div>
            </div >
        )
    }
    function Skills() {
        return (
            <div id="skills" className="skills flex">
                <h1 className='animation-side-right'>Skills</h1>
                <div className="body flex">
                    {
                        data[0].work.skills.map((x, i) => (
                            <div className="skill-item flex" key={`skill-number-${i}`}>
                                <img src={`assets/skills/${x.name}.png`} alt={`${x.name}-icon`} />
                                <div className="skill-details">
                                    <h6>{x.title}</h6>
                                    <div className="wrapper-slider">
                                        <div className="child-slider" style={{ width: `${x.percentage}` }}>
                                            <p>{x.percentage}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="end-line"></div>
            </div>
        )
    }
    function ExpertiseArea() {
        return (
            <div id="expertise" className="expertise flex">
                <h1 className='animation-side-right'>Expertise Area</h1>
                <div className="body flex">
                    <div className="items flex"></div>
                    <div className="arrows flex">
                        <i className="flex fa-solid fa-angle-left expertise"></i>
                        <i className="flex fa-solid fa-angle-right expertise"></i>
                    </div>
                    <div className="dots flex"></div>
                </div>
                <div className="end-line"></div>
            </div>
        )
    }
    function Projects() {
        return (
            <div id="projects" className="projects flex">
                <h1 className='animation-side-left'>Projects</h1>
                <div className="body flex">
                    <div className="items flex"></div>
                    <div className="arrows flex">
                        <i className="flex fa-solid fa-angle-left project"></i>
                        <i className="flex fa-solid fa-angle-right project"></i>
                    </div>
                    <div className="dots flex"></div>
                </div>
                <div className="end-line"></div>
            </div>
        )
    }
    return (
        <div className="main-content">
            <About />
            <Skills />
            <ExpertiseArea />
            <Projects />
        </div>
    )
}
function Footer() {
    return (
        <footer id="contact" className='footer flex'>
            <div className='contact flex'>
                <h1 className='animation-side-right'>Contact</h1>
                <div className='body flex'>
                    <div className="contact-text animation-side-left">
                        <p>{data[0].contact.footer.desc}</p>
                        <div className="connect-links flex">
                            {
                                data[0].contact.footer.connect.map((x, i) => (
                                    <a key={i} href={x.link}>
                                        <img src={`assets/social_media/${x.name}.png`} alt={x.name} />
                                        <p>{x.text}</p>
                                    </a>
                                ))
                            }
                        </div>
                        <div className="connect-icons flex">
                            {
                                data[0].contact.footer.icons.map((x, i) => (
                                    <a key={i} href={x.link} target="_blank" className='flex'>
                                        <img src={`assets/social_media/${x.name}.png`} alt={`${x.name}-icon`} />
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                    <div id="contactForm" className="form flex">
                        <h4 className='animation-side-right'>Get In Touch</h4>
                        <form action="https://www.actionforms.io/e/r/saturnacode" method="POST" target="_blank" className="flex animation">
                            <div className="name full-width flex">
                                <label>Name:</label>
                                <input required id="name" type="text" name="name" placeholder="Enter your name..." />
                            </div>
                            <div className="email full-width flex">
                                <label>E-mail:</label>
                                <input required id="email" type="email" name="email" placeholder="Enter your e-mail address..." />
                            </div>
                            <div className="subject full-width flex">
                                <label>Subject:</label>
                                <input required id="subject" type="text" name="subject" placeholder="Subject..." />
                            </div>
                            <div className="message full-width flex">
                                <label>Message:</label>
                                <textarea required id="message" name="message" placeholder="Enter your message..." />
                            </div>
                            <input id="submit" type="submit" />
                        </form>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p className='animation-side-right'>made with <span>&#127892;</span> by: youssef-hamed ;)</p>
                <p className='flex animation-side-left'>&copy;youssef-hamed</p>
            </div>
        </footer>
    )
}

function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)

// ****************************************************************
// non-display menu in more than 800px screen
// show & hide menu in mobile less than 800px
// ****************************************************************
const menu = document.querySelector('.slide-menu');
window.onresize = () => { document.querySelector('body').clientWidth > 800 ? menu.style.display = 'none' : 0 }
document.querySelector('.menuIcon').addEventListener('click', () => {
    if (menu.style.display == 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
})
menu.addEventListener('click', () => {
    menu.style.display = 'none';
})

// ****************************************************************
// add the expertise & projects elements 
// handle sliding on desktop, scrolling on mobile
// ****************************************************************
// get elements from the data object
let expertiseItems = data[0].work.expertise.map((x, i) => (
    <div key={i} className="expertise-item flex">
        <h4>{x.name}</h4>
        <p>{x.desc}</p>
    </div>
));
let projectsItems = data[0].work.projects.map((x, i) => (
    <div key={i} className="project-item flex">
        <a href={x.url} target="_blank">
            <div className="snapshot-project">
                <img src={`assets/projects/${x.name}.png`} alt={x.name + ' project screen'} />
            </div>
            <h4>{x.name}</h4>
            <p>{x.bio}</p>
        </a>
    </div>
));
// render the elements in the page
const expertise = document.querySelector('.expertise .body .items');
const projects = document.querySelector('.projects .body .items');
ReactDOM.render(expertiseItems, expertise);
ReactDOM.render(projectsItems, projects);
// adding dots for sliding effect
let expertiseDotsContainer = document.querySelector('.expertise .body .dots');
let projectDotsContainer = document.querySelector('.projects .body .dots');
expertiseDotsContainer.innerHTML = '';
projectDotsContainer.innerHTML = '';
let addDivDotElement = (section, dotsContainer) => {
    for (let i = 0; i < section.length; i++) {
        const div = document.createElement('div');
        div.className = `item-${i}`;
        dotsContainer.appendChild(div);
    }
}
addDivDotElement(expertiseItems, expertiseDotsContainer);
addDivDotElement(projectsItems, projectDotsContainer);
// handle the arrows clicking
const expertiseItem = document.querySelectorAll('.expertise .expertise-item');
const projectItem = document.querySelectorAll('.projects .project-item');
const arrows = document.querySelectorAll('.arrows .fa-solid');
arrows.forEach(arrow => {
    expertiseItem.forEach(x => x.dataset.sliderIndex = 0);
    projectItem.forEach(x => x.dataset.sliderIndex = 0);
    arrow.addEventListener('click', () => {
        let direction = arrow.classList.contains('fa-angle-left') ? 'left' : 'right';
        let section = arrow.parentElement.parentElement.parentElement.classList.contains('expertise') ? 'expertise' : 'projects';
        section === 'expertise' ? clearInterval(slideIntervalExpertise) : clearInterval(slideIntervalProjects);
        handleSliding(direction, section);
    })
})
let handleSliding = (direction, section) => {
    let sliderIndex;
    let itemWidth;
    // save the section that the user clicked its arrow then determine the item width
    if (section === 'expertise') {
        section = expertiseItem;
        if (document.querySelector('body').clientWidth > 500) {
            itemWidth = 420;
        } else {
            itemWidth = (expertise.clientWidth * 80 / 100) + 20;
        }
    } else {
        section = projectItem;
        if (document.querySelector('body').clientWidth > 800) {
            itemWidth = (projects.clientWidth * 45 / 100) + 20;
        } else {
            itemWidth = (expertise.clientWidth * 90 / 100) + 20;
        }
    }
    sliderIndex = Number(section[0].dataset.sliderIndex);
    // handle the slide index based on the direction of the arrow clicked
    if (section.length * itemWidth - expertise.clientWidth < (sliderIndex + 1) * itemWidth && direction === 'right') {
        itemWidth = (section.length * itemWidth - expertise.clientWidth) / (sliderIndex + 1);
    }
    if ((section.length * itemWidth - expertise.clientWidth < (sliderIndex - 1) * itemWidth || sliderIndex === 0) && direction === 'left') {

        itemWidth = (section.length * itemWidth - expertise.clientWidth) / ((sliderIndex === 0 ? section.length : sliderIndex) - 1);
    }
    if (direction === 'right') {
        if (sliderIndex === section.length - 1) {
            sliderIndex = 0;
        } else {
            sliderIndex++;
        }
    } else {
        if (sliderIndex === 0) {
            sliderIndex = section.length - 1;
        } else {
            sliderIndex--;
        }
    }
    // update the translate so the items move
    for (let i = 0; i < section.length; i++) {
        section[i].style.transform = `translateX(-${sliderIndex * itemWidth}px)`;
        section[i].dataset.sliderIndex = sliderIndex;
    }
    document.querySelectorAll('.expertise .dots div').forEach(x => x.classList.remove('active'))
    document.querySelectorAll('.projects .dots div').forEach(x => x.classList.remove('active'))
    document.querySelectorAll('.expertise .dots div').forEach(x => {
        x.className == `item-${expertiseItem[0].dataset.sliderIndex}` ? x.classList.add('active') : 0;
    })
    document.querySelectorAll('.projects .dots div').forEach(x => {
        x.className == `item-${projectItem[0].dataset.sliderIndex}` ? x.classList.add('active') : 0;
    })
}
// handle touch events for mobile
let starttouchExpertise;
let endtouchExpertise;
let starttouchProjects;
let endtouchProjects;
expertise.addEventListener('touchstart', e => {
    e.preventDefault();
    starttouchExpertise = e.changedTouches[0].clientX;
});
expertise.addEventListener('touchend', e => {
    e.preventDefault();
    endtouchExpertise = e.changedTouches[0].clientX;
    if (starttouchExpertise > endtouchExpertise || endtouchExpertise < 0) {
        clearInterval(slideIntervalExpertise);
        handleSliding('right', 'expertise');
    } else {
        clearInterval(slideIntervalExpertise);
        handleSliding('left', 'expertise');
    }
});

projects.addEventListener('touchstart', e => {
    e.preventDefault();
    starttouchProjects = e.changedTouches[0].clientX;
});
projects.addEventListener('touchend', e => {
    e.preventDefault();
    endtouchProjects = e.changedTouches[0].clientX;
    if (starttouchProjects > endtouchProjects || endtouchProjects < 0) {
        clearInterval(slideIntervalProjects);
        handleSliding('right', 'projects');
    } else {
        clearInterval(slideIntervalProjects);
        handleSliding('left', 'projects');
    }
});

let slideIntervalExpertise = setInterval(() => {
    handleSliding('right', 'expertise');
}, 3000);
let slideIntervalProjects = setInterval(() => {
    handleSliding('right', 'projects');
}, 3000);

// ****************************************************************
// handling animation
// ****************************************************************
// loop for each element in each variable & check if it's in the viewport then add the visible class or remove it
let animation = document.querySelectorAll('.animation');
let animationSideLeft = document.querySelectorAll('.animation-side-left');
let animationSideRight = document.querySelectorAll('.animation-side-right');
let skillItemSlider = document.querySelectorAll('.skill-item .skill-details .wrapper-slider .child-slider')

let handleAnimation = (animationElements) => {
    animationElements.map(x => {
        x.forEach(y => {
            const yClientRectTop = y.getBoundingClientRect().top;
            const windowInnerHeight = window.innerHeight;
            if (yClientRectTop > -200 && yClientRectTop < windowInnerHeight) {
                y.classList.add('visible');
                if (y.parentElement.classList.contains('animation-following')) {
                    let animationTimerFollowing = 0;
                    y.parentElement.childNodes.forEach(z => {
                        if (z.classList.contains('animation-side-right')) {
                            z.style.animation = `scroll-side-right-display ${animationTimerFollowing += 0.3}s ease-in-out`;
                        } else if (z.classList.contains('animation-side-left')) {
                            z.style.animation = `scroll-side-left-display ${animationTimerFollowing += 0.3}s ease-in-out`;
                        } else {
                            z.style.animation = `scroll-display ${animationTimerFollowing += 0.3}s ease-in-out`;
                        }
                    })
                }
            } else {
                y.classList.remove('visible');
            }
        })
    })
}
handleAnimation([animation, animationSideLeft, animationSideRight, skillItemSlider])
document.addEventListener('scroll', () => {
    handleAnimation([animation, animationSideLeft, animationSideRight, skillItemSlider]);
})