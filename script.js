//r first snack

const bikes = [

    {
        name : `mountain bike`,
        weightKg : 14
    },

    {
        name : `city bike`,
        weightKg : 10
    },

    {
        name : `run bike`,
        weightKg : 9
    },

    {
        name : `gravel bike`,
        weightKg : 11
    },

    {
        name : `city e-bike`,
        weightKg : 20
    }
    
];

let lowerKgBikeName = ``;
let lowerKgBike = bikes[0].weightKg;
for (const element of bikes) {

    if (element.weightKg < lowerKgBike) {

        lowerKgBike = element.weightKg;
        lowerKgBikeName = element.name
    }
}

console.log(lowerKgBikeName, lowerKgBike);

const bikeLowerKg = document.createElement(`div`);
bikeLowerKg.innerHTML = `La <strong>${lowerKgBikeName}</strong> è quella più leggera e pesa <strong>${lowerKgBike} Kg</strong>`;

const body = document.querySelector(`body`);
body.appendChild(bikeLowerKg);

//r second snack

const randomNumber = () => {

    const number = Math.floor(Math.random() * 11);
    return number;
};

const soccerTeams = [

    {
        name : `Juventus`,
        pointScored : randomNumber(),
        faulsSuffered : randomNumber(),
    },

    {
        name : `Inter`,
        pointScored : randomNumber(),
        faulsSuffered : randomNumber(),
    },
    
    {
        name : `Milan`,
        pointScored : randomNumber(),
        faulsSuffered : randomNumber(),
    },

    {
        name : `Lazio`,
        pointScored : randomNumber(),
        faulsSuffered : randomNumber(),
    },

    {
        name : `Roma`,
        pointScored : randomNumber(),
        faulsSuffered : randomNumber(),
    }
];