import React from 'react';
// import { Document, Page } from 'react-pdf';

class Resume extends React.Component {
        render() {
            // return (
            //     <div className="Resume">
            //         <iframe
            //         className="doc"
            //         title="Chris Tack Resume"
            //         src="https://drive.google.com/file/d/1lxpQB5QlDa1H3cV4kxS0ejY1hGcExX6q/preview" 
            //         width="80%" 
            //         height="800"
            //         />
            //     </div>
            // );
            return (
                <div className="Resume">
                    <iframe title="chrisTackResume" src="https://tackc.github.io/resume-template/" frameborder="0"></iframe>
                </div>
            );
        }
    }

export default Resume;
