const speakersSection = document.createElement('section');
speakersSection.id = 'speakers-section';
speakersSection.innerHTML = `   
<h3>
  Featured Speakers
  <hr>
</h3>
`;
const main = document.querySelector('main');
const sponsorSection = document.querySelector('.sponsor-section');
main.insertBefore(speakersSection, sponsorSection);
const gridContainer = document.createElement('div');
gridContainer.id = 'grid-container'
speakersSection.appendChild(gridContainer)
const moreButton = document.createElement('button');
moreButton.classList.add('more-btn');
moreButton.innerHTML = `
  MORE
  <i class="fa-solid fa-angle-down"></i>
`;
speakersSection.appendChild(moreButton);

const speakers = [
  {
    img: 'images/dog1.avif',
    name: 'Axel',
    role: 'Loyal family dog and ocassional gangster',
    description: 'Axel is a loving dog but with a temper, don\'t get on his bad side',
  },
  {
    img: 'images/dog2.jpeg',
    name: 'Rex',
    role: 'Police dog',
    description: 'Rex is a trained police dog since he was just a puppy, he can sniff out just about anything and has over 50 successful missions on his resume',
  },
  {
    img: 'images/dog3.jpeg',
    name: 'Cuddles',
    role: 'Companion and guide dog for the disabled',
    description: 'Cuddles is a guide dog for the elderly and disabled at a facility in Ohio, he walks with 5-10 people every single day',
  },
  {
    img: 'images/dog4.jpeg',
    name: 'Mr. Sniffles',
    role: 'Circus performer',
    description: 'The funniest of the bunch, knows all the party tricks to get the crowd going.',
  },
  {
    img: 'images/dog5.avif',
    name: 'Rocky',
    role: 'Adopted from a shelter',
    description: 'Rocky is one of the thousands succesfull adoption stories that we have, and we hope that his story will inspire many more others to adopt.',
  },
  {
    img: 'images/dog6.avif',
    name: 'Bruno',
    role: 'Pitbull softie',
    description: 'Bruno is here to break the age old stereotipe that pitbulls are a mean and dangerous breed, his soft and loving demeanor is here to soften your heart.',
  },
];

function createSpeakers() {
  for (let i = 0; i < speakers.length; i++) {
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
  gridContainer.appendChild(speakerContainer);
  }
}

createSpeakers()
const speakersArr = document.querySelectorAll('.speaker-container');

moreButton.addEventListener('click', () => {
  speakersArr.forEach((speaker) => {
      speaker.style.display = 'flex'
  })
});
