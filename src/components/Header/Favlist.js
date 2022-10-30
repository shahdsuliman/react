import styled from 'styled-components';
import { Box } from '@mui/system';

const Favdiv = styled.div`
{
    box-shadow: 3px 5px 5px 3px  rgba(0, 0, 0, 0.2);
    height: 800px;
}
`
export const Favlist = ({ }) => {
    return (
        <Favdiv>
            <Box sx={{ pl: 3, pt: 0.2 }}><h2>Favourites</h2></Box>

        </Favdiv>

    );
}