import React, { Component } from 'react'
import autoBind from 'react-autobind'
import { withRouter } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actionCreators'

class FrontPage extends Component {
    constructor() {
        super()
        this.state = {
            loading: []
        }
        autoBind(this)
    }
    handleClick() {
        const { app, loggIn } = this.props
        loggIn(!app.logged_in)
    }
    render() {
        const { app } = this.props
        return (
            <div>
                <h1>Frontpage</h1>
                {!app.logged_in
                    ? <button onClick={this.handleClick}>Logg inn</button>
                    : <button onClick={this.handleClick}>Logg ut</button>}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        app: state.app
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FrontPage))
