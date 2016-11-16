import React from 'react';
import ReactDOM from 'react-dom';

class Layout extends React.Component{
	render(){
		return(
				<h1>Działa!!</h1>
			);
	}
}

var app = document.querySelector('#root');
ReactDOM.render(<Layout/>, app);