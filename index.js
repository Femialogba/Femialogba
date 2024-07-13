const TYPE_WRITER_STRS = [
    'Software Engineering',
    'Web development',
    'Art & Illustration',
    'Design',
];
const TYPING_SPEED = 100;
const DELAY_BTW_STRS = 3000;
const PROJECTS = [
    {
        id: '1',
        icon: './assets/github.svg',
        title: 'Sed Michael Website',
        desc: "Rebuilt the website of the agency 'Sed Michael' from the ground up. The new website offers more extensibilty than the existing Squarespace website agency. The website was implemented with Next.js",
        img: './assets/sed-michael.png',
        github: 'https://github.com/fmlog/sed-michael-website',
        link: 'https://sedmichael.com/',
    },

    {
        id: '2',
        icon: './assets/github.svg',
        title: 'Autograder',
        desc: 'For my dissertation, I developed a RESTful Autograder web application (automatic grading of programming assignment using test cases) that can be integrated into LMS (e.g., Canvas) using REST API.',
        img: './assets/autograder-2.png',
        github: 'https://github.com/fmlog/Autograder-v2',
        link: 'https://github.com/fmlog/Autograder-v2',
    },
    {
        id: '4',
        icon: './assets/github.svg',
        title: 'UK Sponsor Visa website',
        desc: '[In Progress] Building a web application that sorts and filter companies that offer visa sponsorship. Using data from gov.uk',
        img: './assets/inprogress.png',
        github: 'https://github.com/fmlog/Autograder-v2',
        link: 'https://github.com/fmlog/',
    },
];
const ILLOS = [
    {
        id: 'p1',
        title: 'Virgil Abloh',
        desc: 'Virgil Abloh Illustration',
        img: './assets/Virgil.jpg',
    },
    {
        id: 'p2',
        title: 'Sunny Ade',
        desc: 'Sunny Ade',
        img: './assets/SunnyAde.png',
    },
    {
        id: 'p3',
        title: 'Mortal Kombat',
        desc: 'Mortal Kombat',
        img: './assets/Mortal-Kombat.png',
    },
    {
        id: 'p4',
        title: 'Izzy',
        desc: 'Izzy',
        img: './assets/Izzy.png',
    },
    {
        id: 'p5',
        title: 'Storyboard for motion graphics',
        desc: 'Storyboard',
        img: './assets/Storyboard.png',
    },
    {
        id: 'p6',
        title: 'Grid filler 😂',
        desc: 'Grid filler',
        img: './assets/sprite-pry-blue.svg',
    },
];

const typewriterElement = document.getElementById('typewriter');

let menuOpen = false;
let currentSlide = 0;
let currentStringIndex = 0;
let currentCharIndex = 0;
let currentText = '';
let isDeleting = false;

/** @param {boolean} isOpen  */
function setMenuOpen(isOpen) {
    menuOpen = isOpen;
    if (menuOpen) {
        document.getElementById('TopbarId').classList.add('active');
        document.getElementById('MobileMenuId').classList.add('active');
    } else {
        document.getElementById('TopbarId').classList.remove('active');
        document.getElementById('MobileMenuId').classList.remove('active');
    }
}

/** @param {string} direction  */
function handleSliderClick(direction) {
    direction === 'left'
        ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : PROJECTS.length - 1)
        : setCurrentSlide(currentSlide < PROJECTS.length - 1 ? currentSlide + 1 : 0);
}

/** @param {number} currSlide  */
function setCurrentSlide(currSlide) {
    currentSlide = currSlide;
    document.getElementById('SliderID').style.transform = `translateX(${-currentSlide * 100}vw)`;
}

function addProjectsToDOM() {
    const slider = document.getElementById('SliderID');

    for (const project of PROJECTS) {
        const projectStr = `
            <div class="container">
              <div class="item">
                <div class="left">
                  <div class="leftContainer">
                    <div class="imgContainer">
                        <a href=${project.github}>
                        <img src=${project.icon} alt="" />
                        </a>
                    </div>
                    <h2>
                        <a href=${project.link}>${project.title}</a>
                    </h2>
                    <p>${project.desc}</p>
                  </div>
                </div>
                <div class="right">
                    <img src=${project.img} alt=${project.desc} />
                </div>
              </div>
            </div>
        `;
        slider.innerHTML += projectStr;
    }
}

function addIllosToDOM() {
    const grid = document.getElementById('illo-container');

    for (const illo of ILLOS) {
        const illoStr = `
            <div class="illo-item ${illo.id}">
                <img src=${illo.img} alt=${illo.desc}>
                <div class="image-title"><h2>${illo.title}</h2></div>
            </div>
        `;
        grid.innerHTML += illoStr;
    }
}

function type() {
    const fullText = TYPE_WRITER_STRS[currentStringIndex];

    if (!isDeleting) {
        const currString = currentText + fullText[currentCharIndex];
        typewriterElement.textContent = currString;
        currentText = currString;
        currentCharIndex++;
    } else {
        const currString = fullText.substring(0, currentCharIndex);
        typewriterElement.textContent = currString;
        currentCharIndex--;
    }

    if (!isDeleting && currentCharIndex === fullText.length) {
        isDeleting = true;
        currentText = '';
        setTimeout(type, DELAY_BTW_STRS);
    } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentStringIndex++;
        typewriterElement.innerText = '';

        if (currentStringIndex === TYPE_WRITER_STRS.length) {
            currentStringIndex = 0;
        }
        setTimeout(type, TYPING_SPEED);
    } else {
        setTimeout(type, TYPING_SPEED);
    }
}

addProjectsToDOM();
addIllosToDOM();
type();

document.getElementById('LeftSliderArrow').addEventListener('click', function () {
    handleSliderClick('left');
});
document.getElementById('RightSliderArrow').addEventListener('click', function () {
    handleSliderClick('right');
});

document.getElementById('hamburgerId').addEventListener('click', () => setMenuOpen(true));

document.getElementById('MenuLinks').childNodes.forEach(function (link) {
    link.addEventListener('click', () => setMenuOpen(false));
});
