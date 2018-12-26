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
        <div className="AboutPane">
            <Segment style={{ padding: '8em 0em' }} vertical>
                <Grid container stackable verticalAlign='middle'>
                    <Grid.Row>
                        <Header 
                                as='h1'
                                content="Developer, Photographer, Designer"
                                inverted
                                style={{
                                    fontSize: mobile ? '2em' : '4em',
                                    fontWeight: 'normal',
                                    marginBottom: '0',
                                    paddingBottom: '1em',
                                    marginTop: mobile ? '.5em' : '1em',
                                    margin: '0 auto',
                                }}>
                                Developer, Photographer, Designer
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
                    <Grid.Row>
                        {/* <Button color='black'
                            style={{
                                margin: '0 auto'
                            }}
                            href="{{Resume}}"
                            ><Icon name='Chris Tack resume' /> View my résumé
                        </Button> */}
                        <ScrollingModel style={{margin: '0 auto'}}/>
                    </Grid.Row>
                    <Grid.Row>
                        <Header 
                                as='h1'
                                // inverted
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
                                <Icon name='django' />
                            </Header>
                    </Grid.Row>
                </Grid>
            </Segment>
            {/* <Container text className="AboutDescription"
                style={{
                    fontSize: mobile ? '1em' : '1.33em',
                    fontWeight: 'normal',
                    marginBottom: 0,
                    marginTop: mobile ? '1em' : '1.33em',
                    padding: '1em',
                }}>
                <Grid celled='internally' columns='equal' stackable>
                    <Grid.Row textAlign='center'>
                        <Grid.Column style={{ paddingBottom: '1em', paddingTop: '1em' }}>
                            <img src={Headshot} class="ui medium circular image" alt="Headshot of Chris Tack"/>
                        </Grid.Column>

                        <Grid.Column style={{ paddingBottom: '1em', paddingTop: '1em' }}>
                            <p>I’m an improvement-driven fellow who sees potential for greatness everywhere. With a formal education in photography and graphic design, and additional training in Full Stack Web Development. I have worked as a professional phototographer for 10+ years and decided it was time to add another skill set to my belt. I also spent 7+ years working in various roles for Apple Inc. 
                            <br/>  
                            Fun fact: I built and lived in a tiny house for 4 years with my wife! </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container> */}
        </div>
    )
}

export default About;