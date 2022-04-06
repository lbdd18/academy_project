import { useEffect, useState } from "react"
import MuiCard from "../../../components/MuiCard";
import { api } from "../../../services/api";

import { Content, Title } from './styles'

interface News {
    id: string;
    title: string;
    image: string;
    description: string;
    status: boolean;
}

const NewsList = () => {
    const [title, setTitle] = useState('');
    const [newsList, setNewsList] = useState<News[]>([]);

    useEffect(() => {
        api.get("news?PageSize=5")
            .then(({ data }) => {
                setNewsList(data);
            })
    }, [])

    return (
        <>
            <Title variant='h5'>List Sharepoint news</Title>
            <Content>
                {
                    newsList.map((newsItem) => {
                        return (
                            <MuiCard key={newsItem.id} cardItem={newsItem} />
                        )
                    })
                }
            </Content>
        </>
    )
}

export default NewsList