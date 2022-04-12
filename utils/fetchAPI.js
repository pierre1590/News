import {useState} from 'react';
import {API_NEWS_KEY} from "@env";
import axios from  'axios';

const baseUrl = `https://newsapi.org/v2/`;
  

{/* Fetch Top News  */}
export const fetchTopNews = async () => {
    const url = `${baseUrl}top-headlines?country=us&apiKey=${API_NEWS_KEY}`;
    const response = await axios.get(url);
    return response.data.articles;
};

{/* Fetch Economics  */}
export const fetchEconomics = async () => {
    const url = `${baseUrl}top-headlines?country=us&category=business&apiKey=${API_NEWS_KEY}`;
    const response = await axios.get(url);
    return response.data.articles;
};

{/* Fetch Entertainment  */}
export const fetchEntertainment = async () => {
    const url = `${baseUrl}top-headlines?country=us&category=entertainment&apiKey=${API_NEWS_KEY}`;
    const response = await axios.get(url);
    return response.data.articles;
}

{/*Fetch Sport */}
export const fetchSport = async () => {
    const url = `${baseUrl}top-headlines?country=us&category=sports&apiKey=${API_NEWS_KEY}`;
    const response = await axios.get(url);
    return response.data.articles;
}

{/*Search news from NewsAPI with search term   */}
export const fetchSearchNews = async (search) => {
    const url = `${baseUrl}everything?q=${search}&apiKey=${API_NEWS_KEY}`;
    const response = await axios.get(url);
    return response.data.articles;
   
}