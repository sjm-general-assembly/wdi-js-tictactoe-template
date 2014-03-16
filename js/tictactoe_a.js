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

  $scope.tileClick = function(tile) {
    tile.marker = $scope.currentPlayer.marker;
    $scope.turns++;
    $scope.togglePlayer();
  };

  $scope.isCurrentPlayer = function(player) {
    return (player === $scope.currentPlayer);
  };

  $scope.init = function() {
    $('#game').fadeIn();
  };

  $scope.init();
});
