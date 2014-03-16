var tictactoeApp = angular.module('tictactoeApp', []);

tictactoeApp.controller('GameCtrl', function ($scope) {
  $scope.tiles = [
    {id: "tile0", name: "0", marker: ""},
    {id: "tile1", name: "1", marker: ""},
    {id: "tile2", name: "2", marker: ""},
    {id: "tile3", name: "3", marker: ""},
    {id: "tile4", name: "4", marker: ""},
    {id: "tile5", name: "5", marker: ""},
    {id: "tile6", name: "6", marker: ""},
    {id: "tile7", name: "7", marker: ""},
    {id: "tile8", name: "8", marker: ""}
  ];

  $scope.winCombos = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ];

  $scope.players = [            
    {
      name:      'Ernie',
      marker:    'X',
      img_url:   'img/ernie.jpg',
      tiles: []
    },
    {
      name:      'Bert',
      marker:    'O',
      img_url:   'img/bert.jpg',
      tiles: []
    }
  ];
  $scope.currentPlayer = $scope.players[0];  // initialize to first player
  
  $scope.turns = 0;

  $scope.togglePlayer = function() {
    $scope.currentPlayer = $scope.players[$scope.turns % $scope.players.length];
  };

  $scope.activateTile = function(tile) {    
    tile.marker = $scope.currentPlayer.marker;
    // store the number of the activated tile, in the current user tile list.
    // note, the unary '+' converts to int.
    $scope.currentPlayer.tiles.push(+tile.name);
    $scope.turns++;
  };

  $scope.isWin = function() {
    var result = false;
    _.each($scope.winCombos, function(winCombo) {
      if (_.intersection(winCombo, $scope.currentPlayer.tiles).length === winCombo.length) {
        result = true;
      }
    });
    return result;
  };

  $scope.handleWin = function() {
    alert($scope.currentPlayer.name + " wins!!");
    $scope.newGame();
  };

  $scope.isTie = function() {
    return (!$scope.isWin() && $scope.turns >= 9);
  };

  $scope.handleTie = function() {
    alert('Bummer. A tie. Try again.');
    $scope.newGame();
  };

  $scope.tileClick = function(tile) {
    if (tile.marker !== "") {
      alert("This tile has already been played!");
    }
    else {     
      $scope.activateTile(tile);
      if ($scope.isWin()) {
        $scope.handleWin();
        return true;
      }

      if ($scope.isTie()) {
        $scope.handleTie();
        return false;
      }

      $scope.togglePlayer();
    }
  };

  $scope.isCurrentPlayer = function(player) {
    return (player === $scope.currentPlayer);
  };

  $scope.newGame = function() {
    window.location.href = window.location.href;
  };

  $scope.init = function() {
    $('#game').fadeIn();
  };

  $scope.init();
});
