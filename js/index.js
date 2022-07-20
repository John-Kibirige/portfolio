// create all to be used variables
const humberger = document.querySelector('.humberger');
const headerLinks = document.querySelector('.header-links');
const headerLogo = document.querySelector('.animate-logo');
const blur = document.querySelector('.blur-effect');
const htmlElement = document.documentElement;

// chevron images
const chevronImages = document.querySelectorAll('.nav-menu li img');
const navMenuLinks = document.querySelectorAll('.nav-menu li a');

function toggleActions() {
  htmlElement.classList.toggle('active');
  humberger.classList.toggle('active');
  headerLinks.classList.toggle('active');
  headerLogo.classList.toggle('active');
  blur.classList.toggle('active');
}

// add event on humberger menu
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

/**
 * Function returns a projects template for the project section
 * @returns {object} the projects array template
 */
function makeProject() {
  // Storing the projects inside an object
  const descriptionText = 'A daily selection of privately personalized reads; no accounts or sign - ups required.has been the industry\'s standard dummy text ever since the 1500s,when an unknown printer took a standard dummy text.';

  const project = {
    class: 'project',
    image: { class: 'project-display', imageUrl: '././images/Img-placeholder.svg' },
    projectText: {
      class: 'project-text',
      title: {
        class: 'project-title',
        content: 'Multi-Post Stories',
      },
      description: {
        class: 'project-description',
        text: descriptionText,
      },
      stack: {
        class: 'project-stack',
        list: {
          class: 'project-stack-list',
          items: ['css', 'html', 'bootstrap', 'Ruby'],
        },

      },
      button: {
        class: 'project-btn',
        type: 'button',
        text: 'See Project',
      },
    },
    blur: {
      class: '',
    },
  };
  return project;
}

// define all the four sections inside the the  portfolio projects section
const project1 = makeProject();
project1.blur.class = 'blur-eff-one';
const project2 = makeProject();
project2.blur.class = 'blur-eff-two';
const project3 = makeProject();
project3.blur.class = 'blur-eff-three';
const project4 = makeProject();
project4.blur.class = 'blur-eff-four';

const projects = [project1, project2, project3, project4];

// create a section element
const projectSection = document.createElement('section');
const projectTitle = document.createElement('h2');
const projectContainer = document.createElement('div');

// add class and id attribute to the created elements
projectSection.classList.add('portfolio-projects');
projectSection.id = 'portfolio';
projectTitle.classList.add('title');
projectTitle.innerText = 'my recent work';
projectContainer.classList.add('projects-container');

// append both the projects container and title to the portfolio section
projectSection.appendChild(projectTitle);
projectSection.appendChild(projectContainer);

// generating all projects using the projects

projects.forEach((project, index) => {
  const projectDiv = document.createElement('div');
  projectDiv.classList.add(project.class);

  // image template
  const imageElem = document.createElement('img');
  imageElem.src = project.image.imageUrl;
  imageElem.classList.add(project.image.class);
  if ((index + 1) % 2 === 0) {
    imageElem.classList.add('image-order');
  }
  projectDiv.appendChild(imageElem);

  // text related
  const projText = document.createElement('div');
  projText.classList.add(project.projectText.class);

  const h2 = document.createElement('h2');
  h2.classList.add(project.projectText.title.class);
  h2.textContent = project.projectText.title.content;

  const par = document.createElement('p');
  par.classList.add(project.projectText.description.class);
  par.textContent = project.projectText.description.text;

  const stackDiv = document.createElement('div');
  stackDiv.classList.add(project.projectText.stack.class);
  const stackList = document.createElement('ul');
  stackList.classList = project.projectText.stack.list.class;
  const stackItem = project.projectText.stack.list.items;
  //  loop through stack sub list to create li list and append  it to the stack list
  stackItem.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    stackList.appendChild(li);
  });
  stackDiv.appendChild(stackList);

  const projectBtn = document.createElement('button');
  projectBtn.classList.add(project.projectText.button.class);
  projectBtn.attributes.type = project.projectText.button.type;
  projectBtn.textContent = project.projectText.button.text;

  // appending title, description, stack, and button to project text
  projText.appendChild(h2);
  projText.appendChild(par);
  projText.appendChild(stackDiv);
  projText.appendChild(projectBtn);

  // the blur effect
  const blurEff = document.createElement('div');
  blurEff.classList.add(project.blur.class);

  // Append project text and blur to projects div as well;
  projectDiv.appendChild(projText);
  projectDiv.appendChild(blurEff);

  projectContainer.appendChild(projectDiv);
  projectSection.appendChild(projectContainer);
});

// insering to a particular position in the overall-container
const overallContainer = document.querySelector('.overall-container');
overallContainer.insertBefore(projectSection, overallContainer.children[4]);