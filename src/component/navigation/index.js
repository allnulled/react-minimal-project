import React from "react";
import "./index.scss";
import "./style.scss";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Translatable = withTranslation();

class NavigationButtonComponent extends React.Component {
	render(...args) {
		return (
			<div className="NavigationButton d-sm-none" onClick={this.props.onClickHandler}>
				{this.props.contents}
			</div>
		);
	}
}

class NavigationHeaderComponent extends React.Component {
	render(...args) {
		return <div className="NavigationHeader">{this.props.contents}</div>;
	}
}

class NavigationCaretComponent extends React.Component {
	render(...args) {
		return <i className={"NavigationCaret fa fa-caret-" + (this.props.isSelected ? "down" : "right")} />;
	}
}

class NavigationGroupComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isSelected: false };
	}
	render(...args) {
		return (
			<ul className={"NavigationGroup"}>
				{this.props.sections.map((item, index) => {
					return (
						<NavigationSection data={item} navigation={this.props.navigation} level={this.props.level} key={index} />
					);
				})}
			</ul>
		);
	}
}

class NavigationSectionComponent extends React.Component {
	static defaultProps = { sections: null };
	constructor(props) {
		super(props);
		this.state = { isSelected: false };
	}
	toggleGroup(event) {
		event.preventDefault();
		this.setState({ isSelected: !this.state.isSelected });
	}
	openPage(event) {
		this.props.navigation.setState({
			...Object.assign({}, this.props.navigation.state),
			isActive: false,
			refresher: !this.props.navigation.state.refresher,
			page: this.props.data.name
		});
	}
	onClickItem(event) {
		this.props.data && this.props.data.sections ? this.toggleGroup(event) : this.openPage(event);
	}
	componentWillReceiveProps({ isSelected }) {
		this.setState({ ...this.state, isSelected });
	}
	render(...args) {
		const { t } = this.props;
		const link = (() => {
			if (this.props.data.route) {
				return (
					<Link className="NavigationLink" to={this.props.data.route} onClick={this.onClickItem.bind(this)}>
						{this.props.data.sections ? <NavigationCaret isSelected={this.state.isSelected} /> : ""}
						<span className="NavigationLinkLabel">{t(this.props.data.name)}</span>
					</Link>
				);
			} else {
				return (
					<div className="NavigationLink" onClick={this.onClickItem.bind(this)}>
						{this.props.data.sections ? <NavigationCaret isSelected={this.state.isSelected} /> : ""}
						<span className="NavigationLinkLabel">{t(this.props.data.name)}</span>
					</div>
				);
			}
		})();
		return (
			<li
				className={
					"NavigationSection" + (this.props.navigation.state.page === this.props.data.name ? " isSelected" : "")
				}
			>
				{link}
				{this.props.data.sections && this.state.isSelected ? (
					<NavigationGroup
						sections={this.props.data.sections}
						navigation={this.props.navigation}
						level={this.props.level + 1}
					/>
				) : (
					""
				)}
			</li>
		);
	}
}

class NavigationBarComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isActive: false, refresher: false, page: this.getRoutePage() };
	}
	getRoutePage() {
		const regexSlashes = /^\/|\/$/g;
		const regexHashes = /^#\/?|\/$/g;
		const pathname = window.location.pathname.replace(regexSlashes, "");
		const hashname = window.location.hash.replace(regexSlashes, "").replace(regexHashes, "");
		console.log(pathname, hashname);
		const routeSelected = this.props.sections.reduce((result, section) => {
			if(!section.route) {
				return result;
			}
			const routePurified = section.route.replace(regexSlashes, "");
			const isInSameRoute = (routePurified === pathname) || (routePurified === hashname);
			if (isInSameRoute) {
				return section;
			}
			return result;
		}, null);
		if (routeSelected) {
			return routeSelected.name;
		} else {
			return "Inicio";
		}
	}
	static defaultProps = {
		header: "Project",
		buttonContents: "≡"
	};
	toggleNavigation() {
		this.setState({ isActive: !this.state.isActive });
	}
	openPage(page) {
		return () => {
			this.setState({ page: page });
		};
	}
	render(...args) {
		return (
			<div className={"NavigationBar" + (this.state.isActive ? " isSelected" : "")}>
				<div className="NavigationTop">
					<NavigationButton onClickHandler={this.toggleNavigation.bind(this)} contents={this.props.buttonContents} />
					<NavigationHeader contents={this.props.brand} />
					<NavigationBackground navigation={this} />
				</div>
				<ul className={"NavigationSectionList" + (this.state.isActive ? "" : " navigation-responsive-hide")}>
					{this.props.sections.map((section, index) => {
						return <NavigationSection data={section} navigation={this} level={0} key={index} />;
					})}
				</ul>
			</div>
		);
	}
}

class NavigationBackgroundComponent extends React.Component {
	onClickBackground() {
		this.props.navigation.setState({ isActive: false });
	}
	render() {
		return <div 
			className={"NavigationBackground"}
			onClick={this.onClickBackground.bind(this)}></div>;
	}
}

export const NavigationBackground = Translatable(NavigationBackgroundComponent);
export const NavigationButton = Translatable(NavigationButtonComponent);
export const NavigationHeader = Translatable(NavigationHeaderComponent);
export const NavigationCaret = Translatable(NavigationCaretComponent);
export const NavigationGroup = Translatable(NavigationGroupComponent);
export const NavigationSection = Translatable(NavigationSectionComponent);
export const NavigationBar = Translatable(NavigationBarComponent);
