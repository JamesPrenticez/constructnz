  
import React from 'react'
import { connect } from 'react-redux'

class SalesDoc extends React.Component {
    constructor(props) {
        super(props);
      }
    render() {
        return (
            <>
            <div className="salesDoc">

{/*---------- Cover Page ----------*/}
<div className="page" id="page">
    <div className="subpage">
        <SalesDocCoverpage {...this.props}/>
    </div>
</div>

{/*---------- Table of Contents ----------*/}
<div className="page" id="page">
    <div className="subpage">
        <SalesDocTOC {...this.props}/>
    </div>
</div>

{/*---------- Page 1 - Main Page ----------*/}
<div className="page" id="page">
    <div className="subpage">
        <SalesDocPage1 {...this.props}/>
    </div>
</div>

{/*---------- Page 2 - Preliminary & General ----------*/}
<div className="page" id="page">
    <div className="subpage">
        <SalesDocPage2 {...this.props}/>
    </div>
</div>

{/*---------- Page 3 - EXCAVTION ----------*/}
<div className="page" id="page">
    <div className="subpage">
        <SalesDocPage3 {...this.props}/>
    </div>
</div>


</div>
                </>
            )
        }
    }

    export default connect()(SalesDoc)
