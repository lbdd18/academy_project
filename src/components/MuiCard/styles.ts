import { styled } from '@mui/system';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface ICardItemRootProps {
  status?: string;
}

export const CardItemRoot = styled(Card)<ICardItemRootProps>`
  max-width: 345px;
  height: 500px;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.status === 'read' && 'red'};
`;

export const CardItemContent = styled(CardContent)`
`;

export const CardItemImage: any = styled(CardMedia)`
  
`;

export const CardItemActions = styled(CardActions)`
  display: flex;
  flex: 1;
  align-items: flex-end;
`;

export const CardButton = styled(Button)`
`;

export const CardItemTitle = styled(Typography)`
`;

export const CardItemDescription = styled(Typography)`
`;
