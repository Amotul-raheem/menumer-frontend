import React, {useEffect} from 'react';
import NavBar from '../Commons/NavBar/NavBar'
import HeroSection from '../HomePage/HeroSection'
import PopularRecipeSection from './PopularRecipeSection/PopularRecipeSection'
import FooterSection from '../Commons/Footer/FooterSection'
import SuggestedCreatorsSection from './SuggestedCreatorsSection/SuggestedCreatorsSection';
import Container from "@mui/material/Container";


function HomePage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <NavBar
                isSearchCreateRecipe={true}
            />
            <Container  disableGutters sx={{maxWidth: '2800px', px: 0 }} maxWidth="false">
                <HeroSection/>
                <PopularRecipeSection/>
                <SuggestedCreatorsSection/>
            </Container>
            <FooterSection/>
        </div>
    )
}

export default HomePage