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

showMembers();

const addBtn = document.getElementById('addMemberButton');
console.log(addBtn);

addBtn.addEventListener('click', () => {
  const newName = document.getElementById('name').value;
  const newRole = document.getElementById('role').value;
  const newImg = document.getElementById('image').value;

  const newMember = {
    name: newName,
    role: newRole,
    image: newImg
  }

  team.push(newMember);
  console.log(team);
  showMembers();
})


//                       FUNCTIONS

/**
 * Description is the main function that creates the elements based on the properties of the data objects, organizes and prints the DOM elements within the layout
 */
function showMembers() {
  const teamContainer = document.querySelector('.team-container');
  console.log(teamContainer);

  teamContainer.innerHTML = '';
  
  for (let i = 0; i < team.length; i++) {
    const teamCard = document.createElement('div');
    teamCard.classList.add('team-card');
  
    const cardImg = document.createElement('div');
    cardImg.classList.add('card-image');
  
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
      } else if (key === 'image') {
        newElement = document.createElement('img');
      } else {
        newElement = document.createElement('p');
      }
  
      let cardToAppend;
  
      if (key === 'image') {
        newElement.setAttribute('src', 'img/' + thisItem);
        newElement.setAttribute('alt' , thisArray['name']);
        cardToAppend = cardImg;
      } else {
        newElement.append(thisItem);
        console.log(newElement);
        cardToAppend = cardText;  
      }
  
      cardToAppend.append(newElement);
      teamCard.append(cardToAppend);
      teamCard.style.display = 'flex';
      teamCard.style.flexDirection = 'column-reverse';
    }
  
    console.log(teamCard);
    teamContainer.append(teamCard);
    console.log(teamContainer);
  }
}