let friends = ["Luis", "Becca", "Jessica", "Jazmin"]

let party = []

function writeCards(people, goldfishBirthday) {
    for (let f = 0; f < people.length; f++){
        party.push(`Thank you, ${people[f]}, for the wonderful ${goldfishBirthday} gift!`)   
    }
    return party;
}

let hello= 10;

function countDown(number){
    while (number > -1) {
        console.log(number--);
        
    }
 
}

