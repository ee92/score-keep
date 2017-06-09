import React from 'react'
import ReactDOM from 'react-dom'
import {Meteor} from 'meteor/meteor'
import {Tracker} from 'meteor/tracker'
import {Players, positions} from '../imports/api/players.js'
import App from '../imports/ui/app.js'

Meteor.startup(() => {
	Tracker.autorun(() => {
		let players = Players.find({},{sort: {"score":-1}}).fetch()
		let positioned = positions(players)
		ReactDOM.render(<App title="Score Keeper" players={positioned}/>,document.getElementById('app'))
	})
})
