import React from "react";
import { NavigationBar } from "component/navigation";
import { I18nBar } from "component/i18n";
import { brand, sections } from "config/navigation";

export class Header extends React.Component {
	render() {
		return (
			<header className="Header">
				<NavigationBar brand={brand} sections={sections} />
				<I18nBar />
			</header>
		);
	}
}
