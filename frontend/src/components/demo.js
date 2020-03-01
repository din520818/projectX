import React, {Component} from 'react'

class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: '',
            posts: ""
        }
        this.postData = this.postData.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.handleChange =this.handleChange.bind(this)
    }

    postData(val) {
        console.log("" + val)
        fetch('http://localhost:4000/firstPost', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                arg: val
            })
        })
    }

    handleChange(event) {
        this.setState({posts: event.target.value});
    }

    onSubmit(e) {
        console.log(this.state.posts)
        this.postData(this.state.posts)
        e.preventDefault()
    }

    componentDidMount(){
        fetch('http://localhost:4000/')
            .then(response => response.json())
            .then(data => this.setState({
                user: data.key
            }))
            .catch(err => console.log('failed' + err))
    }
    render() {
        return (
            <>
                <div>{this.state.user}</div>
                <form onSubmit={this.onSubmit}>
                    <label>
                      Name:
                      <input type="text" value={this.state.posts} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Submit" />
                  </form>
            </>
        )
    }
}


export default Demo