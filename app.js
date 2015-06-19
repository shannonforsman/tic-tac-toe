var main = document.getElementById('main')
var squares = document.getElementsByClassName('section')
var counter = 0

var winning = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]]

var ticTacToe = {
  player: 'x'
}

var player1 = {player: 'X'}
var player2 = {player: 'O'}

function checkWinner (obj) {
  winning.forEach(function (el) {
    var counter1 = 0

    el.forEach(function (el) {
      if (obj.hasOwnProperty(el)) {
        counter1++
        console.log(counter)
        if (counter1 === 3) {
          alert(obj['player'] + ' wins!')
          boardReset()
        }
      }
    })
  })
}

function boardReset () {
  player1 = {player: 'X'}
  player2 = {player: 'O'}
  for (var i = 0; i < squares.length; i++) {
    squares[i].innerHTML = ''
    counter = 0
  }
}

main.addEventListener('click', function (e) {
  if (e.target.dataset.id) {
    if (ticTacToe.player === 'x' && e.target.innerHTML.length === 0) {
      counter ++
      player1[e.target.dataset.id] = ticTacToe.player
      e.target.innerHTML = ticTacToe.player
      ticTacToe.player = 'o'
      checkWinner(player1)
      if (counter === 9) {
        alert('draw!')
        boardReset()
      }

    } else if (ticTacToe.player === 'o' && e.target.innerHTML.length === 0) {
      counter++
      player2[e.target.dataset.id] = ticTacToe.player
      e.target.innerHTML = '<span>' + ticTacToe.player + '</span>'
      ticTacToe.player = 'x'
      checkWinner(player2)
      if (counter === 9) {
        alert('draw!')
        boardReset()
      }
    }

    console.log(counter)
  }

})

module.exports = {
  boardReset: boardReset,
  checkWinner: checkWinner
}
