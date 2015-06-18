var main = document.getElementById('main')
var test = document.getElementById('test')



var winning = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]]


var ticTacToe = {
  player: 'x'
}

var player1 = {}
var player2 = {}
var arr1 = []
var arr2 = []


function checkWinner(){
  winning.forEach(function(el){
    var counter = 0;
    el.forEach(function(el){

      if (player1.hasOwnProperty(el)) {
        counter++
        if (counter === 3) {
          alert('you win!')
        }
      }
    })

  })
}

main.addEventListener('click', function(e){
  if (e.target.dataset.id) {
    if(ticTacToe.player === 'x' && e.target.innerHTML.length === 0) {
      player1[e.target.dataset.id] = ticTacToe.player
      e.target.innerHTML = ticTacToe.player
      ticTacToe.player = 'o'

  } else if (ticTacToe.player ==='o' && e.target.innerHTML.length === 0) {
    player2[e.target.dataset.id] = ticTacToe.player
    e.target.innerHTML = ticTacToe.player
    ticTacToe.player = 'x'
  }

  }
  console.log(player1)
  console.log(player2)

})
