import React from "react";
import { Route } from "react-router-dom";
import { HomePage } from "component/page-home";
import { AboutPage } from "component/page-about";
import "./index.scss";

export class Body extends React.Component {
	render() {
		return (
			<main className="main Body">
				<Route path="/" exact component={HomePage} />
				<Route path="/home" exact component={HomePage} />
				<Route path="/about" component={AboutPage} />
        <Route path="/example">
          Hello!
        </Route>
			</main>
		);
	}
}
