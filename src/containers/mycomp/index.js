import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { incre } from '../../actions/index.js'

class mycomp extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
            <p>{this.props.count}</p>
            <button onClick={this.props.incre}>sdfsfdsdfsdf</button>
            </div>
        )
    }
}

const mapStateToProps = ({ mycomp }) => ({
    count:mycomp.count
})

const mapDispatchToProps = dispatch => bindActionCreators({
    incre
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(mycomp)