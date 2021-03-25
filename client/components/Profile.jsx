import React from 'react'
import { connect } from 'react-redux'
import { isAuthenticated } from 'authenticare/client'
import { Card, Button, Image, Header, Grid } from 'semantic-ui-react'

import { Link } from 'react-router-dom'

import { getUserById } from '../api/users'

class Profile extends React.Component {
  state = {
    profile: {}
  }

  componentDidMount () {
    getUserById(this.props.match.params.id)
    .then(profile => {
      if (profile !== null) {
        this.setState({
          profile
        })
      } else {
        this.props.history.push(`/404`)
      }
    })
  }

  render () {
    const { profile } = this.state
    
    return (
      <>
        <div style={{ height: '300px' }} className="ui right aligned grid">
          <div style={{ height: '300px' }} className="center aligned two column row">
            <div className="column">
              <Image style={{ width: '200px', float: 'right' }} src={`https://res.cloudinary.com/constructnz/image/upload/${profile.imageUrl}`} alt="Profile Photo" />
            </div>
            <div className="column left aligned row">
              <div className='row'>
                <div style={{ verticalAlign: 'middle' }}>
                  <h2 style={{ marginBottom: '0px' }}>{profile.firstName} {profile.lastName}</h2>
                  <em>{profile.username}</em><br />
                  <br />
                  <p>Email: {profile.email}</p>
                  <p>Phone Number: {profile.phoneNumber}</p>
                  <p>Location: {profile.location}</p>
                  {(isAuthenticated() && (this.props.user.id === profile.id)) &&
                    <Button id='edit-profile' as={Link} to={`/edit-profile/${profile.id}`} basic color='blue'>Edit Profile</Button>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>   
      </>
    )
  }
}

  // update/listing/:id
const mapStateToProps = state => {
  return {
    user: state.users
  }
}

export default connect(mapStateToProps)(Profile)