import React from 'react'
import { connect } from 'react-redux'


class Homepage extends React.Component {
render(){
        return(
            <>
                <h1>Homepage</h1>
            </>
        )
    }
}

  
export default connect()(Homepage)