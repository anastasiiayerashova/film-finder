import { nanoid } from "nanoid";
import NewsCard from "../NewsCard/NewsCard";
import s from './NewsList.module.css'

export default function NewsList({ news }) {
    
    return (
        <ul className={s.list}>
             {news.map((article) => (
                article.urlToImage && (
                    <li key={nanoid()} className={s.item}>
                        <NewsCard {...article} />
                    </li>
                )
            ))}
        </ul>
    )
}
