import React from 'react';
// import { Document, Page } from 'react-pdf';

class Resume extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.handlePrint = this.handlePrint.bind(this)
    // }
    // handlePrint = () => {
    //     var myWindow = window.open("", "Resume", "width=800, height=600");
    //     myWindow.document.write(`<iframe
    //         src="https://drive.google.com/file/d/1lxpQB5QlDa1H3cV4kxS0ejY1hGcExX6q/preview",
    //     />`);
    //     myWindow.document.close();
    //     myWindow.focus();
    //     myWindow.print();
    //     myWindow.close();
    //     };
    
        render() {
        return (
            <div className="Resume">
                <iframe
                className="doc"
                title="Chris Tack Resume"
                src="https://drive.google.com/file/d/1lxpQB5QlDa1H3cV4kxS0ejY1hGcExX6q/preview" 
                width="80%" 
                height="800"
                />
            </div>
        );
        }
    }

export default Resume;