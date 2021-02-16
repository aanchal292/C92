
	player1_name = localStorage.getItem("player1_name");
	player2_name = localStorage.getItem("player2_name");

	player1_score = 0;
	player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;

function send() {
	number1 = document.getElementById("number1").value;
	number2 = document.getElementById("number2").value;


	actual_answer1 = parseInt(number1) * parseInt(number2);
	console.log(actual_answer1);
    
	question_number1 = "<h4>" + number1 + " X "+ number2 +"</h4>";
    input_box1 = "<br>Answer : <input type='text' id='input_check_box1'>";
    row1 =  question_number1 + input_box1  ; 
    document.getElementById("output1").innerHTML = row1;
	document.getElementById("number1").value = "";
	document.getElementById("number2").value = "";




    actual_answer2 = parseInt(number1) + parseInt(number2);
	console.log(actual_answer2);

    question_number2 = "<h5>" + number1 + " + "+ number2 +"</h5>";
    input_box2 = "<br>Answer : <input type='text' id='input_check_box2'>";
    row2 =  question_number2 + input_box2 ; 
    document.getElementById("output2").innerHTML = row2;
	document.getElementById("number1").value = "";
	document.getElementById("number2").value = "";




	actual_answer3 = parseInt(number1) - parseInt(number2);
	console.log(actual_answer3);

    question_number3 = "<h5>" + number1 + " - "+ number2 +"</h5>";
    input_box3 = "<br>Answer : <input type='text' id='input_check_box3'>";
    row3 =  question_number3 + input_box3 ; 
    document.getElementById("output3").innerHTML = row3;
	document.getElementById("number1").value = "";
	document.getElementById("number2").value = "";





	actual_answer4 = parseInt(number1) / parseInt(number2);
	console.log(actual_answer4);

    question_number4 = "<h5>" + number1 + " / "+ number2 +"</h5>";
    input_box4 = "<br>Answer : <input type='text' id='input_check_box4'>";
    check_button4 = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row4 =  question_number4 + input_box4 + check_button4 ; 
    document.getElementById("output4").innerHTML = row4;
	document.getElementById("number1").value = "";
	document.getElementById("number2").value = "";
}


question_turn = "player1";
answer_turn = "player2";

function check()
{
	get_answer1 = document.getElementById("input_check_box1").value;
	if(get_answer1 == actual_answer1)	
	{
		if(answer_turn == "player1")
		{
			player1_score = player1_score +1;
		    document.getElementById("player1_score").innerHTML = player1_score;
		}
		else 
		{
			player2_score = player2_score +1;
		    document.getElementById("player2_score").innerHTML = player2_score;
		}
	}
	
    get_answer2 = document.getElementById("input_check_box2").value;
	if(get_answer2 == actual_answer2)	
	{
		if(answer_turn == "player1")
		{
			player1_score = player1_score +1;
		    document.getElementById("player1_score").innerHTML = player1_score;
		}
		else 
		{
			player2_score = player2_score +1;
		    document.getElementById("player2_score").innerHTML = player2_score;
		}
	}


	get_answer3 = document.getElementById("input_check_box3").value;
	if(get_answer3 == actual_answer3)	
	{
		if(answer_turn == "player1")
		{
			player1_score = player1_score +1;
		    document.getElementById("player1_score").innerHTML = player1_score;
		}
		else 
		{
			player2_score = player2_score +1;
		    document.getElementById("player2_score").innerHTML = player2_score;
		}
	}

	get_answer4 = document.getElementById("input_check_box4").value;
	if(get_answer4 == actual_answer4)	
	{
		if(answer_turn == "player1")
		{
			player1_score = player1_score +1;
		    document.getElementById("player1_score").innerHTML = player1_score;
		}
		else 
		{
			player2_score = player2_score +1;
		    document.getElementById("player2_score").innerHTML = player2_score;
		}
	}


	if(question_turn == "player1")
	{
		question_turn = "player2"
		document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name ;
	}
	else 
	{
		question_turn = "player1"
		document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
	}

	if(answer_turn == "player1")
	{
		answer_turn = "player2"
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;
	}
	else 
	{
		answer_turn = "player1"
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name ;
	}

    document.getElementById("output1").innerHTML = "";
	document.getElementById("output2").innerHTML = "";
	document.getElementById("output3").innerHTML = "";
	document.getElementById("output4").innerHTML = "";

}




