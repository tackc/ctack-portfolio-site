import React from 'react';
import './About.css';
import Headshot from '../images/headshot.jpg';
import ScrollingModel from './ScrollingModal';
import {
    Grid,
    Header,
    Icon,
    Image,
    Segment,
} from 'semantic-ui-react'

const About = ({ mobile }) => {
    return (
        <div id="about" className="AboutPane">
            <Segment style={{ padding: '8em 0em' }} vertical>
                <Grid container stackable verticalAlign='middle'>
                    <Grid.Row>
                        <Header 
                                as='h1'
                                content="Full-Stack Developer, Photographer, Designer"
                                inverted
                                style={{
                                    fontSize: mobile ? '2em' : '4em',
                                    fontWeight: 'normal',
                                    marginBottom: '0',
                                    paddingBottom: '1em',
                                    marginTop: mobile ? '.5em' : '1em',
                                    margin: '0 auto',
                                }}>
                                Full-Stack Developer <br/> 
                                Photographer <br/> 
                                Designer
                            </Header>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <p style={{ fontSize: '1.5em' }}>
                            I’m an improvement-driven fellow who sees potential for greatness everywhere. With a formal education in photography and graphic design, and additional training in Full Stack Web Development. I have worked as a professional phototographer for 10+ years and decided it was time to add another skill set to my belt. I also spent 7+ years working in various roles for Apple Inc. 
                            <br/>  
                            <br/>
                            <strong>Fun fact: </strong>
                            I built and lived in a tiny house for 4 years with my wife!
                            </p>
                        </Grid.Column>
                        <Grid.Column floated='right' width={6}>
                            <Image bordered rounded size='large circular' src={Headshot} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row centered
                    style={{
                        marginTop: mobile ? '.5em' : '1em',
                        margin: '1em auto',
                    }}>
                        <ScrollingModel style={{margin: '0 auto'}}/>
                    </Grid.Row>
                    <Grid.Row>
                        <Header 
                                as='h1'
                                style={{
                                    fontSize: mobile ? '1.5em' : '3em',
                                    fontWeight: 'normal',
                                    marginBottom: '0',
                                    paddingBottom: '1em',
                                    marginTop: mobile ? '.5em' : '1em',
                                    margin: '0 auto',
                                }}>
                                <Icon name='html5' />
                                <Icon name='css3' />
                                <Icon name='github' />
                                {/* <Icon name='express' /> */}
                                <Icon name='node js' />
                                <Icon name='npm' />
                                <Icon name='python' />
                                {/* <Icon name='django' /> */}
                            </Header>
                    </Grid.Row>
                </Grid>
            </Segment>
        </div>
    )
}

export default About;