import './App.css'
import fetchData from '../news-api';
import { useState, useEffect } from 'react';
import SearchBar from './SearchBar/SearchBar';
import NewsList from './NewsList/NewsList';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import Loader from './Loader/Loader';
import NewsModal from './NewsModal/NewsModal';
import { ImSad } from "react-icons/im";


export default function App() {
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [news, setNews] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const [results, setResults] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

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

  const handleChangeQuery = async (newQuery) => {
    if (newQuery===query) return
    setNews([])
    setPage(1)
    setQuery(newQuery)
  }

    const openModal = (imageUrl) => {
    setSelectedImage(imageUrl)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedImage(null)
  }

  return (
    <div className='mainWrapper'>  
    <SearchBar onSubmit={handleChangeQuery} />
      {isLoading && <Loader />}
      {error && <ErrorMessage/>}
      {query !== '' && news.length <= 0 && !isLoading && !error && (<p>Unfortunately, no results were found...<ImSad size={24} /></p>)}
      <NewsList news={news} onImageClick={openModal} />
      {news.length < results && <LoadMoreBtn setPage={setPage} />}
      <NewsModal isOpen={isModalOpen} onRequestClose={closeModal} image={selectedImage} />
      </div>
  )
}