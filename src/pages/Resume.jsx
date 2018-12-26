import React, {Component} from 'react';
import CTresume from './Chris_Tack_Resume.pdf';
// import { Document, Page } from 'react-pdf';
import { Document } from 'react-pdf/dist/entry.webpack';

class Resume extends Component {
    // state = {
    //     numPages: null,
    //     pageNumber: 1,
    // }
    
    // onDocumentLoadSuccess = ({ numPages }) => {
    //     this.setState({ numPages });
    // }
    
    render() {
        // const { pageNumber } = this.state;
    
        return (
            <div>
                <Document
                file={{CTresume}}
                onLoadSuccess={this.onDocumentLoadSuccess}
                onLoadError={console.error}
                >
                {/* <Page pageNumber={pageNumber} /> */}
                </Document>
                {/* <p>Page {pageNumber} of {numPages}</p> */}
            </div>
        );
    }
}

export default Resume;
