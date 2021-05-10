import axios from "axios";
import {getCurrentTime} from "./currentTime";


export function getGames(search='', setStateFunction){
  
  const API_KEY = '4cae90091dbc452f80b3afab4d638534';
  const BASE_URL = 'https://api.rawg.io/api/';
  const URL = BASE_URL + 'games' + '?search=' + search + '&key=' + API_KEY;
  console.log(getCurrentTime() + 'CALLING GAME LIST API ...');
  axios.get(URL)
    .then(res =>{
      console.log(getCurrentTime() + 'CALLING GAME LIST API: SUCCESS');
      const data = res.data.results.map(({background_image, genres, id, name, released}) => {
        
        if(released ==  null){
          released = 'date undefined';
        }
        
        if(!_isObjectDefined(genres[0])){
          genres[0] = {'name': 'genre undefined'};
        }
        return {
          'id': id.toString(),
          'title': name,
          'releaseDate': released,
          'imageUri': background_image,
          'genre': genres[0]
        };
      });
      // console.log('Printing game list');
      // console.log(data);
      setStateFunction(data);
    }).catch((error) =>{
    console.log(getCurrentTime() + 'CALLING GAME LIST API: FAIL');
    console.error(error);
    setStateFunction([]);
  });
}

export function getGameDetails(id, setStateFunction=''){
  
  const API_KEY = '4cae90091dbc452f80b3afab4d638534';
  const BASE_URL = 'https://api.rawg.io/api/';
  const URL = BASE_URL + 'games' + '/' + id + '?key=' + API_KEY;
  //console.log(getCurrentTime() + 'CALLING DETAILS API ...' + URL);
  axios.get(URL)
    .then(res =>{
      console.log(getCurrentTime() + 'CALLING DETAILS API: SUCCESS');
      const {background_image, rating_top, genres, description, id: id1, rating, name, released} = res.data;
      let details = {
        'imageUri': background_image,
        'id': id1.toString(),
        'title': name,
        'releaseDate': released,
        'genre': genres[0],
        'rating': rating + ' / ' + rating_top,
        'description': cleanHtmlText(description)
      };
      
      if(details.releaseDate == null){
        details.releaseDate = 'date undefined';
      }
      
      if(!_isObjectDefined(details.genre)){
        details.genre = {'name': 'genre undefined'};
      }
      
      if(details.rating === '0 / 0'){
        details.rating = 'unrated';
      }
      
      // console.log('Printing game details');
      // console.log(details);
      setStateFunction(details);
      
    }).catch((error) =>{
      console.log(getCurrentTime() + 'CALLING DETAILS API: FAIL');
      console.error(error);
      setStateFunction(null);
  });
}

const _isObjectDefined = (object) =>{
  return typeof object !== 'undefined';
}

const cleanHtmlText = (htmlText)=>{
  return htmlText.replace(/<\/?[^>]+(>|$)/g, '');
}
