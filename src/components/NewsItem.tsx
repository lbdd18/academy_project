interface NewsItemProps {
    news: {
        title: string;
        description: string;
        status: boolean;
    }
}

const NewsItem = ({ news }: NewsItemProps) => {
    return (
        <li>
            <strong>{news.title}</strong>
            <p>{news.description}</p>
            <p>{news.status ? 'Readed' : 'Unread'}</p>
        </li>
    )
}

export default NewsItem