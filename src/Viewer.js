import React, { Component } from 'react'
import ReactJson from 'react-json-view'

export default class Viewer extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const [my_json_object] = [this.props];

        return (
            <div>
                <ReactJson src={my_json_object} />    
            </div>
        )
    }
}
