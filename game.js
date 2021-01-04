/*
	遊戲JavaScript文件
*/


// var dice = Math.floor(Math.random() * 6 + 1);
// console.log(dice);

var currentPlayer = 1;
var player1TotalScore = 0;
var player2TotalScore = 0;
var counter = 1;

var isPlayingGame = true;

// DOM = Document Object Model

// 加上隨機骰子數
// document.querySelector('#player-1-current-score').textContent = dice;
// document.querySelector('#player-' + currentPlayer + '-current-score').textContent = dice;


// 改變HTML樣式並加上隨機骰子數字
// document.querySelector('#player-' + currentPlayer + '-current-score').innerHTML = '<h1>' + dice + '</h1>'


// 隱藏骰子
// document.querySelector('.dice').style.display = 'none';
document.querySelector('.dice').style = 'display : none';


// 隱藏獎杯
document.querySelector('.winner1').style = 'display : none';
document.querySelector('.winner2').style = 'display : none';


// Event監聽 (製作點按搖骰子時會出現的畫面)
document.querySelector('.roll').addEventListener('click' , function(){

//這邊使用Boolean結構
	if (isPlayingGame) {

		var dice = Math.floor(Math.random() * 6 + 1);
		console.log(dice);

		document.querySelector('.dice').style = 'display : block';
		document.querySelector('.dice').src = 'dice' + dice + '.png';


		if (currentPlayer === 1) {
			document.getElementById('player-' + currentPlayer + '-current-score').textContent = dice;

			player1TotalScore += dice;
			document.getElementById('player-' + currentPlayer + '-total-score').textContent = player1TotalScore;

			document.querySelector('.panel-' + currentPlayer).classList.remove('active')
			currentPlayer = 2;
			document.querySelector('.panel-' + currentPlayer).classList.add('active')
			document.getElementById('player-' + currentPlayer + '-current-score').textContent = '0';
		}

		else {
				document.getElementById('player-' + currentPlayer + '-current-score').textContent = dice;

				player2TotalScore += dice;
				document.getElementById('player-' + currentPlayer + '-total-score').textContent = player2TotalScore;

				document.querySelector('.panel-' + currentPlayer).classList.remove('active')
				currentPlayer = 1;
				document.querySelector('.panel-' + currentPlayer).classList.add('active')
				document.getElementById('player-' + currentPlayer + '-current-score').textContent = '0';
		}

		counter += 1;
		// console.log(counter);

		if (counter === 7) {
			if ( player1TotalScore > player2TotalScore ) {
				document.querySelector('.winner1').style = 'display : block';
				document.getElementById('player-1-current-score').style = 'margin-top : 0px';
				isPlayingGame = false;
			}
			else if ( player2TotalScore > player1TotalScore ) {
				document.querySelector('.winner2').style = 'display : block';
				document.getElementById('player-2-current-score').style = 'margin-top : 0px';
				isPlayingGame = false;
			}
			else {
				document.querySelector('.roll').textContent = '平 手';
				isPlayingGame = false;
			}
		}
	}

	else {

    restart();
		isPlayingGame = true;

	}

});



//重設遊戲的按鍵
document.querySelector('.newGame').addEventListener('click' , function(){
	restart();
	isPlayingGame = true;
});





//遊戲重置
function restart () {

	currentPlayer = 1;
	player1TotalScore = 0;
	player2TotalScore = 0;
	counter = 1;

	document.querySelector('.dice').style = 'display : none';
	document.querySelector('.winner1').style = 'display : none';
	document.querySelector('.winner2').style = 'display : none';

	document.getElementById('player-1-current-score').textContent = '0';
	document.getElementById('player-2-current-score').textContent = '0';
	document.getElementById('player-1-total-score').textContent = '0';
	document.getElementById('player-2-total-score').textContent = '0';

	document.querySelector('.panel-1').classList.add('active');
	document.querySelector('.panel-2').classList.remove('active');

	document.querySelector('.roll').textContent = '搖骰子';
	document.getElementById('player-1-current-score').style = 'margin-top : 55px';
	document.getElementById('player-2-current-score').style = 'margin-top : 55px';

}
