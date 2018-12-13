import React from 'react';
import './About.css'
import Headshot from '../images/headshot.jpg'
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
} from 'semantic-ui-react'

const About = ({ mobile }) => {
    return (
        <div className="AboutPane">
            <Header
                as='h1'
                content="Full-Stack Unicorn"
                inverted
                style={{
                    fontSize: mobile ? '2em' : '4em',
                    fontWeight: 'normal',
                    marginBottom: 0,
                    marginTop: mobile ? '1.5em' : '3em',
                }}
            />
            <img src={Headshot} class="ui medium circular image" alt="Headshot of Chris Tack"/>
            <Container text className="AboutDescription">
                <p>I’m an improvement-driven fella' who sees potential for greatness everywhere. With a formal education in photography and graphic design, and additional training in Full Stack Web Development. I have worked as a professional phototographer for 10+ years and decided it was time to add another skill set to my belt.</p>
            </Container>
        </div>
    )
}

export default About;