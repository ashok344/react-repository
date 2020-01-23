import React,{Component} from 'react';
import engine from "./engine";
const response = data.response;

class engin extends Component {
	render() {
		return (
            <ul>
                {response.map(r => (<li>{r}</li>))}
            </ul>
        );
    }
} 
export default engin;

