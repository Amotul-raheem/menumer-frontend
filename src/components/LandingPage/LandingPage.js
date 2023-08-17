import React, {Fragment} from 'react';
import NavBar from '../Commons/NavBar/NavBar'
import HeroSection from '../LandingPage/HeroSection/HeroSection'
import RecipesSection from '../LandingPage/RecipesSection/RecipesSection'
import CommentSection from '../LandingPage/CommentSection/CommentSection'
import FooterSection from '../Commons/Footer/FooterSection'
import Container from "@mui/material/Container";

function LandingPage() {
    return (
        <div>
            <NavBar
                isSignUpSignIn={true}
            />
            <Container  sx={{ maxWidth:'2800px'    }} maxWidth="false">
                <HeroSection/>
                <RecipesSection/>
                <CommentSection/>
            </Container>
            <FooterSection/>
        </div>

    );
}

export default LandingPage