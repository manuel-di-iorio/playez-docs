---
sidebar_position: 2
---

Get the list of scores from the specified leaderboard. 

If a leaderboard is not specified, will get the scores from the the default leaderboard. Note that if the game has no leaderboards, an error will be returned.

This action does not require player authentication.

| Argument | Type | Description | Default value
| --- | --- | --- | --- |
| callback | function | Callback called on get event | 
| leaderboard | string | ID of the leaderboard to use | undefined |
| player | string | If specified, will get the rank of this playerId | undefined |
| offset | number | Pagination offset of the scores list | 0 |
| limit | number | Count of scores to get in this request, can be a value up to 100 | 10 |
| sort | number | Sort order of the list (-1 = desc, 1 = asc) | -1 |
| tags | string[] | Filter by an array of tags | undefined |
| continent | string | Filter by continent code | undefined
| country | string | Filter by country code | undefined

#### Response:

| Argument | Type | Description |
| --- | --- | --- |
| scores | Score[] | Array of scores | 
| playerRank | number | Rank of the specified player (when requested) |
| count | number | Total count of sent scores |

Score interface:

| Argument | Type | Description |
| --- | --- | --- |
| _id | string | Score ID | 
| playerId | string | Player ID |
| playerUsername | string | Player username |
| score | number | Score value | 
| data | string | Custom string associated to this score |
| group | string | Custom group key associated to this score |
| continent | string | Player's continent code |
| country | string | Player's country code |
| createdAt | string | Creation time of this score |
| updatedAt | string | Update time of this score (eg. when the player achieves a greater score) |

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
