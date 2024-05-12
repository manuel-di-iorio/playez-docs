---
sidebar_position: 1
---

Add a score to the specified leaderboard. If a leaderboard is not specified, will add the score to the first one found.

| Argument | Type | Description | Default value
| --- | --- | --- | --- |
| score | real | Score to add (eg. 5000) |
| callback | function | Callback called on send event | 
| leaderboard | string | ID of the leaderboard to use | undefined |
| data | string | Custom string to associate to this score. This value will be retrieved in the scores list | undefined |
| insert_mode | string | How to update the player score if already inserted. It can be 'less' or 'greater'. Eg. if you specify 'greater', the score will be updated only if it is greater than the current one | 'greater' |

#### Example:

```js
playez_add_score(48, function(_err) {
  if (_err) {
    return show_error("An error happened while sending the score");
  }

  show_debug_message("Score has been sent");
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
