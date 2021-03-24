import logo from './logo.svg';
import './App.css';
import { Button, Grid } from '@material-ui/core';
import React, {useEffect, useState} from "react";
import Navbar from './components/Navbar';
import { getMatches } from "./api/Api"; 
import MyCard from './components/MyCard'

const sampleJSON = {
  "object": {
    "name": "Pluralsight",
    "number": 1,
    "address": "India",
    "website": "https://www.pluralsight.com/"
  }
}

function App() {
   const [matches, setMatches] = useState([]) ;
   useEffect(() => {
       getMatches()
           .then((data) =>{
              setMatches(data.matches);
            console.log(data.matches);
            console.log(Object.keys(matches).length);   //311matches
            
          }
           )

            .catch((error) => alert("could not load data"));
      }, []  );

  return (
    <div className="App">
      <Navbar></Navbar>
      <MyCard></MyCard>
      <h1>welcome to my live score app</h1>

      <Grid container>
        <Grid sm="2"></Grid>
         <Grid sm="8">
           

       {/* {matches.slice(0, 5).map(match =>{
        
         <MyCard match={match}/>
       
       console.log(match['team-1']);
        }
       ) 
       } */}

        {matches.slice(0, 5).map((match) => 
        
        (
          <MyCard match= {match['team-1']}></MyCard>
        )
         
        )}

       </Grid>
       </Grid>
        
    </div>
  );
}

export default App;
