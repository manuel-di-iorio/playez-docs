---
sidebar_position: 1
slug: /
hide_title: true
title: Introduction
sidebar_label: Introduction
---

### Introduction

With Playez, you will be able to integrate online services in your videogame like Leaderboards, Achievements, Cloud saves, Matchmaking and much more. To begin our journey, we started to implement the leaderboards service and the SDK for [GameMaker Studio](https://gamemaker.io).

Players will be connected with a persistent WebSocket connection in order to quickly send any request, in the future this will be useful also to get realtime events from the server like a Friend request or a Lobby invitation.

#### How Playez is made

<img src={require("/static/img/server_architecture.png").default} style={{ width: 500, height: "100%" }} />

Our servers are implemented with [Node.js](https://nodejs.org) using the most efficient tecnologies available like the [ws](https://www.npmjs.com/package/ws) library. We use [MongoDB](https://www.mongodb.com) as primary database, indexing as much as possible all queries. We host our servers on [Fly.io](https://fly.io/) and [Vercel](https://vercel.com/) to be able to quickly scale and efficiently geodistribute the instances. To get the country location of a player for analytics purposes, we use [GeoJS](https://www.geojs.io). Furthemore, [Redis](https://redis.io) will be introduced in the future to cache the API responses.

#### Security

We value your data security as a priority, that is why we enforced Websocket over HTTPS (WSS) for API communication and why we implemented an automatic signing verification for all of the requests coming from your game. Your game will sign the request payload by using a combination of the private token and other temporary encoded data and we'll do the same on the server to verify that your game actually sent this data. The private token is never transmitted over the internet. Also, a part from the sign, all authenticated services requires the auth token of the player.

Sure, hackers may still be able to manipulate your game by decompiling it or by using memory attacks with tools like _Cheat Engine_, that is why we also encourage you to make this process harder by compiling the games to machine code (eg. in _GameMaker Studio_, by using the YYC output) and by integrating anti-cheat solutions to make it more difficult to tamper the process memory.

It will never be possible to prevent someone really determined from sending a fake score for example, but at least we can make it harder to do so and act to ban the player (you can do it from the dashboard).
