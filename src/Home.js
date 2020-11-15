import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import Avatar from '@material-ui/core/Avatar'
import Search from './Search';
import { Button } from '@material-ui/core';



const Home = () => {
    return (
        <div className = "home">
            {/* <h1>This is Home Page</h1> */}

            <div className= "home__header">
                <div className= "home__headerLeft">
                    <Link to = '/about'>About</Link>
                    <Link to = '/store'>Store</Link>
                </div>
                <div className= "home__headerRight">
                    <Link to = '/gmail'>Gmail</Link>
                    <Link to = '/images'>Images</Link>
                    <AppsIcon />
                    <Avatar className = "avatar" />
                </div>
                

                

            </div>

            <div className = "home__body">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
                        alt= "Google"
                    />
                <div className = "home__inputContainer">
                <Search  />
                <div className = "search__buttons">
                    <button type= 'submit'  >Google Search</button>
                    <button >I'm Feeling Lucky</button>
                </div>
            </div>
            </div>
            
            
        </div>
    )
}

export default Home
