import React from 'react'
import TitleBar from './title-bar.js'
import AddPlayer from './add-player.js'
import PlayerList from './player-list.js'

export default class App extends React.Component {
  render(){
    return (
      <div>
				<TitleBar title={this.props.title}/>
        <div className="wrapper">
          <PlayerList players={this.props.players}/>
  				<AddPlayer/>
        </div>
			</div>
    )
  }
}
