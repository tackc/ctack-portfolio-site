import React from 'react';
import { Button, Icon, Modal } from 'semantic-ui-react';
import Resume from './Resume';

class ScrollingModal extends React.Component {
    state = { open: false }

    show = size => () => this.setState({ size, open: true })
    close = () => this.setState({ open: false })

    handlePrint = () => {
        var myWindow = window.open("", "Resume");
        myWindow.document.write(`<iframe
            src="https://drive.google.com/file/d/1lxpQB5QlDa1H3cV4kxS0ejY1hGcExX6q/preview", 
            width="1000" 
            height="1000">
        />`);
        myWindow.document.close();
        myWindow.focus();
        myWindow.print();
        myWindow.close();
    }
    render() {
        // const { open, size } = this.state
        return(
            <Modal trigger={<Button>View my résumé</Button>} onClose={this.close}>
                <Modal.Content>
                    <Resume handlePrint={this.handlePrint} onClick={this.show('fullscreen')} />
                </Modal.Content>
                <Modal.Actions>
                    <Button href="https://dl.dropboxusercontent.com/s/vx7c2g4dngd4mpm/Chris_Tack_Resume.pdf?dl=0">
                        Download &nbsp; &nbsp;<Icon name='download' />
                    </Button>
                    {/* <Button onClick={this.handlePrint}>
                        Print &nbsp;<Icon name='print' />
                    </Button> */}
                </Modal.Actions>
            </Modal>
        )
    }
}

export default ScrollingModal;