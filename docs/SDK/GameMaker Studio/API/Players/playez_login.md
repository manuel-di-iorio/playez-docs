---
sidebar_position: 1
---

Login the player to Playez. If it is not registered, an account will be created. Once logged in, even if the player closes the game, it will be automatically logged-in on the next session, unless you call the [playez_logout()](playez_logout) function.

By default, only a username is required but a password argument is supported. In the future, we will integrate other login methods like Discord or Google.

| Argument | Type | Description | Default value
| --- | --- | --- | --- |
| username | string | Username of the player |
| callback | function | Callback called on login event | 
| password | string | Password of the player (optional) | undefined |

#### Example:

```js
playez_login("username", function(_err) {
  if (_err) {
    return show_error("An error happened while login");
  }

  show_debug_message("Player is logged in");
});
```

Before calling this function, check if the player is already logged in with:

```js
if (global.playez.player) {
  show_debug_message("Already logged in");
}
```
