import styled from 'styled-components';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import DarkModeIcon from '@mui/icons-material/DarkMode';
const Text = styled.h1`
{
    font-size: 23px;
}
`
const Headeritem = styled.div`
 {
 
    whidth:100%;
    justify-content: space-between;
    box-shadow: 0 5px 5px  rgba(0, 0, 0, 0.2);
}
`
const Item = styled.div`
{ 
    height: 50px;
}
`
export const Header = ({ }) => {
    return (
        <Headeritem >
            <Container>
                <Grid container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center">
                    <Grid item xs={3} md={9}>
                        <Item>
                            <Text >Where in the world?</Text>
                        </Item>
                    </Grid>
                    <Grid item xs={1} md={2}>
                        <Item sx={{ ml: 7 }}>
                            <Button variant="default"
                                startIcon={<DarkModeIcon />}>
                                Dark Mode
                            </Button>
                        </Item>
                    </Grid>
                </Grid>
            </Container>
        </Headeritem>





    );
}