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

            $(this).addClass("userShadow");

            $("#attack-stats").append("You have chosen " + chosenUserCharacter.name + "!" + "<br><br>HP: " + chosenUserCharacter.hp + "<br>Attack Power: " + chosenUserCharacter.incrAttack);

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

            $(this).addClass("enemyShadow");

            $("#hp-stats").empty();

            $("#hp-stats").append("You will battle " + chosenActiveDefender.name + "!" + "<br><br>HP: " + chosenActiveDefender.hp + "<br>Attack Power: " + chosenActiveDefender.incrAttack);

            // moves character chosen second by player to the "defending-enemy-div"
            $("#defending-enemy-div").append(this);

            // increments the click counter
            clickCounter++;

            // once user has chosen both player and defender, do nothing on subsequent clicks  
        } else if (clickCounter === 2) return;
    });

    // attack button
    $("#attack-button").on("click", function() {

        if (clickCounter === 0) {
            $("#attack-stats").html("Please first choose a character...");
        }

        if (lossCounter === 1) return;

        if (clickCounter === 1 && winCounter === 1) return;

        chosenActiveDefender.hp -= chosenUserCharacter.incrAttack;

        chosenUserCharacter.hp -= chosenActiveDefender.attack;

        $("#attack-stats").html("You hit " + chosenActiveDefender.name + " for " + chosenUserCharacter.incrAttack + "<br><br>Your opponent hit you for " + chosenActiveDefender.attack);

        $("#hp-stats").html("Your opponent's hp has been reduced to " + chosenActiveDefender.hp + "<br><br>Your hp has been reduced to " + chosenUserCharacter.hp);

        chosenUserCharacter.incrAttack += chosenUserCharacter.attack;

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
    });

    function reset() {
        $("img").each(function() {
            $(".left").append(this);
            $(this).removeClass("userShadow");
            $(this).removeClass("enemyShadow");
            clickCounter = 0;
            $("#attack-stats").empty();
            $("#hp-stats").empty();
            char1.hp = 100;
            char1.incrAttack = 8;
            char2.hp = 120;
            char2.incrAttack = 10;
            char3.hp = 150;
            char3.incrAttack = 12;
            char4.hp = 180;
            char4.incrAttack = 15;
        });
    }

    $("#reset-button").on("click", function() {
        reset();
    });


});
