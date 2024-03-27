// connect sanity with frontend react application

import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client = createClient({
    projectId:process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset:'production',
    apiVersion:'2024-03-27', 
    useCdn:true,
    token: process.env.REACT_APP_SANITY_TOKEN,
});

// run sanity manage command in backend to run sanity management tool
// get the api key and project id from there


const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
