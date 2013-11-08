/**
 * Created by richardarrigo on 11/8/13.
 */

// Richie Arrigo | 2492145 | 11/08/2013
// Wacky Expressions example
// Video game suggestions

var genre=prompt('What type of game would you like to play?(FPS, RPG, Strategy)');
var type=prompt('Are you a casual or hardcore player?');

if(genre=='FPS'||genre=='fps'){
    if(type=='casual'||type=='Casual'){
        console.log('I suggest you play Call of Duty.');
    }
    else if(type=='hardcore'||type=='Hardcore'){
        console.log('I suggest you play Battlefield.');
    }
    else{
        console.log('You did not enter a valid selection.');
    }
}
else if(genre=='RPG'||genre=='rpg'){
    if(type=='casual'||type=='Casual'){
        console.log('I suggest you play The Elder Scrolls V: Skyrim.');
    }
    else if(type=='hardcore'||type=='Hardcore'){
        console.log('I suggest you play Dark Souls.');
    }
    else{
        console.log('You did not enter a valid selection.');
    }
}
else if(genre=='Strategy'||genre=='strategy'){
    if(type=='casual'||type=='Casual'){
        console.log('I suggest you play League of Legends.');
    }
    else if(type=='hardcore'||type=='Hardcore'){
        console.log('I suggest you play Sid Meier\'s Civilization V.');
    }
    else{
        console.log('You did not enter a valid selection.');
    }
}
else{
    console.log('You did not enter a valid selection.');
}