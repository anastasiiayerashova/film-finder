export default function LoadMoreBtn({setPage}) {
    return (
        <button type='submit' onClick={() => {
        setPage (prev => prev + 1)
      } }>Load more</button>
    )
}