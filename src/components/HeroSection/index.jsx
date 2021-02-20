import React, { useState } from 'react'
import { HeroBg, HeroContainer, HeroContent, HeroH1, VideoBg, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import Video from '../../videos/globus.mp4'
import { Button } from '../ButtonElement'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () =>{
        setHover(!hover)
    }
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Virtual Banking Made Easy</HeroH1>
                <HeroP>
                    Sign up for a new account today and receive $250 in credit towards your next payment
                </HeroP>
                <HeroBtnWrapper>
                    <Button  
                         smooth={true}
                         duration={500}
                         spy={true}
                         exact="true"
                         offset={-80} to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
                        Get Started {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                   </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
