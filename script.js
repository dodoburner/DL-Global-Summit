const speakersSection = document.createElement('section');
speakersSection.id = 'speakers-section';
speakersSection.innerHTML = `   
<h3>
  Featured Speakers
  <hr>
</h3>
`;

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

speakers.forEach((speaker) => {
  const speakerContainer = document.createElement('div');
  speakerContainer.classList.add('speaker-container');
  speakerContainer.innerHTML = `
  <img class="checkboard" src="images/checkboard.png" alt="checkboard-decoration">
  <img class="speaker-img" src="${speaker.img}" alt="dog">

  <div>
    <h5 class="name">
      ${speaker.name}
    </h5>

    <p class="role">
      ${speaker.role}
      <hr>
    </p>

    <p class="description">
      ${speaker.description}
    </p>
  </div>
  `;

  speakersSection.appendChild(speakerContainer)
});

const main = document.querySelector('main');
main.appendChild(speakersSection)