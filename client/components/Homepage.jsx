import React from 'react'
import { Menu, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {isAuthenticated} from 'authenticare/client'


class Homepage extends React.Component {
    constructor (props) {
        super(props)
    
        this.state = {
        }
      }
zz
render(){
        return(
            <>
                <h1>Homepage</h1>
                {isAuthenticated() &&
                <h2>Welcome {this.prop.user.name}</h2>
                }
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
      user: state.user
    }
}
  
export default connect(mapStateToProps)(Homepage)