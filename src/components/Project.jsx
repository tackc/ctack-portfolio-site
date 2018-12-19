import React, {Component} from 'react';
import './Project.css'
import {
    Button,
    Column,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Responsive,
    Segment,
} from 'semantic-ui-react'

class Project extends Component {

    render() {
        return (
            <Segment style={{ padding: '0em' }} vertical>
                <Grid celled='internally' columns='equal' stackable>
                    <Grid.Row textAlign='center'>
                        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                            Simon - Memory Game
                            </Header>
                            <Image src='https://i.imgur.com/ZAM13ij.png' style={{paddingBottom: '3em', paddingTop: '2em'}}/>
                            <p style={{ fontSize: '1.33em' }}>
                            My take on the classic Simon game. Users observe the pattern played by the computer and then repeat the pattern back in order to advance to the next round.
                            </p>
                            <p style={{ fontSize: '1.33em' }}>
                            It was challenging figuring out how to increment the computer move and then await user input while comparing the player move to that of the computer
                            </p>
                            <List style={{fontSize: '1.33em'}}>
                            <b>Technologies Used:</b>
                                <li>HTML5</li>
                                <li>CSS</li>
                                <li>Vanilla JS</li>
                            </List>
                            <Button href="https://tackc.github.io/memory-game/">View the App</Button>
                            <Button href="https://github.com/tackc/memory-game">View the Code</Button>
                        </Grid.Column>

                        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                            Tool Library
                            </Header>
                            <Image src='https://i.imgur.com/I6IOQT6.png' style={{paddingBottom: '3em', paddingTop: '2em'}}/>
                            <p style={{ fontSize: '1.33em' }}>
                            The tool library app was built using Django. Users are able to create an account (or log in) and then add tools that they own to the tool library. 
                            </p>
                            <p style={{ fontSize: '1.33em' }}>
                            Although it was one of my first Django and Python projects, it was fun experimenting with a new programming language!
                            </p>
                            <List style={{fontSize: '1.33em'}}>
                            <b>Technologies Used:</b>
                                <li>Django</li>
                                <li>Python</li>
                                <li>ES6</li>
                                <li>Materialize</li>
                                <li>RESTful</li>
                                <li>mongoDB</li>
                            </List>
                            <Button href="https://still-spire-43106.herokuapp.com/">View the App</Button>
                            <Button href="https://github.com/tackc/toollibrary/">View the Code</Button>
                        </Grid.Column>

                        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                            Seattle Transit
                            </Header>
                            <Image src='https://i.imgur.com/HJUyoRs.png' style={{paddingBottom: '3em', paddingTop: '2em'}}/>
                            <p style={{ fontSize: '1.33em' }}>
                            Mobile-first team project (Henry Hong & Sutthirath Sean Vilaysane). We consumed the One Bus Away API and created an app allowing users to find bus stops near their current location on a map using the mapbox API.
                            </p>
                            <List style={{fontSize: '1.33em'}}>
                            <b>Technologies Used:</b>
                                <li>NodeJS</li>
                                <li>ExpressJS</li>
                                <li>ES6</li>
                                <li>Materialize</li>
                                <li>RESTful</li>
                                <li>mongoDB</li>
                                <li>mapbox API</li>
                                <li>OneBusAway API</li>
                            </List>
                            <Button href="https://nameless-harbor-37613.herokuapp.com/">View the App</Button>
                            <Button href="https://github.com/tackc/SeattleTransit?files=1">View the Code</Button>
                        </Grid.Column>

                        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                            National Park Finder
                            </Header>
                            <Image src='https://i.imgur.com/3daV702.png' style={{paddingBottom: '3em', paddingTop: '2em'}}/>
                            <p style={{ fontSize: '1.33em' }}>
                            I created the National Parks Finder App to help users find parks to visit in the destination of their choosing. Users can save their favorites as well as parks they have visited. The app was build with mobile-first in mind. Media queries were used to ensure the app is aesthetically pleasing on larger displays.
                            </p>
                            <List style={{fontSize: '1.33em'}}>
                            <b>Technologies Used:</b>
                                <li>React</li>
                                <li>React Router</li>
                                <li>Javascript</li>
                                <li>CSS</li>
                                <li>National Parks Service API</li>
                            </List>
                            <Button href="https://nationalparksfinder.herokuapp.com/">View the App</Button>
                            <Button href="https://github.com/tackc/proj4-national-park-finder?files=1">View the Code</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        )
    }
}

export default Project;