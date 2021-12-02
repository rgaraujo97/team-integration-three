import React from 'react'
import { connect } from 'react-redux'
import IconButton from '../template/IconButton'

import { bindActionCreators } from 'redux'

const UserExample = props => {
    
    }
    return (
       <div></div>
    )
}


//const mapStateToProps = state =>({: state.user.})
const mapDispatchtoProps = dispatch =>bindActionCreators({Remove, markAsDone, markAsPending}, dispatch);

export default connect (//mapStateToProps,
    mapDispatchtoProps)()