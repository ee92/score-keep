import React from 'react'
import {Players} from '../api/players.js'

export default class AddPlayer extends React.Component {
  handleSubmit(e) {
  	let playerName = e.target.playerName.value
  	e.preventDefault()

  	if (playerName){
  		e.target.playerName.value = ''
  		Players.insert({
  			name: playerName,
  			score: 0
  		})
  	}
  }
  render(){
    return (
      <div className="item">
        <form onSubmit={this.handleSubmit}>
          <input name='playerName' placeholder='player name'/>
          <button className="button">Add Player</button>
        </form>
      </div>
    )
  }
}