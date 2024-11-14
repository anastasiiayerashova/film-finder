import './App.css'
import fetchData from '../news-api';
import { useState, useEffect } from 'react';
import SearchBar from './SearchBar/SearchBar';
import NewsList from './NewsList/NewsList';
import NewsCard from './NewsCard/NewsCard';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import Loader from './Loader/Loader';
import { ImSad } from "react-icons/im";


export default function App() {
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [news, setNews] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const [results, setResults] = useState(0)

  useEffect(() => {
    const getData = async () => {
      if (query === '') return
      try {
        setIsLoading(true)
        setError(false)
        const { articles, totalResults } = await fetchData(query, page)
        setNews(prev => [...prev, ...articles])
        setResults(totalResults)
      }
      catch (error) {
        setError(true)
        console.log(error)
      }
      finally {
        setIsLoading(false)
      }
    }
getData ()
  }, [query, page])

  const handleChangeQuery = async (query) => {
    setNews([])
    setPage(1)
    setQuery(query)
  }

  return (
    <div className='mainWrapper'>  
    <SearchBar onSubmit={handleChangeQuery} />
      {isLoading && <Loader />}
      {error && <ErrorMessage/>}
      {query !== '' && news.length <= 0 && !isLoading && !error && (<p>Unfortunately, no results were found...<ImSad size={24} /></p>)}
      <NewsList news={news} />
      {news.length < results && <LoadMoreBtn setPage={setPage} />}
      </div>
  )
}


