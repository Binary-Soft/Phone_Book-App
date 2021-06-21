import axios from 'axios'
import React,{Component} from 'react'

class Header extends Component {

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/Home/')
        .then(res=>res.json())
        .then(result=>{
            console.log(result)
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