---
sidebar_position: 2
---

This function is merely used to automatically handle the flow of messages with the server and correctly dispatch the callbacks. It is a required function to use in the _Async - Networking_ event of a persistent object in order for everything to work.


#### Example:

```js
// In the "Async - Networking" event of a persistent object
playez_on_async();
```
