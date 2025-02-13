import React from 'react';

export default class Profile extends React.Component {
    render() {
        return(
            <div className="bg-secondarybg rounded-sm shadow-md p-4">

                <h2 className="p-4 text-center font-bold text-5xl text-primary">Olle Dahlström</h2>

                <div className="text-center text-md font-mono text-secondary">
                    Junior Software Developer | Junior Fullstack Developer
                </div>

                <button className="flex mx-auto my-2 bg-secondary transition duration-100 text-neutral text-sm">
                    <a href={this.props.link} download="Olle_Dahlström_CV.pdf">
                        <p className="p-1 mx-4">Download Resume</p>
                    </a>
                </button>

            </div>
        );
    }
}
