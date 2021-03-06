import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Menu, Header, Image, Dropdown } from 'semantic-ui-react'
import { connect } from 'react-redux'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import { isAuthenticated, logOff } from 'authenticare/client'
const MySwal = withReactContent(Swal)

const fontStyle = {
  fontSize: '16px'
}

class Navbar extends React.Component {
  render() {
    console.log(this.props)
    const profile = (
      <Menu.Item>
          <Image avatar alt='profile image' src={ this.props.user.imageUrl ? `https://res.cloudinary.com/constructnz/image/upload/${this.props.user.imageUrl}` : '' } />
          {this.props.user.firstName}
      </Menu.Item>
    )
    return (
      <Menu borderless size='small' fixed='top' inverted color='deepgreen' style={{padding: '0 10vw 0 10vw'}}>
          <Menu.Item style={{ padding: '10px' }} as={Link} to='/' header>
            <Image size='small' src={'img/logo.png'} />
          </Menu.Item>
        <Menu.Menu style={fontStyle} position='right'>
          {(isAuthenticated() && (this.props.user.username !== undefined))
            ? <>
              <Menu.Item as={Link} to='/new-listing'>
                Create a Listing
              </Menu.Item>

              <Menu.Item as={Link} to="/job_list">
                Job List
              </Menu.Item>

              <Dropdown simple trigger={profile} icon={null} style={{ minWidth: '10vw' }}>
                <Dropdown.Menu style={{ width: '100%' }}>
                  <Dropdown.Item style={{ paddingLeft: '10px' }} as={Link} to={`/profile/${this.props.user.id}`}>
                    Profile
                  </Dropdown.Item>
                  <Dropdown.Item style={{ margin: '0' }}
                    onClick={() => Swal.fire({
                    title: 'Are you sure?',
                    text: 'Are you sure you want to log out?',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Log out',
                    cancelButtonText: 'No, stay'
                }).then((result) => {
                  if (result.value) {
                    logOff()
                    this.props.history.push('/')
                    Swal.fire({
                      title: 'Logged out!',
                      text: 'You have been successfully logged out',
                      icon: 'success'
                    })
                  }
                })}
                  >
                    Log Off
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </>
            : <>
              <Menu.Item as={Link} to='/login'>
                Login
              </Menu.Item>
              
              <Menu.Item as={Link} to='/register'>
                Sign Up
              </Menu.Item>
            </>

          }
          </Menu.Menu>
      </Menu>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.users
  }
}

export default connect(mapStateToProps)(Navbar)