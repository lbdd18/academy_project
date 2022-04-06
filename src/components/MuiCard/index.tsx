import { CardItemRoot, CardItemContent, CardItemImage, CardItemActions, CardItemTitle, CardItemDescription, CardButton } from './styles'

interface ICardItemProps {
    cardItem: {
        title: string;
        description: string;
        image: string;
        status?: boolean;
    }
}

const MuiCard = ({ cardItem }: ICardItemProps) => {
    return (
        <CardItemRoot>
            <CardItemImage
                component="img"
                height="200"
                image={`data:image/png;base64,${cardItem.image}`}
            />
            <CardItemContent>
                <CardItemTitle gutterBottom variant="h5">
                    {cardItem.title}
                </CardItemTitle>
                <CardItemDescription variant="body2" color="text.secondary">
                    {cardItem.description}
                </CardItemDescription>
            </CardItemContent>
            <CardItemActions>
                    <CardButton size="small">Learn More</CardButton>
            </CardItemActions>
        </CardItemRoot>
    )
}

export default MuiCard