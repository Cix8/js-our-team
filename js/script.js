const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
];

console.log(team);

const teamContainer = document.querySelector('.team-container');
console.log(teamContainer);

for (let i = 0; i < team.length; i++) {
  const teamCard = document.createElement('div');
  teamCard.classList.add('team-card');

  const cardText = document.createElement('div');
  cardText.classList.add('card-text');
  
  const thisArray = team[i];
  let newElement;
  
  for (let key in thisArray) {
    const thisItem = thisArray[key];
    console.log(key + ':');
    console.log(thisItem);
    if (key === 'name') {
      newElement = document.createElement('h3');
    } else {
      newElement = document.createElement('p');
    }
    newElement.append(thisItem);
    console.log(newElement);
    cardText.append(newElement);
    teamCard.append(cardText);
  }

  console.log(teamCard);
  teamContainer.append(teamCard);
  console.log(teamContainer);
}