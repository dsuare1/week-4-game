$(document).ready(function() {

    // global variables
    var chosenUserCharacter, chosenActiveDefender;
    var clickCounter = 0;

    // character objects
    var char1 = {
            name: 'Eeth Koth',
            hp: 100,
            attack: 8,
            counterAttack: 8
        };

    var char2 = {
            name: 'Ki-Adi-Mundi',
            hp: 120,
            attack: 10,
            counterAttack: 10
        };
    
    var char3 = {
            name: 'Darth Krayt',
            hp: 150,
            attack: 12,
            counterAttack: 12
        };

    var char4 = {
            name: 'Darth Revan',
            hp: 180,
            attack: 15,
            counterAttack: 15
        };

// choose player and enemy logic
$(".characterIcon").on("click", function() {

    if (clickCounter === 0) {

        // assign the object to a variable
        if ($(this).hasClass("Eeth Koth")) {
            chosenUserCharacter = char1;
        } else if ($(this).hasClass("Ki-Adi-Mundi")) {
            chosenUserCharacter = char2;
        } else if ($(this).hasClass("Darth Krayt")) {
            chosenUserCharacter = char3;
        } else {
            chosenUserCharacter = char4;
        }
        console.log(chosenUserCharacter);

        // moves characters not chosen by player to the "available-enemies-div"
        $("#available-enemies-div").append($(this).siblings("img"));

        // moves character chosen first by player to the "user-character-div"
        $("#user-character-div").append(this);

        // increments the click counter
        clickCounter++;

    } else if (clickCounter === 1) {

        // assign the object to a variable
        if ($(this).hasClass("Eeth Koth")) {
            chosenActiveDefender = char1;
        } else if ($(this).hasClass("Ki-Adi-Mundi")) {
            chosenActiveDefender = char2;
        } else if ($(this).hasClass("Darth Krayt")) {
            chosenActiveDefender = char3;
        } else {
            chosenActiveDefender = char4;
        }
        console.log(chosenActiveDefender);
        
        // moves character chosen second by player to the "defending-enemy-div"
        $("#defending-enemy-div").append(this);

        // increments the click counter
        clickCounter++;

      // once user has chosen both player and defender, do nothing on subsequent clicks  
    } else if (clickCounter === 2) return;
});

// attack button



});

