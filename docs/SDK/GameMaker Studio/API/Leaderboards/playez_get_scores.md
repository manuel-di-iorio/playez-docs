---
sidebar_position: 2
---

Get the list of scores from the specified leaderboard. If a leaderboard is not specified, will get the scores from the first one found.

| Argument | Type | Description | Default value
| --- | --- | --- | --- |
| callback | function | Callback called on get event | 
| leaderboard | string | ID of the leaderboard to use | undefined |
| offset | int | Pagination offset of the list, usually you will only show the first 10 scores | 0 |
| limit | int | Count of scores to get in this request, can be a value up to 30 | 10 |

#### Example:

```js
playez_get_scores(function(_err, _scores) {
  if (_err) {
    return show_error("An error happened while getting the scores");
  }

  show_debug_message(_scores); // Array of scores of the leaderboard
});
```

Getting the second page of the scores list, assuming a limit of 5 scores per request:

```js
playez_get_scores(function(_err, _scores) {
  if (_err) {
    return show_error("An error happened while getting the scores");
  }

  show_debug_message(_scores);
}, "my leaderboard id", 5, 5);
```
