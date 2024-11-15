import s from './NewsCard.module.css'

export default function NewsCard({ url, title, description, urlToImage, content, onImageClick }) {
    const truncateDescription = (text) => {
        if(!text) return ''
        return text.length > 147 ? `${text.slice(0, 147)}...` : text
    }
    const truncateTitle = (text) => {
        if (!text) return '';
        return text.length > 60 ? `${text.slice(0, 60)}...` : text
    }
    
    return (
        <div className={s.itemDiv}>
            <div>
                <img src={urlToImage} className={s.image} alt={title} onClick={() => {
                    onImageClick({link: urlToImage, text: content})
                }}></img>
            </div>
            <a href={url} target='_blank' rel="noopener noreferrer" className={s.title}>{truncateTitle(title)}</a>
            <p className={s.text}>{truncateDescription(description)}</p>
        </div>
    )
} 
