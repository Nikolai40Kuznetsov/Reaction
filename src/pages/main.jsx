import { HashRouter } from "react-router-dom"
import { movies } from "../storage/movie_data"
import {
    Route,
    Routes,
    NavLink
  } from 'react-router-dom'
import Card from "./card"


function Main(){
    
    return(
        <>
            {movies.map((item)=>{
                return(<>
                            <NavLink to={'/'+ item.title}>
                                <img  src={item.img}/>
                                <h2>{item.title}</h2>
                            </NavLink>
                            </>
                        )})} 
        </>          
    )

}

export default Main



