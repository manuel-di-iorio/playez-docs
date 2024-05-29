---
sidebar_position: 1
---

Add a score to the specified leaderboard. 

If a leaderboard is not specified, will automatically add the score to the first leaderboard found. Note that if the game has no leaderboards, an error will be returned.

This action requires player authentication.

| Argument | Type | Description | Default value
| --- | --- | --- | --- |
| score | number | Score to add (eg. 5000) |
| callback | function | Callback called on send event | 
| leaderboard | string | ID of the leaderboard to use | undefined |
| tags | string[] | Array of tags for this score. You will be able to filter by these tags when retrieving the scores list | undefined |
| data | string | Custom string to associate to this score. This value will be retrieved in the scores list | undefined |

#### Response:

| Argument | Type | Description |
| --- | --- | --- |
| rank | number | Updated rank of the player |

#### Example:

```js
playez_add_score(48, function(_err, _rank) {
  if (_err) {
    return show_error("An error happened while sending the score");
  }

  show_debug_message($"Score has been sent. Player rank is: {_rank}");
});
```

Adding a score to a specific leaderboard:

```js
playez_add_score(2000, function(_err) {
  if (_err) {
    return show_error("An error happened while sending the score");
  }

  show_debug_message("Score has been sent");
}, "my specific leaderboard id");
```
