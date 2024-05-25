---
sidebar_position: 1
---

Function to connect to the Playez API and send any requests.



| Argument | Type | Description | Default value
| --- | --- | --- | --- |
| gameId | string | ID of your game that you can see on the game page |
| privateToken | string | This token is used to improve the security of your game. You can see it below the game ID on the game page
| callback | function | Callback called on connection event | 

#### Example:

```js
playez_connect("your game id", "your game private token", function(_err) {
  if (_err) {
    return show_error("An error happened while connecting to the Playez API");
  }

  show_debug_message("Player is connected");
});
```

---

### Reconnections

In case of network issues, the player is automatically reconnected to the server, but you may want to display a banner while it is trying to reconnect:

```js
// In a draw event of a persistent controller object
if (global.playez.__ws.reconnecting) {
  draw_text(20, 20, "Reconnecting to the server..");
}
```
