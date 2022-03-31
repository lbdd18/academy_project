import { useEffect, useState } from "react"
import { api } from "../services/api";
import NewsItem from "./NewsItem"

interface News {
    id: string;
    title: string;
    description: string;
    status: boolean;
}

const NewsList = () => {
    const [title, setTitle] = useState('');
    const [newsList, setNewsList] = useState<News[]>([]);

    useEffect(()=>{
        api.get("news?PageSize=5")
        .then(({ data }) => {
            setNewsList(data);
        })
    }, [])

    return (
        <div>
            <h1>List Sharepoint news</h1>
            <ul>
                {
                    newsList.map((newsItem) =>{
                        return (
                            <NewsItem key={newsItem.id} news={newsItem}/>
                        )
                    })
                }
            </ul>
            <span>Search Title:</span>
            <input type="text" value={title} onChange={(e)=> {setTitle(e.target.value)}} />
        </div>
    )
}

export default NewsList