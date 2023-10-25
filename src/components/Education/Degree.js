import React from 'react';

export default class Degree extends React.Component {
    render() {
        return(
            <div className="my-2">
                <div className="text-sm text-black">
                    {this.props.year}
                </div>

                <div className="text-md font-bold text-botdahl-800">
                    {this.props.degree}
                </div>

                <div className="text-md text-botdahl-700">
                    {this.props.school}
                </div>
            </div>
        );
    }
}
