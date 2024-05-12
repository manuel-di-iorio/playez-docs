---
sidebar_position: 1
slug: /
hide_title: true
title: Getting started
sidebar_label: Getting started
---

### What's Playez

With Playez, you will be able to integrate online services in your videogame like Leaderboards, Achievements, Cloud saves, Matchmaking and much more. To begin our journey, we started to implement the leaderboards service and the SDK for [GameMaker Studio](https://gamemaker.io).

Players will be connected with a persistent WebSocket connection in order to quickly send any request, in the future this will be useful also to get realtime events from the server like a Friend request or a Lobby invitation.

#### How Playez is made

Our servers are implemented with [Node.js](https://nodejs.org) using the most efficient tecnologies available like the [ws](https://www.npmjs.com/package/ws) library. We use [MongoDB](https://www.mongodb.com) as primary database, indexing as much as possible all queries, and [Redis](https://redis.io) to cache the responses in order to immediately retrieve your game data. We host our servers on [Fly.io](https://fly.io/) to be able to quickly scale and efficiently geodistribute the instances. To get the country location of a player for analytics purposes, we use [GeoJS](https://www.geojs.io).
