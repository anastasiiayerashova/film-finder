import s from './NewsCard.module.css'

export default function NewsCard({ url, title, description, urlToImage }) {
    const truncateDescription = (text) => {
        if(!text) return ''
        return text.length > 147 ? `${text.slice(0, 147)}...` : text
    }
    
    return (
        <div className={s.itemDiv}>
            <div>
                <img src={urlToImage} className={s.image} alt={title}></img>
            </div>
            <a href={url} target='_blank' rel="noopener noreferrer">{title}</a>
            <p className={s.text}>{truncateDescription(description)}</p>
        </div>
    )
} 
