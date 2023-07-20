const data = [{
    mainInfo: {
        brand: 'SaturnaCode',
        name: 'Youssef Hamed',
        greeting: "Hi, I'm",
        bio: 'Software Developer Spesialized In Frontend Web Development',
        about: [
            {
                id: 'shortAbout', //the short
                paragraph: [
                    'Passionate Frontend Developer crafting capitative web experiences.',
                    'Expert in HtML, CSS, JavaScript, and React Native.js.',
                ],
                callToAction: "_Let's bring your vesion to life ;)"
            },
            {
                id: 'longAbout', //the long
                paragraph: [
                    "I'm Youssef Hamed, a frontend developer specializing in creating capitative web experiences.",
                    "With expertise in HTML, CSS, and JavaScript, I bring 3 years of industry experience.",
                    "I am passionate about crafting visually stunning and user-friendly websites that leave a lasting impact.",
                ],
                callToAction: "Let's collaborate to bring your ideas to life!",
            },
            {
                id: 'callToAction',
                name: 'Whatsapp me',
                icon: 'whatsapp',
                link: 'https://wa.me/+201279237596'
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
                name: 'twitter',
                link: 'https://twitter.com/youssefhamed550',
                color: '#00acee',
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
                link: 'https://drive.google.com/file/d/1nrpEpUrWHcIDcxXYNfuORHt6UB3HnNRv/view?usp=sharing',
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
                percentage: '98%',
            },
            {
                name: 'CSS',
                percentage: '99%',
            },
            {
                name: 'SASS',
                percentage: '90%',
            },
            {
                name: 'JavaScript',
                percentage: '80%',
            },
            {
                name: 'Mongodb',
                percentage: '20%',
            },
            {
                name: 'Express',
                percentage: '10%',
            },
            {
                name: 'Reactjs',
                percentage: '60%',
            },
            {
                name: 'Nodejs',
                percentage: '20%',
            },
            {
                name: 'SEO',
                percentage: '55%',
            },
            {
                name: 'figma',
                percentage: '70%',
            },
        ],
        expertise: [
            {
                name: 'Website Design and Development',
                desc: "Create visually appealing and functional websites that effectively convey your brand and message.",
                color: 'yellow',
            },
            {
                name: 'Frontend Web Development',
                desc: "Build user-friendly and interactive interfaces using HTML, CSS, and JavaScript to enhance the user experience.",
                color: 'green',
            },
            {
                name: 'UI/UX Design',
                desc: "Craft intuitive and aesthetically pleasing user interfaces, focusing on user experience and usability.",
                color: 'yellow',
            },
            {
                name: 'Responsive Web Design',
                desc: "Develop websites that adapt seamlessly to different screen sizes and devices, ensuring a consistent and optimal experience for all users.",
                color: 'green',
            },
            {
                name: 'HTML/CSS Development',
                desc: "Write clean and semantic HTML code and apply CSS styling to create visually appealing web pages.",
                color: 'yellow',
            },
            {
                name: 'JavaScript Development',
                desc: "Utilize the power of JavaScript to add dynamic and interactive elements to web applications and enhance user interactions.",
                color: 'green',
            },
            {
                name: 'React.js Development',
                desc: "Leverage the React.js framework to build efficient, modular, and reusable components for scalable web applications.",
                color: 'yellow',
            },
            {
                name: 'SEO Optimization',
                desc: "Implement effective strategies to improve search engine visibility and optimize website content to drive organic traffic and improve rankings.",
                color: 'green',
            },
        ],
        projects: [
            {
                name: 'SaturnaCode',
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
                <div className="brand flex">
                    <img onClick={logoNav} src="./assets/brand/logo.png" alt="Youssef-Hamed brand logo" />
                    <h1 onClick={logoNav}>{data[0].mainInfo.brand}</h1>
                </div>
                <div className="navigation flex">
                    <ul className="menu flex">
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#expertise">Expertise area</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li className='menuIcon'><img src="./../assets/icons/menu.png" alt="menu_icon" /></li>
                    </ul>
                    <ul className="call-to-action">
                        <li><a href="#contactForm">{data[0].mainInfo.navCallToAction}</a></li>
                    </ul>
                </div>
                <div className="slide-menu flex">
                    <ul className="flex">
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#expertise">Expertise area</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
    function HeroSection() {
        function LeftSection() {
            return (
                <div className="left-section flex">
                    <h1>
                        <span className="greeting">{data[0].mainInfo.greeting}</span>
                        {data[0].mainInfo.name}
                    </h1>
                    <p className='bio'>{data[0].mainInfo.bio}</p>
                    <div className="stat-numbers flex">
                        {
                            data[0].work.stat.map((x, i) => (
                                <p key={`${i}-stat-item`} className="flex">
                                    <span className="number">{x.number}</span>
                                    {x.name}
                                </p>
                            ))
                        }
                    </div>
                    <a href="#projects">
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
                    <img src={`./../assets/brand/${data[0].mainInfo.name}.png`} />
                </div>
            )
        }
        function RightSection() {
            let shortAbout = data[0].mainInfo.about.find(x => x.id === "shortAbout");
            return (
                <div className="right-section">
                    <div className="skills-icons flex">
                        {
                            data[0].work.skills.map((x, i) => (
                                <img key={`${i}-skill`} src={`./../assets/skills/${x.name}.png`} alt={`${x.name}`} />
                            ))
                        }
                    </div>
                    <div className="about">
                        {
                            shortAbout.paragraph.map((x, i) => (
                                <p key={`paragraph-${i}`}>{x}</p>
                            ))
                        }
                        <p className="call-to-action">{shortAbout.callToAction}</p>
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
            <div className="social-media-section flex">
                {data[0].contact.socialMedia.map((x, i) => (
                    <a href={x.link} target="_blank" key={`${i}- link`} className="flex" style={{ color: `${x.color}` }}>
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
                <img src='./../assets/backgrounds/header wave home.png' alt='background' />
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
                <h1>About</h1>
                <div className="body flex">
                    <div className="about-text">
                        {
                            about.paragraph.map((x, i) => (<p key={`paragraph-${i}`}>{x}</p>))
                        }
                        {
                            <p className="call-to-action">{about.callToAction}</p>
                        }
                        {
                            <a className="flex" href={callToAction.link} target='_blank'>
                                <img src='./../assets/social_media/whatsapp.png' alt='social media whatsapp' />
                                {callToAction.name}
                            </a>
                        }
                    </div>
                    <div className="about-img">
                        <img src='./../assets/brand/about.png' alt='about image for a developer' />
                    </div>
                </div>
                <div className="end-line"></div>
            </div >
        )
    }
    function Skills() {
        return (
            <div id="skills" className="skills flex">
                <h1>Skills</h1>
                <div className="body flex">
                    {
                        data[0].work.skills.map((x, i) => (
                            <div className="skill-item flex" key={`skill-number-${i}`}>
                                <img src={`./../assets/skills/${x.name}.png`} alt={`${x.name}-icon`} />
                                <div className="wrapper-slider">
                                    <div className="child-slider" style={{ width: `${x.percentage}` }}>
                                        <p>{x.percentage}</p>
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
                <h1>Expertise Area</h1>
                <div className="body flex">
                    <div className="items flex"></div>
                    <div className="arrows flex">
                        <i className="fa-solid fa-angle-left expertise"></i>
                        <i className="fa-solid fa-angle-right expertise"></i>
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
                <h1>Projects</h1>
                <div className="body flex">
                    <div className="items flex"></div>
                    <div className="arrows flex">
                        <i className="fa-solid fa-angle-left project"></i>
                        <i className="fa-solid fa-angle-right project"></i>
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
                <h1>Contact</h1>
                <div className='body flex'>
                    <div className="contact-text">
                        <p>{data[0].contact.footer.desc}</p>
                        <div className="connect-links flex">
                            {
                                data[0].contact.footer.connect.map((x, i) => (
                                    <a key={i} href={x.link}>
                                        <img src={`./../assets/social_media/${x.name}.png`} alt={x.name} />
                                        <p>{x.text}</p>
                                    </a>
                                ))
                            }
                        </div>
                        <div className="connect-icons flex">
                            {
                                data[0].contact.footer.icons.map((x, i) => (
                                    <a key={i} href={x.link} target="_blank" className='flex'>
                                        <img src={`./../assets/social_media/${x.name}.png`} alt={`${x.name}-icon`} />
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                    <div id="contactForm" className="form flex">
                        <h4>Get In Touch</h4>
                        <form action="https://www.actionforms.io/e/r/saturnacode" method="POST" target="_blank" className="flex">
                            <div className="name full-width flex">
                                <label>Name:</label>
                                <input required id="name" type="text" name="name" placeholder="Enter your name..." />
                            </div>
                            <div className="contact-section full-width flex">
                                <fieldset>
                                    <legend>Contact</legend>
                                    <div className="email full-width flex">
                                        <label>E-mail:</label>
                                        <input required id="email" type="email" name="email" placeholder="Enter your e-mail address..." />
                                    </div>
                                    <div className='preferred full-width flex'>
                                        <div className="platform half-width">
                                            <label>Platform:</label>
                                            <select id="platform" name="platform">
                                                <option value="Whatsapp">Whatsapp</option>
                                                <option value="Telegram">Telegram</option>
                                                <option value="E-mail">E-mail</option>
                                                <option value="Call">Phone Call</option>
                                            </select>
                                        </div>
                                        <div className="username half-width">
                                            <label>Username:</label>
                                            <input id="username" type="text" name="username" placeholder="Enter your username..." />
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                            <div className="content full-width flex">
                                <div className="subject full-width">
                                    <label>Subject:</label>
                                    <input required id="subject" type="text" name="subject" placeholder="Subject..." />
                                </div>
                                <div className="message full-width">
                                    <label>Message:</label>
                                    <textarea required id="message" name="message" placeholder="Enter your message..." />
                                </div>
                            </div>
                            <input id="submit" type="submit" />
                        </form>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>made with <span>&#127892;</span> by: youssef-hamed ;)</p>
                <p className='flex'>&copy;youssef-hamed</p>
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

// non-display menu in more than 800px screen
// show & hide menu in mobile less than 800px
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

function slider(sectionWidth, expertiseWidthItem, projectWidthItem) {
    // get the array of expertise and projects 
    let expertiseItems = data[0].work.expertise.map((x, i) => (
        <div key={i} className="expertise-item flex" style={{ height: expertiseWidthItem, backgroundImage: `url('./../assets/backgrounds/blob-${x.color}.png')`, }}>
            <h4>{x.name}</h4>
            <p>{x.desc}</p>
        </div>
    ));
    let projectsItems = data[0].work.projects.map((x, i) => (
        <div key={i} className="project-item flex">
            <a href={x.url} target="_blank">
                <div className="snapshot-project">
                    <img src={`./../assets/projects/${x.name}.png`} alt={x.name + ' project screen'} />
                </div>
                <h4>{x.name}</h4>
                <p>{x.bio}</p>
            </a>
        </div>
    ));
    // divise the available area by width item to get only the number that have to be displayed without being overflowing
    let expertiseVisibleItemsNumber = Math.floor(sectionWidth / expertiseWidthItem);
    let projectVisibleItemsNumber = Math.floor(sectionWidth / projectWidthItem);
    // handle the first & last visible items 
    let expertiseFirstItem = 0;
    let projectFirstItem = 0;
    let expertiseLastItem = expertiseVisibleItemsNumber - 1;
    let projectLastItem = projectVisibleItemsNumber - 1;
    // add the dots nav to be equal to the number of all items
    let expertiseDotsContainer = document.querySelector('.expertise .body .dots');
    let projectDotsContainer = document.querySelector('.projects .body .dots');
    expertiseDotsContainer.innerHTML = '';
    projectDotsContainer.innerHTML = '';
    for (let i = 1; i <= expertiseItems.length; i++) {
        const div = document.createElement('div');
        div.className = `item-${i - 1}`;
        expertiseDotsContainer.appendChild(div);
    }
    for (let i = 1; i <= projectsItems.length; i++) {
        const div = document.createElement('div');
        div.className = `item-${i - 1}`;
        projectDotsContainer.appendChild(div);
    }
    // ************************************************************************************************
    // ********************************((((((((((   CORE FUNCTION   ))))))))))
    // ************************************************************************************************
    // the core functon of sliding which make an array of two values first and last item 
    // then make a loop to filter all items and returns an array of items that have the same key number
    // then it's handle active dot nav by adding active to the one that also has the same key number
    function handleSliding(section) {
        // making an array of visible items indexes using first and last item
        let expertiseVisibleItemsArray = [];
        let projectVisibleItemsArray = [];
        function visibleKeyItems() {
            let firstItem;
            let lastItem;
            let sectionItems;
            let array;
            if (section == 'expertise') {
                firstItem = expertiseFirstItem;
                lastItem = expertiseLastItem;
                sectionItems = expertiseItems;
                array = expertiseVisibleItemsArray;
                updataItems();
                expertiseFirstItem = firstItem;
                expertiseLastItem = lastItem;
                expertiseVisibleItemsArray = array;
                let expertiseVisibleItems = expertiseVisibleItemsArray.map(x => expertiseItems.filter(y => y.key == x)).map(x => { return (x[0]) });
                ReactDOM.render(expertiseVisibleItems, document.querySelector('.expertise .body .items'));
            } else {
                firstItem = projectFirstItem;
                lastItem = projectLastItem;
                sectionItems = projectsItems;
                array = projectVisibleItemsArray;
                updataItems();
                projectFirstItem = firstItem;
                projectLastItem = lastItem;
                projectVisibleItemsArray = array;
                let projectVisibleItems = projectVisibleItemsArray.map(x => projectsItems.filter(y => y.key == x)).map(x => { return (x[0]) });
                ReactDOM.render(projectVisibleItems, document.querySelector('.projects .body .items'));
            }
            function updataItems() {
                if (firstItem <= lastItem) {
                    for (let i = firstItem; i <= lastItem; i++) {
                        array.push(i);
                    }
                } else {
                    for (let i = firstItem; i <= sectionItems.length - 1; i++) {
                        array.push(i);
                    }
                    for (let i = 0; i <= lastItem; i++) {
                        array.push(i);
                    }
                }
            }
        }
        visibleKeyItems()
        // ----------------------------------------------------------------
        // update dots navigation using active class
        document.querySelectorAll('.expertise .dots div').forEach(x => x.classList.remove('active'))
        document.querySelectorAll('.projects .dots div').forEach(x => x.classList.remove('active'))
        document.querySelectorAll('.expertise .dots div').forEach(x => {
            x.className == `item-${expertiseFirstItem}` ? x.classList.add('active') : 0;
        })
        document.querySelectorAll('.projects .dots div').forEach(x => {
            x.className == `item-${projectFirstItem}` ? x.classList.add('active') : 0;
        })
    }
    handleSliding('expertise');
    handleSliding('project');
    // ----------------------------------------------------------------
    // control slides time interval function play & stop
    let expertiseSlidesTimer;
    let projectSlidesTimer;
    function controlSlides(section, status) {
        function playSlides() {
            let firstItem;
            let lastItem;
            let sectionItems;
            if (section == 'expertise') {
                firstItem = expertiseFirstItem;
                lastItem = expertiseLastItem;
                sectionItems = expertiseItems;
                updataItems();
                expertiseFirstItem = firstItem;
                expertiseLastItem = lastItem;
                handleSliding('expertise');
            } else {
                firstItem = projectFirstItem;
                lastItem = projectLastItem;
                sectionItems = projectsItems;
                updataItems();
                projectFirstItem = firstItem;
                projectLastItem = lastItem;
                handleSliding('project');
            }
            function updataItems() {
                firstItem == sectionItems.length - 1 ? firstItem = 0 : firstItem++;
                lastItem == sectionItems.length - 1 ? lastItem = 0 : lastItem++;
            }
        }
        if (status == 'play') {
            if (section == 'expertise') {
                expertiseSlidesTimer = setInterval(playSlides, 5000);
            } else {
                projectSlidesTimer = setInterval(playSlides, 5000);
            }
        } else {
            if (section == 'expertise') {
                clearInterval(expertiseSlidesTimer)
            } else {
                clearInterval(projectSlidesTimer)
            }
        }
    }
    controlSlides('expertise', 'play');
    controlSlides('project', 'play');
    window.addEventListener('resize', () => {
        controlSlides('expertise', 'stop')
        controlSlides('project', 'stop')
    })
    // ----------------------------------------------------------------
    // control next & previous buttons
    function controlArrows(direction, event) {
        if (direction == 'next') {
            if (event.classList.contains('expertise')) {
                expertiseFirstItem == expertiseItems.length - 1 ? expertiseFirstItem = 0 : expertiseFirstItem++;
                expertiseLastItem == expertiseItems.length - 1 ? expertiseLastItem = 0 : expertiseLastItem++;
                handleSliding('expertise');
            } else {
                projectFirstItem == projectsItems.length - 1 ? projectFirstItem = 0 : projectFirstItem++;
                projectLastItem == projectsItems.length - 1 ? projectLastItem = 0 : projectLastItem++;
                handleSliding('project');
            }
        } else {
            if (event.classList.contains('expertise')) {
                expertiseFirstItem == 0 ? expertiseFirstItem = expertiseItems.length - 1 : expertiseFirstItem--;
                expertiseLastItem == 0 ? expertiseLastItem = expertiseItems.length - 1 : expertiseLastItem--;
                handleSliding('expertise');
            } else {
                projectFirstItem == 0 ? projectFirstItem = projectsItems.length - 1 : projectFirstItem--;
                projectLastItem == 0 ? projectLastItem = projectsItems.length - 1 : projectLastItem--;
                handleSliding('project');
            }
        }
    }
    document.querySelectorAll('.arrows i.fa-angle-right').forEach(x => {
        x.addEventListener('click', (e) => {
            controlArrows('next', e.target);
        })
    })
    document.querySelectorAll('.arrows i.fa-angle-left').forEach(x => {
        x.addEventListener('click', (e) => {
            controlArrows('prev', e.target);
        })
    })
}
function renderSliderItems() {
    let clientWidth = document.querySelector('body').clientWidth;
    let sectionWidth = clientWidth * 90 / 100 * 90 / 100;
    if (clientWidth > 1500) {
        slider(1500, 1500 * 45 / 100, 1500 * 45 / 100);
    } else if (clientWidth > 800) {
        slider(sectionWidth, sectionWidth * 45 / 100, sectionWidth * 45 / 100)
    } else {
        slider(sectionWidth, sectionWidth * 90 / 100, sectionWidth * 90 / 100)
    }
}
renderSliderItems()
window.onresize = () => {
    let expertiseFirstItem = 0;
    let projectFirstItem = 0;
    let expertiseLastItem;
    let projectLastItem;
    renderSliderItems()
}