import React from "react";
import './details.css';
import moviesData from '/Users/karthikrao/Desktop/movies-app/src/common/Data/moviesData.js';
import Home from '/Users/karthikrao/Desktop/movies-app/src/screens/home/home.js';
import {Link} from "react-router-dom";

export default function Detail(props) {
    var pathz = window.location.pathname;
    var splitedPath = pathz.split(/detail/)[1].split("/");
    var reqPath = splitedPath[1];
    let filteredArray = [];
    filteredArray = moviesData.filter(movie => movie.id === reqPath);
    console.log(filteredArray);
    let filterUrl = filteredArray[0].trailer_url.split("?v=");
    let videoURL = "https://www.youtube.com/embed/"+filterUrl[1];
    
    return(
        <article>
        <Link to="/home">Back to Home</Link>
        <h1>{props.data}</h1>
        <div className="details-container">
           <div className="left">
           <img src={filteredArray[0].poster_url} alt="poster" /></div>
           <div className="middle">
           <h2>{filteredArray[0].title}</h2>
           <p><b>Genre: </b>{filteredArray[0].genres.join(", ")} </p>
           <p><b>Duration: </b>{filteredArray[0].duration} </p>
           <p><b>Release Date: </b>{(filteredArray[0].release_date)} </p>
           <p><b>Rating: </b>{filteredArray[0].critics_rating} </p>
           <p><b>Plot: </b><a target="blank" href={filteredArray[0].wiki_url}>Wiki Link</a> {filteredArray[0].storyline} </p>
           <p><b>Trailer:</b>
           </p>
           <iframe width="100%" height="415" src={videoURL} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           </div>
           <div className="right">
           <p><b>Rating: </b></p>
           <p>⭐️⭐️⭐️⭐️⭐️</p>
           <p><b>Artists:</b></p>
           <div className="details-page-actors">
            {filteredArray[0].artists.map((eachActor)=> {
              return <div className="details-page-actors-div" key={eachActor.id}>
              <img alt="img" src={eachActor.profile_url} />
              <h4 className="actor-name">{eachActor.first_name + " " + eachActor.last_name}</h4>
              </div>
            })}
           </div>
           </div>
        </div>
        </article>
    );

};