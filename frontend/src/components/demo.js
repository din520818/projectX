import React, {Component} from 'react'

class Demo extends Component {
    state = {
        key: null
    }
    componentDidMount(){
        fetch('http://localhost:4000/')
            .then(response => res.json())
            .then(data => this.setState({
                key: data.key
            }))
            .catch(err => console.log('failed'+ err))
    }
    render() {
        return (
            <div>{this.state.key}</div>
        )
    }
}


export default Demo