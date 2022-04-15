import axios, {AxiosRequestConfig } from 'axios';

async function getSong(){

 type SongDetails ={
    'tracks':{
        'hits':[]
    },
    'artists':{
        'hits':[]
    }
 } 

 type GetSongDetailsResponse=
 {
     data: SongDetails;
 }

 try{
     const options:AxiosRequestConfig = {
      'method': 'GET',
      'url': 'https://shazam.p.rapidapi.com/search',
      'params': {'term':'kiss the sky' , 'locale': 'en-US', 'offset': '0', 'limit': '5'},
      'headers': {
        'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
        'X-RapidAPI-Key': 'ef06e7a069msh025c9e3833f9827p193ea9jsna8c2a39ee783'
      }
    };

    const test = await axios.get<GetSongDetailsResponse>('https://shazam.p.rapidapi.com/search/', options)
    console.log(test)


 }catch(error:any){
    console.log(error)
 }
    

}

getSong();
// export default {getSong}



