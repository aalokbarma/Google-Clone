import React from 'react';
import './SearchPage.css'
import { useStateValue } from './StateProvider';
import useGoogleSearch from './useGoogleSearch';
import Response from './response';
import { Link } from 'react-router-dom';
import Search from './Search';
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import Avatar from '@material-ui/core/Avatar'
import {  Description,Image, LocalOffer, Room, MoreVert } from '@material-ui/icons';






// https://developers.google.com/custom-search/v1/using_rest

// AIzaSyBaYptrb9Nr0M1rxkO0r0Cm2yx-h2u6M_Y

// https://cse.google.com/cse/create/new

const SearchPage = () => {


    const [{term = 'tesla'}, dispatch] = useStateValue();
    const {data} = useGoogleSearch(term);

    // Mock Api Call
    // const data = Response;

    // console.log(data)

    var marker = document.querySelector('#marker');
    var item = document.querySelectorAll('.searchPage__optionsLeft');

    function indicator(e){
        marker.style.left = e.offsetLeft + "px";
        marker.style.width = e.offsetWidth + "px";
    }

    item.forEach(link => {
        link.addEventListener('click',(e) =>{
            indicator(e.target);
        })
    })

    return (
        <div className = "searchPage">
            <div className = "searchPage__header">
                <div className = "header__total">

                    <div className = "header__up">

                        <div className= "searchPage__headerLeft">

                            <Link to = "/">
                                <img className = "searchPage__logo"
                                src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
                                alt= "Google" />
                            </Link>
                            <div className = "searchPage__headerBody">
                                <Search  hideButtons className = "searchBar" />
                                <div
                                className = "searchPage__options">
                                    <div id= "marker"></div>
                                    <div
                                    className = "searchPage__optionsLeft">
                                        <div className = "searchPage__option">
                                            <SearchIcon />
                                            <Link to = "/search">All</Link>
                                        </div>
                                        <div className = "searchPage__option">
                                            <Description />
                                            <Link to = "/news">News</Link>
                                        </div>
                                        <div className = "searchPage__option">
                                            <Image />
                                            <Link to = "/images">Images</Link>
                                        </div>
                                        <div className = "searchPage__option">
                                            <LocalOffer />
                                            <Link to = "/shopping">Shopping</Link>
                                        </div>
                                        <div className = "searchPage__option">
                                            <Room />
                                            <Link to = "/maps">Maps</Link>
                                        </div>
                                        <div className = "searchPage__option">
                                            <MoreVert />
                                            <Link to = "/more">More</Link>
                                        </div>
                                    </div>

                                    <div className = "searchPage__optionsRight">
                                        <div className = "searchPage__option">
                                            <Link to = "/settings">Settings</Link>
                                        </div>
                                        <div className = "searchPage__option">
                                            <Link to = "/tools">Tools</Link>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            
                        </div>
                        <div className = "searchPage__headerRight">
                            <div className= "home__headerRight">
                            
                                <AppsIcon className = "apps_icon"/>
                                <Avatar className = "avatar" />
                            </div>
                        </div>
                    </div>
                    
                    {/* <h1>{term}</h1> */}
                    <div className = "header__down">

                        
                    </div>
                </div>
            </div>

            

            {true && (

                <div className = "searchPage__results">
                <p className = "searchPage__resultCount">
                    About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term} 
                </p>

                {data?.items.map(item => (
                    <div className = "searchPage__result">
                        <a className = "searchPage__resultLink" href = {item.link} >
                            {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                                <img className = "searchPage__resultImage" src= {item.pagemap?.cse_image[0]?.src} />
                            )}
                            {item.displayLink}
                        </a>
                        <a className = "searchPage__resultTitle"
                        href = {item.link}>
                            <h2>{item.title}</h2>
                        </a>
                        <p className = "searchPage__resultSnippet">{item.snippet}</p>
                    </div>
                ))}

                </div>
            )}

            

            <div className = "searchPage__result">

            </div>
        </div>
        
    )

}



export default SearchPage
