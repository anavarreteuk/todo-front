import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name }
    )

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item
            name='manage users'
            active={activeItem === 'manage users'}
            onClick={this.handleItemClick}/>
          {/* <Menu.Item
            name='manage groups'
            active={activeItem === 'manage groups'}
            onClick={this.handleItemClick}
          /> */}
          {/* <Menu.Item
            name='manage task bundles'
            active={activeItem === 'add task bundles'}
            onClick={this.handleItemClick}
          /> */}
          <Menu.Menu position='right'>
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}