$(document).ready(function() {



    // global variables
    var chosenUserCharacter, chosenActiveDefender, initialUserStats, initialEnemyStats;
    var clickCounter = 0;
    var winCounter = 0;
    var lossCounter = 0;

    // character objects
    var char1 = {
        name: 'Eeth Koth',
        hp: 100,
        attack: 8,
        incrAttack: 8
    };

    var char2 = {
        name: 'Ki-Adi-Mundi',
        hp: 120,
        attack: 10,
        incrAttack: 10
    };

    var char3 = {
        name: 'Darth Krayt',
        hp: 150,
        attack: 12,
        incrAttack: 12,
    };

    var char4 = {
        name: 'Darth Revan',
        hp: 180,
        attack: 15,
        incrAttack: 15
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

            // adds the green glow using box shadow in CSS
            $(this).addClass("userShadow");

            $("#attack-stats").empty();

            // displays user player stats
            $("#attack-stats").append("You have chosen " + chosenUserCharacter.name + "!" + "<br><br>HP: " + chosenUserCharacter.hp + "<br>Attack Power: " + chosenUserCharacter.incrAttack);

            // displays next step for user
            $("#hp-stats").append("Now choose your enemy...");

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

            // adds the red glow using box shadow in CSS
            $(this).addClass("enemyShadow");

            // clears the 'hp-stats' div
            $("#hp-stats").empty();

            // displays enemy stats
            $("#hp-stats").append("You will battle " + chosenActiveDefender.name + "!" + "<br><br>HP: " + chosenActiveDefender.hp + "<br>Attack Power: " + chosenActiveDefender.incrAttack);

            // moves character chosen second by player to the "defending-enemy-div"
            $("#defending-enemy-div").append(this);

            // increments the click counter
            clickCounter++;

            // once user has chosen both player and defender, do nothing on subsequent clicks  
        } else if (clickCounter === 2) return;

        if (clickCounter === 1 && winCounter === 1) return;
    });

    // attack button
    $("#attack-button").on("click", function() {

        // checks to see if the user has made any clicks so far; if not, do nothing except display a message saying to choose a character first
        if (clickCounter === 0) {
            $("#attack-stats").html("Please first choose a character...");
        }

        // if the user has only selected his/her character, the user still needs to select an enemy
        if (lossCounter === 1) return;

        // after the user has won once, do nothing until he/she chooses another character
        if (clickCounter === 1 && winCounter === 1) return;

        // after the user has won twice, do nothing until he/she chooses another character
        if (clickCounter === 1 && winCounter === 2) return;

        if (clickCounter === 1 && winCounter === 3) return;

        // update the defender's hp by subtracting the incremented attack
        chosenActiveDefender.hp -= chosenUserCharacter.incrAttack;

        // update the user's hp by subtracting the defender's attack
        chosenUserCharacter.hp -= chosenActiveDefender.attack;

        // display gameplay info
        $("#attack-stats").html("You hit " + chosenActiveDefender.name + " for " + chosenUserCharacter.incrAttack + "<br><br>Your opponent hit you for " + chosenActiveDefender.attack);

        // displays gameplay info
        $("#hp-stats").html("Your opponent's hp has been reduced to " + chosenActiveDefender.hp + "<br><br>Your hp has been reduced to " + chosenUserCharacter.hp);

        // increments the user's attack by double each time
        chosenUserCharacter.incrAttack += chosenUserCharacter.attack;

        // tracker for win / loss
        if (chosenUserCharacter.hp <= 0) {
            lossCounter++;
            clickCounter = 2;
            $("#user-character-div").empty();
            $("#hp-stats").empty();
            $("#attack-stats").html("You have been defeated...<br><br>Press the 'Reset' button to play again.");
        } else if (chosenActiveDefender.hp <= 0) {
            winCounter++;
            $("#defending-enemy-div").empty();
            $("#hp-stats").html("Your enemy has been defeated!<br><br>Choose your next opponent...");
            clickCounter = 1;
        }

        if (winCounter === 3) {
            $("#hp-stats").html("The force is strong with you!<br><br>Click reset if you want to play again.");
            $("#attack-stats").empty();
            return;
        }
    });

    // reset button to reload the page
    $("#reset-button").on("click", function() {
        // reset();
        location.reload();
    });


});
