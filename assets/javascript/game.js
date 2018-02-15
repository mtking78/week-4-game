$(document).ready(function() {

    // ***** GLOBAL VARIABLES *****

    var targetNumber;
    var redCrystalValue;
    var blueCrystalValue;
    var yellowCrystalValue;
    var greenCrystalValue;
    var wins = 0;
    var losses = 0;
    var currentSum = 0;


    // ***** FUNCTIONS *****

function gameBegin () {
    currentSum = 0;
    console.log("currentSum: " + currentSum);

    // Generate a random targetNumber from 19 - 120 to match
    targetNumber = Math.floor(Math.random() * 120 + 19);
    console.log("target number: " + targetNumber);
    // Display the random targetNumber to match
    $("#targetNumber").text(targetNumber);

    // Generate random values from 1 - 12 to gem buttons each game
    function crystalValueSetter () {
        return Math.floor(Math.random() * 12 + 1);
    }

    // Access the fuction to assign a value for each gem
    redCrystalValue = crystalValueSetter();
    console.log("red: " + redCrystalValue);
    blueCrystalValue = crystalValueSetter();
    console.log("blue: " + blueCrystalValue);
    yellowCrystalValue = crystalValueSetter();
    console.log("yellow: " + yellowCrystalValue);
    greenCrystalValue = crystalValueSetter();
    console.log("green: " + greenCrystalValue);
}
gameBegin();

    // ***** MAIN PROCESS *****

    // Clicking a crystal adds the value to the currentSum
// Red crystal
$("#crystalRed").on("click", function() {
    //var gemValue = ($(this).attr(CrystalValue));
    currentSum += redCrystalValue;
    $("#count").text(currentSum);
    didYouWin();
})
// // Blue crystal
$("#crystalBlue").on("click", function() {
    //var gemValue = ($(this).attr("crystalValue"));
    currentSum += blueCrystalValue;
    $("#count").text(currentSum);
    didYouWin();
})
// Yellow crystal
$("#crystalYellow").on("click", function() {
    //var gemValue = ($(this).attr("crystalValue"));
    currentSum += yellowCrystalValue;
    $("#count").text(currentSum);
    didYouWin();
})
// Green crystal
$("#crystalGreen").on("click", function() {
    //var gemValue = ($(this).attr("crystalValue"));
    currentSum += greenCrystalValue;
    $("#count").text(currentSum);
    didYouWin();
})

// Check if game has been won or loss on every click.
function didYouWin () {
    // Reset random values on Win
    if (currentSum === targetNumber) {
        alert("You win!");
        wins++;
        $("#wins").text(wins);
        currentSum = 0;
        gameBegin();
    }
    // Reset random values on Loss
    if (currentSum >= targetNumber) {
        alert("You lose!");
        losses++;
        $("#losses").text(losses);
        currentSum = 0;
        gameBegin();
    }
}

})
