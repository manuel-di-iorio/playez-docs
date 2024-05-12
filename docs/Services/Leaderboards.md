---
sidebar_position: 1
---

Let's say you want that your players compete with an online leaderboard to get the best scores. This is the basic flow using the GameMaker Studio SDK:

1) You create the game on the Playez dashboard and copy the **game ID** and it **secret token**.

<img src="../img/en_example_create_game.png" style={{ width: 600, height: "100%" }} />

<img src="../img/en_example_view_game.png" style={{ width: 600, height: "100%" }} />

2) In your game, you'll first want to connect the player to the Websocket API:
```js
// Create event of a persistent controller object
playez_connect("<gameID>", "<secretToken>", function() {
  // Player is connected, let's go to the next room
  room_goto_next(); 
});

// Async - Networking event
playez_on_async();
```

3) Ask the player to login by entering a username, this part is up to you, but this is the function to login:
```js
playez_login("<username>", function() {
  room_goto(rm_game); // Go to the game room once the player has been logged in
});
```

4) When the match is finished, you may want to send the player score:
```js
playez_add_score(1000, function() {
  room_goto(rm_scores); // Go the scores list room once the score has been added  
});
```

5) Get the scores list in the scores room and draw it:
```js
// Create event of obj_scores
scores = [];
playez_get_scores(function(err, scores) {
  obj_scores.scores = scores;
});

// Draw the scores array in the draw event of obj_scores
for (var i=0; i<array_length(scores); i++) {
  var score = scores[i];
  draw_text(20, 120 + i*20, $"{i+1}) {score.player.username}: {score.score}");
}
```
