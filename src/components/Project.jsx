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
    Input,
    List,
    Responsive,
    Segment,
} from 'semantic-ui-react'

class Project extends Component {

    render() {
        return (
            // <div className="ProjectPane flex-container">
            //     <div className="ProjectScreenshot flex-item"></div>
            //     <h3 className="ProjectTitle flex-item">Project Title</h3>
            //     <p className="ProjectDescription flex-item">Project description goes here...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus cursus nisi, et facilisis felis consectetur in. Ut auctor dapibus ligula, vitae semper lacus gravida ac. Vestibulum finibus sed leo id sodales. Sed vel mauris at ligula molestie mollis. Nulla ac scelerisque lorem. Phasellus laoreet, risus vitae sollicitudin rhoncus, diam augue egestas nisi, quis dignissim sapien ligula a lacus. Fusce eget erat commodo, egestas tortor eu, suscipit sapien. Cras id nunc sit amet sem vehicula tempor eget sed nulla. Phasellus congue sed lectus at tincidunt. Aliquam vitae quam nisl. Praesent eu tortor malesuada, pretium metus eu, finibus turpis. Vestibulum placerat velit vitae lorem aliquet, in efficitur ex sollicitudin.</p>
            //     <ul className="ProjectTechnologiesUsed flex-item">
            //         <li>HTML</li>
            //         <li>CSS</li>
            //         <li>Javascript</li>
            //         <li>ReactJS</li>
            //     </ul>
            // </div>
            <Segment style={{ padding: '0em' }} vertical>
                <Grid celled='internally' columns='equal' stackable>
                    <Grid.Row textAlign='center'>
                        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                            <Image src='/images/avatar/large/nan.jpg' />
                            "I shouldn't have gone with their competitor."
                            </Header>
                            <p style={{ fontSize: '1.33em' }}>
                            <b>Nan</b> Chief Fun Officer Acme Toys
                            </p>
                        </Grid.Column>

                        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                            <Image src='/images/avatar/large/nan.jpg' />
                            "I shouldn't have gone with their competitor."
                            </Header>
                            <p style={{ fontSize: '1.33em' }}>
                            <b>Nan</b> Chief Fun Officer Acme Toys
                            </p>
                        </Grid.Column>

                        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                            <Image src='/images/avatar/large/nan.jpg' />
                            "I shouldn't have gone with their competitor."
                            </Header>
                            <p style={{ fontSize: '1.33em' }}>
                            <b>Nan</b> Chief Fun Officer Acme Toys
                            </p>
                        </Grid.Column>

                        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                            <Image src='/images/avatar/large/nan.jpg' />
                            "I shouldn't have gone with their competitor."
                            </Header>
                            <p style={{ fontSize: '1.33em' }}>
                            <b>Nan</b> Chief Fun Officer Acme Toys
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        )
    }
}

export default Project;