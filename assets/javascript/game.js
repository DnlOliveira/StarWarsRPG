$(document).ready(function() {
	$("#choose").append("<h1>CHOOSE YOUR WARRIOR</H1>");
	$("#players").append("<img class='image' src='assets/images/luke2.jpg' height='200' width='200' value='luke'>");
	$("#players").append("<img class='image' src='assets/images/obiWan2.jpg' height='200' width='200' value='obiWan'>");
	$("#players").append("<img class='image' src='assets/images/DarthVader2.jpg' height='200' width='200' value='darthVader'>");
	$("#players").append("<img class='image' src='assets/images/DarthMaul2.jpg' height='200' width='200' value='darthMaul'>");

	function player(name, hp, attack, counter, stat){
		this.name = name;
		this.hp = hp;
		this.attackPower = attack;
		this.counterAttack = counter;
		this.status = stat;
	}

	var darthVader = new player("Darth Vader", 600, 40, 40, false);
	var darthMaul = new player("Darth Maul", 300, 40, 40, false);
	var lukeSkywalker = new player("Luke Skywalker", 400, 40, 40, false);
	var obiWan = new player("Obi Wan", 500, 40, 40, false);

	var wins = 0;
	var losses = 0;

	$("#messages").append("<p id='score'> Wins: " + wins +
		"<br>Losses: " + losses);

	currentGame = {
		kills: 0,
		warrior: "",
		myChoice: false,
		enemyChoice: false,

		luke: false,
		obi: false,
		vader: false,
		maul: false,

		char: "",
		hp: 0,
		attack: 0,
		counterAttack: 0,

		myChar: "",
		myHp: 0,
		myAttack: 0,

		enemyChar: "",
		enemyHp: 0,
		enemyCounterAttack: 0,

		setPlayers: function(choice){

			if (this.myChoice === true && this.enemyChoice === true){

			}
			else{
				if (choice === "luke"){
					this.char = lukeSkywalker.name;
					this.hp = lukeSkywalker.hp;
					this.attack = lukeSkywalker.attackPower;
					this.counterAttack = lukeSkywalker.counterAttack;
					$("#chosen-players").append("<img class='image' src='assets/images/luke2.jpg' height='200' width='200' value='luke'>");

					if (this.myChoice === false){
						this.warrior = "<img class='image' src='assets/images/luke2.jpg' height='200' width='200' value='luke'>";
					}

					this.luke = true;
					this.remainingPlayers();
				}
				else if(choice === "obiWan"){
					this.char = obiWan.name;
					this.hp = obiWan.hp;
					this.attack = obiWan.attackPower;
					this.counterAttack = obiWan.counterAttack;
					$("#chosen-players").append("<img class='image' src='assets/images/obiWan2.jpg' height='200' width='200' value='obiWan'>");

					if (this.myChoice === false){
						this.warrior = "<img class='image' src='assets/images/obiWan2.jpg' height='200' width='200' value='obiWan'>";
					}

					this.obi = true;
					this.remainingPlayers();
				}
				else if(choice === "darthVader"){
					this.char = darthVader.name;
					this.hp = darthVader.hp;
					this.attack = darthVader.attackPower;
					this.counterAttack = darthVader.counterAttack;
					$("#chosen-players").append("<img class='image' src='assets/images/DarthVader2.jpg' height='200' width='200' value='darthVader'>");

					if (this.myChoice === false){
						this.warrior = "<img class='image' src='assets/images/DarthVader2.jpg' height='200' width='200' value='darthVader'>";
					}

					this.vader = true;
					this.remainingPlayers();
				}
				else if (choice === "darthMaul"){
					this.char = darthMaul.name;
					this.hp = darthMaul.hp;
					this.attack = darthMaul.attackPower;
					this.counterAttack = darthMaul.counterAttack;
					$("#chosen-players").append("<img class='image' src='assets/images/DarthMaul2.jpg' height='200' width='200' value='darthMaul'>");

					if (this.myChoice === false){
						this.warrior = "<img class='image' src='assets/images/DarthMaul2.jpg' height='200' width='200' value='darthMaul'>";
					}

					this.maul = true;
					this.remainingPlayers();
				}

				if (this.myChoice === false){
				this.myChar = this.char;
				this.myHp = this.hp;
				this.myAttack = this.attack;

				this.myChoice = true;

				$("#choose").html("<h1>CHOOSE YOUR ENEMY</H1>");

				$("#messages").html("<p id='battle'>ME: " + "<br>" + this.myChar +
					"<br>HP: " + this.myHp + "<br>ATTACK POWER: " + this.myAttack + "</p>");
				$("#messages").append("<p id='score'> Wins: " + wins +
					"<br>Losses: " + losses);
				}
				else if (this.myChoice === true){
				this.enemyChar = this.char;
				this.enemyHp = this.hp;
				this.enemyCounterAttack = this.counterAttack;

				this.enemyChoice = true;

				$("#choose").html("<h1>FIGHT!</H1>");

				$("#messages").append("<br><p id='battle'>ENEMY: " + "<br>" + this.enemyChar +
					"<br>HP: " + this.enemyHp + "<br>ATTACK POWER: " + this.enemyCounterAttack + "</p>");

				console.log(this.enemyCounterAttack);
				}
			}
		},
		remainingPlayers: function(){
			$("#players").html("");

			if (this.luke === false){
				$("#players").append("<img class='image' src='assets/images/luke2.jpg' height='200' width='200' value='luke'>");
			}
			if (this.obi === false){
				$("#players").append("<img class='image' src='assets/images/obiWan2.jpg' height='200' width='200' value='obiWan'>");
			}
			if (this.vader === false){
				$("#players").append("<img class='image' src='assets/images/DarthVader2.jpg' height='200' width='200' value='darthVader'>");
			}
			if (this.maul === false){
				$("#players").append("<img class='image' src='assets/images/DarthMaul2.jpg' height='200' width='200' value='darthMaul'>");
			}

		},
		ActionAttack: function(){
			this.enemyHp = this.enemyHp - this.myAttack;

			this.myHp = this.myHp - this.enemyCounterAttack;

			this.myAttack = this.myAttack + 20;

			$("#messages").html("<p id='battle'>ME: " + "<br>" + this.myChar +
				"<br>HP: " + this.myHp + "<br>ATTACK POWER: " + this.myAttack + "</p>");
			$("#messages").append("<br><p id='battle'>ENEMY: " + "<br>" + this.enemyChar +
				"<br>HP: " + this.enemyHp + "<br>ATTACK POWER: " + this.enemyCounterAttack + "</p>");
			$("#messages").append("<p id='score'> Wins: " + wins +
					"<br>Losses: " + losses);

			if (this.enemyHp <= 0){
				$("#choose").html("<h1>CHOOSE NEXT ENEMY</H1>");
				this.enemyChoice = false;
				$("#chosen-players").html(this.warrior);
				this.kills++;

				if (this.kills === 3){
					$("#choose").html("<h1>YOU HAVE DEFEATED ALL ENEMIES</H1>");
					wins++;
					this.newGame();
					
				}
			}
			else if (this.myHp <= 0){
				losses++;
				$("#choose").html("<h1>GAME OVER - YOU LOST</H1>");
				this.newGame();
			}
		},

		newGame: function(){
			this.kills = 0;
			this.warrior = "";
			this.myChoice = false;
			this.enemyChoice = false;

			this.luke = false;
			this.obi = false;
			this.vader = false;
			this.maul = false;

			this.char = "";
			this.hp = 0;
			this.attack = 0;
			this.counterAttack = 0;

			this.myChar = "";
			this.myHp = 0;
			this.myAttack = 0;

			this.enemyChar = "";
			this.enemyHp = 0;
			this.enemyCounterAttack = 0;

			$("#messages").html("<p id='score'> Wins: " + wins +
				"<br>Losses: " + losses);

			$("#choose").append("<h1>CHOOSE YOUR WARRIOR</H1>");
			$("#players").append("<img class='image' src='assets/images/luke2.jpg' height='200' width='200' value='luke'>");
			$("#players").append("<img class='image' src='assets/images/obiWan2.jpg' height='200' width='200' value='obiWan'>");
			$("#players").append("<img class='image' src='assets/images/DarthVader2.jpg' height='200' width='200' value='darthVader'>");
			$("#players").append("<img class='image' src='assets/images/DarthMaul2.jpg' height='200' width='200' value='darthMaul'>");

			$("#chosen-players").empty();
		},
	}; //CurrentGame Object


//-------------------------------------------------------
	$(document).on("click", ".image", function() {
		var value = $(this).attr('value');

		currentGame.setPlayers(value);
	}); //on.click characters


	$("#button").on("click", function(){
		var value = $(this).attr('value');
		console.log(value);

		if (currentGame.myChoice === false){

		}
		else if (currentGame.enemyChoice === false){

		}
		else{
			currentGame.ActionAttack();
		}
	}); //on.click attack button

});



