import React from 'react';
import './Contact.css';
import {
    Button,
    Container,
    Grid,
    Icon,
} from 'semantic-ui-react'

const Contact = () => {
    return (
        <div className="ContactPane">
            <Container className="flex flex-wrap justify-between py-8 w-1/2 sm:w-full ui centered grid">
                <Grid columns={4} stackable centered>
                    <Grid.Row>
                        <Grid.Column>
                            {/* <h1>Yo...some text!</h1> */}
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Button target="_blank" href="https://christopher-tack.squarespace.com" color='blue'><Icon name='camera' /> My Photo Work</Button>
                            <p />
                        </Grid.Column>
                        <Grid.Column>
                            <Button target="_blank" href="https://www.linkedin.com/in/christophertack" color='linkedin'><Icon name='linkedin' /> LinkedIn</Button>
                            <p />
                        </Grid.Column>
                        <Grid.Column>
                            <Button target="_blank" href="https://www.instagram.com/tackc/" color='instagram'><Icon name='instagram' /> Instagram</Button>
                            <p />
                        </Grid.Column>
                        <Grid.Column>
                            <Button target="_blank" href="https://github.com/tackc" color='github'><Icon name='github' /> Github</Button>
                            <p />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </div>
    )
}

export default Contact;