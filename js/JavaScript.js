//Questoin 1
$("#Question1").click(function () {
    //Step 1: Get the user input
    var num1 = Number($("#num1").val());
    var num2 = Number($("#num2").val());
    var num3 = Number($("#num3").val());
    var num4 = Number($("#num4").val());
    var num5 = Number($("#num5").val());

    //Step 2: Do something with it
    var output1 = Math.min(num1, num2, num3, num4, num5);

    $("#p1").text("The lowest number is: " + output1);

    var output2 = Math.max(num1, num2, num3, num4, num5);

    $("#p2").text("The highest number is: " + output2);

    var output3 = ((num1 + num2 + num3 + num4 + num5) / 5);

    $("#p3").text("The mean of these numbers is: " + output3);

    var output4 = (num1 + num2 + num3 + num4 + num5);

    $("#p4").text("The sum of these numbers is: " + output4);

    var output5 = (num1 * num2 * num3 * num4 * num5);

    $("#p5").text("The product of these numbers is: " + output5);
});

//Question 2 
function GetFactorial() {
    var value = $("#getthefactorialofthis").val();
    tempvalue = 1;

    if (value == "") {
        $("#showresulthere").html("You didn't enter anything!");
    }
    else {
        for (i = value; i > 0; i--) {
            tempvalue *= i;
            // this is same as the   tempvalue =  tempvalue * i ;
        }
        $("#showresulthere").html("Factorial of " + value + " is : " + tempvalue);
    }
}

//Question 3
$("#Ex3").click(function () {
    //User Input
    var fizzbuzz1 = Number($("#fizzbuzz1").val());
    var fizzbuzz2 = Number($("#fizzbuzz2").val());

    //Do something
    var output = "";
    var x = false;  var y = false;
    for (var loop = 1; loop <= 100; loop++) {
        //Go through loop and find modulus = 0
        x = loop % fizzbuzz1 == 0
        y = loop % fizzbuzz2 == 0
        //if/else statement
        if (x && y) {
            output += "FizzBuzz";
        }
        else if (y) {
            output += "Buzz";
        }
        else if (x) {
            output += "Fizz";
        }
        else {
            output += loop;
        }
            output += "\n";

    }
    //Output
    $("#fizzybubbly").text(output);
});

//Question 4
$("#btnpalindrome").click(function () {
    //Step 1: Get the user input
    var inputtedWord = $("#inputtedWord").val();

    //Step 2: Do something with it
    var backwardsInputtedWord = inputtedWord.split("").reverse().join("");

    //Step 3: Output a result
    if (inputtedWord == "") {
        $("#answergoeshere").text("You didn't write anything!");
    }
    else {
        if (inputtedWord == backwardsInputtedWord) {
            $("#answergoeshere").text(inputtedWord + " IS a palindrome!");
        }
        else {
            $("#answergoeshere").text(inputtedWord + " is NOT a palindrome.");
        }
    }
    
});

$("#showcode").click(function() {
    $("#codewindow").toggle();
});

$("#showcode1").click(function () {
    $("#codewindow1").toggle();
});

$("#showcode2").click(function () {
    $("#codewindow2").toggle();
});

$("#showcode3").click(function () {
    $("#codewindow3").toggle();
});

$("#showcode4").click(function () {
    $("#codewindow4").toggle();
});

$(".showcodes").click(function () {
    $(".codewindow").toggle();
});


$(".posnumeric").numeric({
    allowMinus: false
});

$("#fizzbuzz1").alphanum();
$("#fizzbuzz2").alphanum();

$("#DownloadExercises").click(function () {
    // // hope the server sets Content-Disposition: attachment!
    window.location = 'Content/Phoenix_CSharpProblems.exe';
});

SyntaxHighlighter.all();
