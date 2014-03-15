$(function() {

  //### 'jquery' UI elements for game manipulation
  var game              = $('#game');
  var board             = $('#board');   
  var status_indicators = $('#teams li');   // status bar container

  var tiles = [];                         // all the "tiles"

  var players = [                         // player data
    {
      name:      'Ernie',
      marker:    'X',
      img_url:   'img/ernie.jpg',
      indicator: $(status_indicators[0])
    },
    {
      name:      'Bert',
      marker:    'O',
      img_url:   'img/bert.jpg',
      indicator: $(status_indicators[1])
    }
  ];

  var current_player;                     // player data
  var turns  = 0;                         // elapsed turns

  //### There are eight winning combos, the first two are supplied.
  //### What are the other six? Add 'em.
  var win_combos = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ];

  var initialize = function() {
    // ready the board for game play

    // create the play tiles
    for (var i=0; i < 9; i++) {
      var ele = $('<div/>', {id: "tile"+i, class: "tile"})
                .on('click', handle_click)
                .appendTo(board);
      tiles.push(ele);
    }

    // Make first player the current_player
    current_player = _.first(players);

    // Set up the players 'indicators' in UI
    _.each(players, function(player) {
      $('.team', player.indicator).html(player.marker);
      $('.player', player.indicator).html(player.name);
      $('img', player.indicator).attr('src', player.img_url);
      if (player === current_player) {
        player.indicator.addClass('current');
      }
    });
    
    // fade in the game
    game.fadeIn();
  };

  var handle_click = function(event) {
    if (event.currentTarget.innerHTML !== "") {
      alert('This tile has already been played on!');
    }
    else {
      event.currentTarget.innerHTML = current_player.marker;      
      toggle_player();
    }
  };

  var is_active = function(tile) {
    //### boolean - is tile active?
  };
  
  var activate_tile = function(tile) {
    //### activate tile
    //### don't forget to up 'turn' count
  };

  var toggle_player = function() {
    //### After each turn, toggle the current player and update player indicators
    current_player.indicator.toggleClass('current');

    if (current_player === _.first(players)) {
      current_player = _.last(players);
    }
    else {
      current_player = _.first(players);
    }
    current_player.indicator.toggleClass('current');
  };


  var is_win = function() {
    // ### whether or not the current player's positions result in a win
    // ### returns boolean
  };

  var is_tie = function() {
    //### has the game resulted in a tie?
    //### returns boolean
  };

  var handle_win = function() {
    //### update the UI to reflect that a win has occurred.
    //### - show results panel
    //### - display winner name and image
    //### - congrats message
    //### - show new_game button

  };

  var handle_tie = function() {
    //### update the UI to reflect that a tie game has occurred.
    //### - show results panel
    //### - display tie and rubber ducky image
    //### - show new_game button
  };

  var hide_indicators = function() {
    //### optional: call this to hide the "status" container after detecting a win or a tie
  };

  var show_combo = function(combo) {
    //### optional: call this to highlight the combination of tiles that resulted in a win
    //### e.g. colors winning XXX or OOO red.
  };

  var new_game = function() {
    // see http://stackoverflow.com/questions/2405117/difference-between-window-location-href-window-location-href-and-window-location
    // nothing to add here
    window.location.href = window.location.href;
  };

  // call initialize() to get the party started
  initialize();

});
