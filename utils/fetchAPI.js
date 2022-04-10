import {useState} from 'react';
import {API_NEWS_KEY} from "@env";
import axios from  'axios';

const baseUrl = `https://newsapi.org/v2/`;
  

{/* Fetch Top News  */}
export const fetchTopNews = async () => {
    const [loading, setLoading] = useState();
    const [error, setError] = useState(null);
    const [news, setNews] = useState([]);

    try {
        const response = await axios.get(`${baseUrl}top-headlines?country=us&apiKey=${API_NEWS_KEY}`);
        setNews(response.data.articles);
        setLoading(false);
    }
    catch (error) {
        setError(error);
        setLoading(false);
    }
};

{/* Fetch Economics  */}
export const fetchEconomics = async () => {
    const [loading, setLoading] = useState();
    const [error, setError] = useState(null);
    const [news, setNews] = useState([]);
    
    try {
        const response = await axios.get(`${baseUrl}top-headlines?country=us&category=business&apiKey=${API_NEWS_KEY}`);
        setNews(response.data.articles);
        setLoading(false);
    }
    catch (error) {
        setError(error);
        setLoading(false);
    }
};

{/* Fetch Entertainment  */}
export const fetchEntertainment = async () => {
    const [loading, setLoading] = useState();
    const [error, setError] = useState(null);
    const [news, setNews] = useState([]);

    try {
        const response = await axios.get(`${baseUrl}top-headlines?country=us&category=entertainment&apiKey=${API_NEWS_KEY}`);
        setNews(response.data.articles);
        setLoading(false);
    }
    catch (error) {
        setError(error);
        setLoading(false);
    }
}

{/*Fetch Sport */}
export const fetchSport = async () => {
    const [loading, setLoading] = useState();
    const [error, setError] = useState(null);
    const [news, setNews] = useState([]);

    try {
        const response = await axios.get(`${baseUrl}top-headlines?country=us&category=sports&apiKey=${API_NEWS_KEY}`);
        setNews(response.data.articles);
        setLoading(false);
    }
    catch (error) {
        setError(error);
        setLoading(false);
    }
}

{/*Search news from NewsAPI with search term   */}
export const fetchSearchNews = async (search) => {
    const [loading, setLoading] = useState();
    const [error, setError] = useState(null);
    const [news, setNews] = useState([]);

    try {
        const response = await axios.get(`${baseUrl}everything?q=${search}&apiKey=${API_NEWS_KEY}`);
        setNews(response.data.articles);
        setLoading(false);
    }
    catch (error) {
        setError(error);
        setLoading(false);
    }
}