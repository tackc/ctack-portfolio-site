import React from 'react'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'
import Resume from './Resume';

const ScrollingModal = () => (
    <Modal trigger={<Button>View my résumé</Button>}>
        <Modal.Content>
            <Resume/>
        </Modal.Content>
        <Modal.Actions>
        <Button primary>
            Proceed <Icon name='right chevron' />
        </Button>
        </Modal.Actions>
    </Modal>
)

export default ScrollingModal