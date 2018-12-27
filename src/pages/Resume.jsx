import React from 'react';
import CTresume from './Chris_Tack_Resume.pdf';
// import { Document, Page } from 'react-pdf';
import { Document } from 'react-pdf/dist/entry.webpack';

// class Resume extends Component {
//     // state = {
//     //     numPages: null,
//     //     pageNumber: 1,
//     // }
    
//     // onDocumentLoadSuccess = ({ numPages }) => {
//     //     this.setState({ numPages });
//     // }
    
//     render() {
//         // const { pageNumber } = this.state;
    
//         return (
//             <div>
//                 <Document
//                 file={{CTresume}}
//                 onLoadSuccess={this.onDocumentLoadSuccess}
//                 onLoadError={console.error}
//                 >
//                 {/* <Page pageNumber={pageNumber} /> */}
//                 </Document>
//                 {/* <p>Page {pageNumber} of {numPages}</p> */}
//             </div>
//         );
//     }
// }

class Resume extends React.Component {
    constructor(props) {
        super(props)
        this.handlePrint = this.handlePrint.bind(this)
    }
    handlePrint = () => {
        var myWindow = window.open("", "Resume", "width=800, height=600");
        myWindow.document.write(`<iframe
            src="https://drive.google.com/file/d/1lxpQB5QlDa1H3cV4kxS0ejY1hGcExX6q/preview",
        />`);
        myWindow.document.close();
        myWindow.focus();
        myWindow.print();
        myWindow.close();
        };
    
        render() {
        return (
            <div className="Resume">
                <iframe
                className="doc"
                title="Chris Tack Resume"
                src="https://drive.google.com/file/d/1lxpQB5QlDa1H3cV4kxS0ejY1hGcExX6q/preview" width="850" height="600"
                />
            </div>
        );
        }
    }

export default Resume;
