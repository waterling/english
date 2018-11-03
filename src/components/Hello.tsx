import * as React from 'react';
import './Hello.scss';

export interface HelloProps {
    compiler: string;
    framework: string;
}

export class Hello extends React.Component<HelloProps> {
    render() {
        return (
            <div className="div">
                <h1>Hello from {this.props.compiler} and {this.props.framework}! </h1>;
            </div>
        );
    }
}
