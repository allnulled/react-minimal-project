import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "./index.scss";
import "config/i18n";
import React from "react";
import { Header } from "component/header";
import { Body } from "component/body";
import { Footer } from "component/footer";
import { HashRouter as Router } from "react-router-dom";

export class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Router>
					<Header />
					<Body />
					<Footer />
				</Router>
			</div>
		);
	}
}
