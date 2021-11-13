import React from 'react';
import '/Users/karthikrao/Desktop/movies-app/src/screens/home/home.css';
import StandardImageList from '/Users/karthikrao/Desktop/movies-app/src/screens/home/home-components/img-list.js';
import ReleasedImageList from '/Users/karthikrao/Desktop/movies-app/src/screens/home/home-components/released-movies.js';
import FilterCard from '/Users/karthikrao/Desktop/movies-app/src/screens/home/home-components/filters.js';
import moviesData from '/Users/karthikrao/Desktop/movies-app/src/common/Data/moviesData.js';

class Home extends React.Component {
    render() { 
        return <div className="home-container">
        <StandardImageList />
        <div className="flex-container">
         <div className="left">
           <ReleasedImageList />
         </div>
         <div className="filters">
           <FilterCard />
         </div>
        </div>
        </div>;
    }
}
 
export default Home;