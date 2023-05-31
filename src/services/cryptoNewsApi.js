import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
  'X-RapidAPI-Key': '9e6a9d3774msh167639bcec94a0bp19fe6bjsn088b2f63a922',
      'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com'
};
const baseUrl='https://crypto-news16.p.rapidapi.com'
const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory }) => createRequest(`${newsCategory}`),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
            


















/*import React from 'react'

const cryptoNewsApi = () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '9e6a9d3774msh167639bcec94a0bp19fe6bjsn088b2f63a922',
      'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com'
    }
  };
  
  fetch('https://crypto-news16.p.rapidapi.com/news/top/5', options)
    .then(response => response.json())
    .then(response => {console.log(response)
      console.log(response?.[0]?.title)
      return response
      
      
    })
    .catch(err => console.error(err));
  
}

export default cryptoNewsApi

*/




