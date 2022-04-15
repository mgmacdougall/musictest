import 'dotenv/config';
import axios, { AxiosRequestConfig } from 'axios';

async function getSong(search:string) {

    type SongDetails = {
        tracks: {
            hits: [];
        };
        artists: {
            hits: [];
        };
    };

    try {
        const options: AxiosRequestConfig = {
            method: 'GET',
            url: 'https://shazam.p.rapidapi.com/search',
            params: { term: `${search}`, locale: 'en-US', offset: '0', limit: '5' },
            headers: {
                'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
                'X-RapidAPI-Key': `${process.env.APIKEY}`,
            },
        };

        const { data } = await axios.get<SongDetails>('https://shazam.p.rapidapi.com/search/', options);
        return data;
    } catch (error: unknown) {
        console.log("Error during search")
    }
}

// getSong();
export { getSong };
