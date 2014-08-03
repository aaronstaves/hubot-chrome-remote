# Hubot: hubot-chrome-remote

[![Build Status](https://travis-ci.org/aaronstaves/hubot-chrome-remote.svg?branch=master)](https://travis-ci.org/aaronstaves/hubot-chrome-remote)

A hubot script to allow hubot to remote control chrome

See [`src/chrome-remote.coffee`](src/chrome-remote.coffee) for full documentation.

## Installation

Add **hubot-chrome-remote** to your `package.json` file:

```json
"dependencies": {
  "hubot": ">= 2.5.1",
  "hubot-scripts": ">= 2.4.2",
  "hubot-chrome-remote": ">= 0.0.0",
  "hubot-hipchat": "~2.5.1-5",
}
```

Add **hubot-chrome-remote** to your `external-scripts.json`:

```json
["hubot-chrome-remote"]
```

Run `npm install hubot-chrome-remote`

## Sample Interaction

```
user> chrome abc123 
Hubot> chroming abc123
```
```
aaron> chrome me abc123
Hubot> chroming abc123
```
