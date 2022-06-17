const speakersSection = document.createElement('section');
speakersSection.id = 'speakers-section';
speakersSection.innerHTML = `   
<h3>
  Featured Speakers
  <hr>
</h3>
`;
const moreButton = document.createElement('button');
moreButton.classList.add('more-btn')
moreButton.innerHTML = `
  MORE
  <i class="fa-solid fa-angle-down"></i>
`;
speakersSection.appendChild(moreButton);
const main = document.querySelector('main');
main.appendChild(speakersSection)

const speakers = [
  {
    img: 'images/dog1.avif',
    name: 'Axel Shnitzel',
    role: 'Loyal family dog and ocassional gangster',
    description: 'Axel is a loving dog but with a temper, don\'t get on his bad side',
  },
  {
    img: 'images/dog1.avif',
    name: 'Axel Shnitzel',
    role: 'Loyal family dog and ocassional gangster',
    description: 'Axel is a loving dog but with a temper, don\'t get on his bad side',
  },
  {
    img: 'images/dog1.avif',
    name: 'Axel Shnitzel',
    role: 'Loyal family dog and ocassional gangster',
    description: 'Axel is a loving dog but with a temper, don\'t get on his bad side',
  },
  {
    img: 'images/dog1.avif',
    name: 'Axel Shnitzel',
    role: 'Loyal family dog and ocassional gangster',
    description: 'Axel is a loving dog but with a temper, don\'t get on his bad side',
  },
  {
    img: 'images/dog1.avif',
    name: 'Axel Shnitzel',
    role: 'Loyal family dog and ocassional gangster',
    description: 'Axel is a loving dog but with a temper, don\'t get on his bad side',
  },
  {
    img: 'images/dog1.avif',
    name: 'Axel Shnitzel',
    role: 'Loyal family dog and ocassional gangster',
    description: 'Axel is a loving dog but with a temper, don\'t get on his bad side',
  }
]

let position = 2;
let i = 0;
function createSpeakers() {
  for (i; i < position; i++) {
    const speakerContainer = document.createElement('div');
    speakerContainer.classList.add('speaker-container');
    speakerContainer.innerHTML = `
    <img class="checkboard" src="images/checkboard.png" alt="checkboard-decoration">
    <img class="speaker-img" src="${speakers[i].img}" alt="dog">
  
    <div>
      <h5 class="name">
        ${speakers[i].name}
      </h5>
  
      <p class="role">
        ${speakers[i].role}
        <hr>
      </p>
  
      <p class="description">
        ${speakers[i].description}
      </p>
    </div>
    `;
    speakersSection.insertBefore(speakerContainer, moreButton)
  }
  position +=2
}

createSpeakers()

moreButton.addEventListener('click', () => {
  if (position < 8) {
    createSpeakers()
  }
})