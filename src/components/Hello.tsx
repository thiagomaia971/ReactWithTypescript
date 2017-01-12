import * as React from "react";

interface HelloProps {
    compiler: string;
    framework: string;
};

interface HelloState {
    text: string,
    as: string
}

export class Hello extends React.Component<HelloProps, HelloState> {



    public render() {
        return (
            <div>
                <h1>
                    Testando assd
                </h1>
            </div>
        );
    }

}