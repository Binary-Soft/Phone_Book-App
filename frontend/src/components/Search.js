import '../App.css'
import {SearchContext} from '../SearchContext'
import {useContext} from 'react'
const Search =()=>
{
   let {data, setData} = useContext(SearchContext)
    const handleChange=(e)=>{
        data = e.target.value
        // console.log(data)
        setData(data)
    }
    return(
        <div className="search_input">
        <input type="text" className="form-control" placeholder="Search" aria-label="Search" 
        onChange={(e)=>{handleChange(e)}}/>
        
    </div>
    )
}

export default Search