import React from 'react';
import HelloWorld from '../components/HelloWorld';
import { connect } from 'react-redux';
import * as Actions from '../actions';

class HelloWorldContainer extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = { value: '' };
    }

    _handleClick(event) {
        this.props.sayHello(this.state.value);
    }

    _handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <div>
                <HelloWorld onClick={this._handleClick.bind(this)} name={this.props.name} />
                <input type="text" placeholder={'enter name'} value={this.state.value} onChange={this._handleChange.bind(this)} />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        name: state.name
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        sayHello: (name) => dispatch(Actions.sayHello(name))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorldContainer);