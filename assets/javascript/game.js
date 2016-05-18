$(document).ready(function() {

    // global variables
    var userCharacterChosen, activeDefenderChosen;

    // array of character objects
    var characters = [
    	{
            name: 'Eeth Koth',
            hp: 100,
            attack: 8,
            counterAttack: 8
        },

        {
            name: 'Ki-Adi-Mundi',
            hp: 120,
            attack: 10,
            counterAttack: 10
        },

        {
            name: 'Darth Krayt',
            hp: 150,
            attack: 12,
            counterAttack: 12
        },

        {
            name: 'Darth Revan',
            hp: 180,
            attack: 15,
            counterAttack: 15
        }
    ];


    // initialize gamestate function


    // character selection logic





    // BELOW HERE NOT WORKING
    // *******************************************************

    // $(".characterIcon").on("click", function() {

        // var userCharacterName = $(this).attr('alt');

    //     // set the property of "userCharacter" of the object clicked to true
    //     for (i = 0; i < characters.length; i++) {
    //         if (characters[i].name === userCharacterName) {
    //             characters[i].userCharacter = true;
    //         }
    //     }
    // });

    // $("#user-character").append(this);

    // element data object
    // console.log($(this));
    // element
    // console.log($(this)[0]);

    // all siblings
    // console.log($(this).siblings());
    // specific siblings
    // console.log($(this).siblings('img'));

    // $('img[alt="Darth Revan"]')
    // *******************************************************

// now that the userCharacter is in the right place and the availableEnemies are in the right place, the user can select a specific enemy to attack
// $(".availableEnemies").on("click", function() {

// // moves the selected character (which will be the activeDefender) into the correct place
// $("#defending-enemy").append(this);
// });

// // attack button

// // new game button

// // call function to initialize game state
// // initializeGame();

// });








// previous code:

// character selection logic
    $(".availableCharacter").on("click", function() {

    	// if user has already selected a character, do nothing
    	if (userCharacterChosen) return;

    	// if user has already selected an enemy, do nothing
    	if (activeDefenderChosen) return;

    	userCharacterChosen = true;

		// assign a new class to all remaining
        $(this).siblings("img").addClass("availableEnemy");
        $(this).removeClass("availableCharacter");
        $(this).siblings("img").removeClass("availableCharacter");
        
        // moves the selected character (which will be the userCharacter) into the correct place
        $("#user-character").append(this);

        $(".availableEnemy").each(function() {
        	$("#available-enemies").append(this);
        })

        // adds the "userCharacter" id           ***for CSS***
        $(this).attr("id", "userCharacter");

    });

    $(".availableEnemy").on("click", function() {

    	// test
    	console.log("defender clicked");

    	//if user has already selected an ememy, do nothing
    	if (activeDefenderChosen) return;

    	activeDefenderChosen = true;

    	// moves the selected character (which will be the activeDefender) into the correct place
    	$("#defending-enemy").append(this);

    	// adds the "activeDefender" id 		***for CSS***
    	$(this.attr("id", "activeDefender"));

    });

    // now that the userCharacter is in the right place and the availableEnemies are in the right place, the user can select a specific enemy to attack
    $(".availableEnemies").on("click", function() {

        // moves the selected character (which will be the activeDefender) into the correct place
        $("#defending-enemy").append(this);
    });
});


// if (userCharacterChosen === false && activeDefenderChosen === false)

// // move the players around
// // remove class 'opponents' & add class 'player'

// if ($(this).hasClass(".playerName"))
// here --> assign to userPlayer variables

// if (userCharacterChosen === true && activeDefenderChose === false)

// // move the players around again
