import axios from 'axios'
import React,{Component} from 'react'

class Header extends Component {

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/Home/')
        .then(function (response) {
            // handle success
            console.log(response);
          })
    }

    render(){
        return (
            <div className='text-center'>
                <img/>
                <h1>Project</h1>
            </div>
        )
    }
}

export default Header