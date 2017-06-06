import React from 'react'
import {Players} from '../api/players.js'

export default class Player extends React.Component {
  render(){
    return (
			<div className="item" key={this.props.player._id}>
				<div className="player">
          <div>
            <h3 className="player__name">
              {this.props.player.name}
            </h3>
            <p className="player__stats">
              {this.props.player.score} points
            </p>
          </div>
          <div className="player_actions">
            <button className="button button--round" onClick={() => Players.update(this.props.player._id,{$inc: {score: 1}}
    				)}>+</button>
    				<button className="button button--round" onClick={() => Players.update(this.props.player._id,{$inc: {score: -1}}
    				)}>-</button>
    				<button className="button button--round" onClick={() => Players.remove(this.props.player._id)}>x</button>
          </div>
        </div>
			</div>
		)
  }
}
