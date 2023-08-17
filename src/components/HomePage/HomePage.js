import React from 'react';
import NavBar from '../Commons/NavBar/NavBar'
import HeroSection from '../HomePage/HeroSection'
import PopularRecipeSection from './PopularRecipeSection/PopularRecipeSection'
import FooterSection from '../Commons/Footer/FooterSection'
import SuggestedCreatorsSection from './SuggestedCreatorsSection/SuggestedCreatorsSection';
import Container from "@mui/material/Container";


function HomePage() {
    return (
        <div>
            <NavBar
                isSearchCreateRecipe={true}
            />
            <Container sx={{maxWidth: '2800px'}} maxWidth="false">
                <HeroSection/>
                <PopularRecipeSection/>
                <SuggestedCreatorsSection/>
            </Container>
            <FooterSection/>
        </div>
    )
}

export default HomePage