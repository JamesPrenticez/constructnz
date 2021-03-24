import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Menu, Header, Image, Dropdown } from 'semantic-ui-react'
import { connect } from 'react-redux'

const fontStyle = {
  fontSize: '16px'
}

class Navbar extends React.Component {
  
  render() {
    return (
      <Menu borderless size='small' fixed='top' inverted color='blue' style={{padding: '0 10vw 0 10vw'}}>
          <Menu.Item style={{ padding: '10px' }} as={Link} to='/' header>
            <Image size='small' src={'/logo-white.png'} />
          </Menu.Item>
        <Menu.Menu style={fontStyle} position='right'>
              <Menu.Item as={Link} to='/login'>
                Login
              </Menu.Item>
              <Menu.Item as={Link} to='/register'>
                Sign Up
              </Menu.Item>
          </Menu.Menu>
      </Menu>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Navbar)