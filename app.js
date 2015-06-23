var main = document.getElementById('main')
var squares = document.getElementsByClassName('section')

var winning = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]]

var Game = function () {
  this.obj = {}
  this.player = 'X'
  this.counter = 0
}

var game = new Game()

function clearBoard () {
  for (var i = 0; i < squares.length; i++) {
    squares[i].innerHTML = ''
  }
  game = new Game()
}

Game.prototype.move = function (e) {
  var player = game.player

  if (e.target.dataset.id && e.target.innerHTML === '') {
    game.counter++
    if (player === 'O') e.target.style.color = '#00A7C5'
    if (player === 'X') e.target.style.color = '#C4C815'
    game.obj[e.target.dataset.id] = player
    e.target.innerHTML = player
    checkWinner(player)
    game.player = player === 'O' ? 'X' : 'O'
  }
}

main.addEventListener('click', game.move)

function checkWinner (player) {
  winning.forEach(function (el) {
    if (game.obj[el[0]] === player && game.obj[el[1]] === player && game.obj[el[2]] === player) {
      this.alert(player + ' wins!')
      clearBoard()
    } else if (game.counter === 9) {
      this.alert('a draw!')
      clearBoard()
    }
  })
}
