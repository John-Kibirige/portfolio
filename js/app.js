/* ----------------HUMBERGER MENU ------------------------------------*/
// create all to be used variables for the humberger menu
const humberger = document.querySelector('.humberger');
const headerLinks = document.querySelector('.header-links');
const headerLogo = document.querySelector('.animate-logo');
const blur = document.querySelector('.blur-effect');
const htmlElement = document.documentElement;

// the min-width break point
const MIN_WIDTH_BREAK_POINT = 768;

// chevron images
const chevronImages = document.querySelectorAll('.nav-menu li img');
const navMenuLinks = document.querySelectorAll('.nav-menu li a');

/**
 * function for all toggle actions concerning the mobile menu
 */
function toggleActions() {
  htmlElement.classList.toggle('active');
  humberger.classList.toggle('active');
  headerLinks.classList.toggle('active');
  headerLogo.classList.toggle('active');
  blur.classList.toggle('active');
}

// add event listener to humberger menu
humberger.addEventListener('click', () => {
  toggleActions();
});

// add event listener on the chevron images in the nav-menu
chevronImages.forEach((chevron) => {
  chevron.addEventListener('click', () => {
    if (chevron.id === 'forAbout') {
      window.location.href = '#about';
    }
    if (chevron.id === 'forContact') {
      window.location.href = '#contact';
    }
    if (chevron.id === 'forPortfolio') {
      window.location.href = '#portfolio';
    }

    // remove overflow hidden on the html by toggling the active class
    toggleActions();
  });
});

// add event listener on the anchor tags inside nav menu
navMenuLinks.forEach((anchor) => {
  anchor.addEventListener('click', () => {
    toggleActions();
  });
});

// Check if the 768px break point is exceeded so that the menu popup disappears
window.addEventListener('resize', () => {
  if (window.screen.width > MIN_WIDTH_BREAK_POINT) {
    htmlElement.classList.remove('active');
    humberger.classList.remove('active');
    headerLinks.classList.remove('active');
    headerLogo.classList.remove('active');
    blur.classList.remove('active');
  }
});

/* --------------------------POPUP MENU FOR BOTH MOBILE AND DESKTOP ---------------------- */
/**
 * Function returns a projects template for the project section
 * The function will generate a template for all the projects
 * @returns {object} the projects array template
 */
function makeProject() {
  const project = {
    imageUrl: '././images/Img-placeholder.svg',
    projectText: {
      title: 'Multi-Post Stories',
      description:
        "A daily selection of privately personalized reads; no accounts or sign - ups required.has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a standard dummy text.",
      technology: ['css', 'html', 'bootstrap', 'Ruby'],
      button: {
        type: 'button',
        text: 'See Project',
      },
    },
    liveLink: 'https://john-kibirige.github.io/portfolio/#portfolio',
    source: 'https://github.com/John-Kibirige/portfolio',
    blur: {
      class: '',
    },
  };
  return project;
}

// define all the four sections inside the the  portfolio projects section and modify any difference
const project1 = makeProject();
project1.blur.class = 'blur-eff-one';
project1.imageUrl = '././images/todo-list.png';
project1.projectText.title = 'Todo List App';
project1.projectText.description =
  'This is a simple todo list app to help you plan and manage your time effectively, by writing down all the tasks that you have in a given day. it has all the basic functionalities of adding a task, deleting it and updating it';
const project2 = makeProject();
project2.blur.class = 'blur-eff-two';
const project3 = makeProject();
project3.blur.class = 'blur-eff-three';
const project4 = makeProject();
project4.blur.class = 'blur-eff-four';

// store all projects in an array so as to easily loop through them
const projects = [project1, project2, project3, project4];

// store entire section in a variable using string literals for generating most of the elements
const projectSection = `
 <section class="portfolio-projects" id="portfolio">
    <h2 class="title">my recent work</h2>
    <div class="projects-container">
        ${projects
          .map(
            (project, index) => `           
                <div class="project" id="project-${index + 1}">
                  <div class=${(index + 1) % 2 === 0 ? 'display-order' : ''}>
                  <img src="${project.imageUrl}" class="pro-image" />
                  </div>
                  <div class="project-text">
                    <h2 class="project-title">${project.projectText.title}</h2>
                    <p class="project-description">${
                      project.projectText.description
                    }</p>

                    <div class="project-stack">
                      <ul class="project-stack-list">
                        ${project.projectText.technology
                          .map((item) => `<li>${item}</li>`)
                          .join('')}
                      </ul>
                    </div>

                    <button class="project-btn clickable" type="button">${
                      project.projectText.button.text
                    }</button>
                  </div>

                  <!-- blur effect -->
                  <div class=${project.blur.class}></div>

                </div>
              `
          )
          .join('')}
    </div>
</section>
`;

// working on the popup menu

const desktopDescription =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.";

/**
 * this function will be a template to generate all popups
 * @param {Object} project
 * @returns {string}
 */
function generatePopup(
  title = 'Multi - Post stories',
  imageUrl = '././images/popup-img-mobile.png',
  liveLink = 'https://john-kibirige.github.io/portfolio/#portfolio',
  source = 'https://github.com/John-Kibirige/portfolio',
  description = desktopDescription
) {
  return `
  <div class="mobile-popup">
    <img class="close-icon" src="././images/close-popup.svg" />
    <h3 class="popup-title">${title}</h3>
    <div wrap-popup-image><img class="popup-image" src="${imageUrl}" /></div>
    <p class="popup-description mob">${description}</p>
    <p class="popup-description desk">${description}</p>

    <img src="././images/tags-mobile.svg" class="mobile-tag" />
    <img src="././images/tags-desktop.svg" class="desktop-tag" />
    <div class="popup-links">
      <a href="${liveLink}"
        ><img class="see-live-img" src="././images/see-live.svg"
      /></a>
      <a href="${source}"
        ><img class="see-source-img" src="././images/see-source.svg"
      /></a>
    </div>
  </div>`;
}

// load the project section when the window has loaded
window.addEventListener('load', () => {
  const projectSectionWrapper = document.createElement('section');
  projectSectionWrapper.innerHTML = projectSection;

  // inserting the project wrapper to the right position in the overall-container div
  const overallContainer = document.querySelector('.overall-container');
  overallContainer.insertBefore(
    projectSectionWrapper,
    overallContainer.children[4]
  );

  // adding event listeners to the buttons inside the projects separately;
  const seeProjectBtns = document.querySelectorAll('.clickable');
  const overlay = document.querySelector('.overall-overlay');

  seeProjectBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      // toggle the active class on the popup and the overlay
      overlay.classList.toggle('active');

      // create the popup only when the user has clicked a button
      // add the created popup to a created div -- display popup
      const displayPopup = document.createElement('div');
      displayPopup.classList.add('display-pop');
      displayPopup.innerHTML = generatePopup(
        'Todo List App',
        '././images/todo-list.png',
        'https://john-kibirige.github.io/to-do-list/',
        'https://github.com/John-Kibirige/to-do-list',
        'This is a simple todo list app to help you plan and manage your time effectively, by writing down all the tasks that you have in a given day. it has all the basic functionalities of adding a task, deleting it and updating it'
      );

      // get specific location of the button
      const proj = document.getElementById(`project-${index + 1}`);
      proj.style.position = 'relative';
      proj.appendChild(displayPopup);

      // add event listener to the close icon
      const close = document.querySelector('.close-icon');
      close.addEventListener('click', () => {
        overlay.classList.toggle('active');
        proj.removeChild(displayPopup);
      });
    });
  });
});

// --------------- FORM VALIDATION FOR ONLY EMAIL ------------------------------------
const form = document.querySelector('.contact-form');

form.addEventListener('submit', function formValidation(event) {
  const email = this.querySelector('#email').value;
  const errorMessage = this.querySelector('.error');
  const condition = email.length > 0 ? email.toLowerCase() === email : false;
  if (!condition) {
    event.preventDefault();
    errorMessage.textContent = 'Email should be in lower case';
  }
});
