import React, {useState} from 'react';
import './Search.css';
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import {useStateValue} from './StateProvider'
import {actionType} from './reducer';


const Search = (hideButtons) => {
    const [{}, dispatch] = useStateValue("");

    const [input, setInput] = useState("");
    const history = useHistory();

    


    const search = e =>{
        e.preventDefault();
        console.log("You just Searched >>", input)

        dispatch({
            type: actionType.SET_SEARCH_TERM,
            term: input,
        })

        history.push('./search');
        setInput(input);
    }

    return (
        <form className= "search">
            <div className ="search__input">
                <SearchIcon className = "search__inputIcon" />
                <input value = {input} onChange = {e => setInput(e.target.value)} />
                <MicIcon />
            </div>

            {!hideButtons ? 
                (<div className = "search__buttons1">
                    <Button type= 'submit' onClick ={search} >Google Search</Button>
                    <Button >I'm Feeling Lucky</Button>
                </div>)
            : 
                (<div className = "search__buttons1">
                    <Button className = "search__buttonsHidden" type= 'submit' onClick ={search} >Google Search</Button>
                    <Button className = "search__buttonsHidden" >I'm Feeling Lucky</Button>
                </div>)
                
            }

            
        </form>
    )
}

export default Search


// (<div className = "search__buttonsHidden">
//                     <button className = "search__buttonsHidden" type= 'submit' onClick ={search} >Google Search</button>
//                     <button className = "search__buttonsHidden" >I'm Feeling Lucky</button>
//                 </div>)