console.log('in challenge');

let elizabethSanger = {
    congressionalDistrict: 5,
    statements: [
      {statement: "pie for everyone", category: "Jobs"},
      {statement: "no taxes on pie", category: "Taxes"},
      {statement: "No working on friday", category: "Jobs"}
    ],
    donationFormUrl: 'www.google.com',
    events: [
      {date: '08/27/2018', title:"Zoe's birthday", description:"eat all the pie at the party"},
      {date: '08/28/2018', title:"Arrays", description:"all the looping"},
      {date: '09/4/2018', title:"Some important event", description:"SUPER important"},
      {date: '09/4/2018', title:"Running", description:"from the police"},
      {date: '03/14/2019', title:"Pi Day", description:"Eat it all???"}
    ],
    volunteers: [
      {
        name: 'Callan',
        address: '500 interstate blvd S',
        email: 'callan@yomamma.com',
        phone: '1234567890',
        availability: '9-5',
        activities: 'phone calls only'
      },
      {
        name: 'Lauren',
        address: '1 main street',
        email: 'lauren@comcast.net',
        phone: '1134567890',
        availability: 'never',
        activities: 'collecting money'
      },
      {
        name: 'Bernard',
        address: '1 Bernard Way',
        email: 'Bernard@thebear.net',
        phone: '1134567890',
        availability: 'all day',
        activities: 'everything'
      }
    ],
    biography: "I'm so cool!  please elect me",
    images: [
      {
        imageUrl: "http://catsatthestudios.com/wp-content/uploads/2017/12/12920541_1345368955489850_5587934409579916708_n-2-960x410.jpg",
        description: "The Crew",
        type: "constituents"
      },
      {
        imageUrl: "https://imgix.bustle.com/uploads/image/2018/4/18/5f312113-eaa8-4e71-9360-871e51084f4f-fotolia_125402501_subscription_monthly_m.jpg?w=970&h=582&fit=crop&crop=faces&auto=format&q=70",
        description: "Elizabeth at the fair",
        type: "headshot"
      },
      {
        imageUrl: "http://los40cl00.epimg.net/los40/imagenes/2018/08/13/actualidad/1534185434_207658_1534185597_noticia_normal.jpg",
        description: "Elizabeth and her homies",
        type: "constituents"
      },
      {
        imageUrl: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3658031.jpg",
        description: "All the people of district 5",
        type: "constituents"
      },
    ],
    missionStatement: "Do good stuff",
    voterRegistrationUrl: 'www.google.com'
  };


  const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
  };


  const voterRegistrationStringBuilder = () => {
        const newString = `<a href="https://${elizabethSanger.voterRegistrationUrl}" target="_blank">Register to Vote Here</a>`;
        printToDom(newString, 'voterRegistration');
  };


const donationFormStringBuilder = () => {
    const newString = `<a href="https://${elizabethSanger.donationFormUrl}" target="_blank">Donate Here</a>`;
    printToDom(newString, 'donationForm');
}


const statementStringBuilder = () => {
    let newString = ''; 
    for (let i = 0; i < elizabethSanger.statements.length; i++) {
        newString += `<div class="statement">`
        newString += `<h3>${elizabethSanger.statements[i].statement}</h3>`;
        newString += `<h6>${elizabethSanger.statements[i].category}</h6>`;
        newString += `</div>`;
    }
    printToDom(newString, 'statements');
};


const eventStringBuilder = () => {
  let newString = '';
  for (let i = 0; i < elizabethSanger.events.length; i++) {
      newString += `<div class="events">`
      newString += `<h4>${elizabethSanger.events[i].date}</h4>`;
      newString += `<h3>${elizabethSanger.events[i].title}</h3>`;
      newString += `<h3>${elizabethSanger.events[i].description}</h3>`;
      newString += `</div>`;
  }
  printToDom(newString, 'events');
};


const districtStringBuilder = () => {
    const anotherString = `<h1>${elizabethSanger.congressionalDistrict}</h1>`;
    printToDom(anotherString, 'congressionalDistrict');
};


const volunteerStringBuilder = () => {
  let newString = ''; 
  for (let i = 0; i < elizabethSanger.volunteers.length; i++) {
      newString += `<div class="vols">`
      newString += `<h1>${elizabethSanger.volunteers[i].name}</h1>`;
      newString += `<h1>${elizabethSanger.volunteers[i].address}</h1>`;
      newString += `<h2>${elizabethSanger.volunteers[i].email}</h2>`;
      newString += `<h2>${elizabethSanger.volunteers[i].phone}</h2>`;
      newString += `<h3>${elizabethSanger.volunteers[i].availability}</h3>`;
      newString += `<h3>${elizabethSanger.volunteers[i].activities}</h3>`;
      newString += `<div>`;
  }
  printToDom(newString, 'volunteers');
}


const bioStringBuilder = () => {
  const theString = `<h4>${elizabethSanger.biography}</h4>`;
  printToDom(theString, 'biography');
}


const missionStringBuilder = () => {
  const daString = `<h5>${elizabethSanger.missionStatement}</h5>`;
  printToDom(daString, 'missionStatement');
}


const imageStringBuilder = () => {
  let thaString = '';
  for (let i = 0; i < elizabethSanger.images.length; i++) {
        thaString += `<div class="img">`
        thaString += `<img src="${elizabethSanger.images[i].imageUrl}">`;
        thaString += `<h3>${elizabethSanger.images[i].description}</h3>`;
        thaString += `<h2>${elizabethSanger.images[i].type}</h2>`;
        thaString += `</div>`;
  }
  printToDom(thaString, 'images');
}


// CALLING THE 9 FUNCTIONS 

voterRegistrationStringBuilder();
donationFormStringBuilder();
statementStringBuilder();
eventStringBuilder();
districtStringBuilder();
volunteerStringBuilder();
bioStringBuilder();
missionStringBuilder();
imageStringBuilder();


// PART 3 OF JS ARRAYS - CHANGING THE STATE OF THE OBJECT / MODIFYING THE ARRAY

const updatevoterRegistration = (newURL) => {
    elizabethSanger.voterRegistrationUrl = newURL; 
    voterRegistrationStringBuilder();
};

const updateDonationForm = (newSite) => {
     elizabethSanger.donationFormUrl = newSite;
     donationFormStringBuilder();
};

const updateStatements = (newStatements) => {
    elizabethSanger.statements[2].statement = newStatements;
    statementStringBuilder();
};

const updateEvents = (newEvent) => {
  elizabethSanger.events[3].title = newEvent;
  eventStringBuilder();
};

const updateDistrict = (newDis) => {
  elizabethSanger.congressionalDistrict = newDis;
  districtStringBuilder();
}

const updateVolunteers = (newVol) => {
  elizabethSanger.volunteers[2].name = newVol;
  volunteerStringBuilder();
}

const updateBio = (newBio) => {
  elizabethSanger.biography = newBio;
  bioStringBuilder();
}

const updateMission = (newMission) => {
  elizabethSanger.missionStatement = newMission;
  missionStringBuilder();
}

const updateImage = (newImage) => {
  elizabethSanger.images[1].imageUrl = newImage;
  imageStringBuilder();
}


// CALLING THE UPDATED FUNCTIONS

updatevoterRegistration('classtracker.zoeames.com');
updateDonationForm('www.papajohns.com/order/specials');
updateStatements('pie for only Colin');
updateEvents('lifting weights');
updateDistrict('14');
updateVolunteers('Colin');
updateBio("I've been groomed all my life for politics");
updateMission("I want to index the world’s information.");
updateImage('https://placeimg.com/640/480/tech');







