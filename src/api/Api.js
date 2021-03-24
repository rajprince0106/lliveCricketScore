const API_KEY = "49Zy2yQyOeRSa2L4NN00ohWm6mH2" ;

export const getMatches=()=> {

    // const url= 'https://cricapi.com/api/matches?apikey=${API_KEY}';
    const url= 'https://cricapi.com/api/matches/?apikey=49Zy2yQyOeRSa2L4NN00ohWm6mH2';

return fetch(url)
     .then((response) => response.json())
     .catch((error) => console.log("ERROR:", error));
};


 export const getMatchDetail = (id) => {
     const url = `https://cricapi.com/api/cricketScore?unique_id=${id}&apikey=${API_KEY}`;
     return fetch(url)
       .then((response) => response.json())
       .catch((error) => console.log(error));
   };