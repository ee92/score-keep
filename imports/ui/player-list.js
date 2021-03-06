import React from 'react'
import Player from './player.js'
import FlipMove from 'react-flip-move'

export default class PlayerList extends React.Component {
  renderPlayers(){
    if (this.props.players.length === 0){
      return (
        <div className="item item__message">
          <p> Add some players! </p>
        </div>
      )
    } else{
      return this.props.players.map((player) => {
        return <Player key={player._id} player={player}/>
      })
    }
  }
  render(){
    return (
      <div>
        <FlipMove maintainContainerHeight={true}>
          {this.renderPlayers()}
        </FlipMove>
      </div>
    )
  }
}
