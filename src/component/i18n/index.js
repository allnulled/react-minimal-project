import React from "react";
import { SimpleSelector } from "component/selector";
import logoCatala from "resource/image/flag-ca.png";
import logoCastellano from "resource/image/flag-es.png";
import logoEnglish from "resource/image/flag-en.png";
import "./index.scss";
import { UserLanguageISO } from "config/i18n";
import { withTranslation } from "react-i18next";

const Translatable = withTranslation();

class I18nBarComponent extends React.Component {
	static defaultProps = {
		placeholder: "Select language...",
		events: {
			onInitialize: () => {},
			onOpen: () => {},
			onClose: () => {},
			onSelect: (component) => {
				alert("Selected language: " + component.props.value + ". Override 'onSelect' method for this to make any change.");
			}
		},
		options: [{
			contents: <div className="I18nOption">
				<img className="I18nIcon" src={logoCatala} alt="Senyera catalana" />
				<span className="I18nLabel">Català</span>
			</div>,
			value: "ca"
		}, {
			contents: <div className="I18nOption">
				<img className="I18nIcon" src={logoCastellano} alt="Bandera española" />
				<span className="I18nLabel">Castellano</span>
			</div>,
			value: "es"
		}, {
			contents: <div className="I18nOption">
				<img className="I18nIcon" src={logoEnglish} alt="English flag" />
				<span className="I18nLabel">English</span>
			</div>,
			value: "en"
		}],
	}
	render(...args) {
		return (
			<nav>
				<SimpleSelector
					customClassName={"I18nWidget"}
					selectExtraAttributes={{}}
					placeholder=""
					options={this.props.options}
					events={{
						...this.props.events,
						onInitialize: (selectComponent) => {
							selectComponent.state.value = UserLanguageISO;
						},
						onSelect: (value, optionComponent) => {
							this.props.i18n.changeLanguage(value);
							localStorage.i18nextPreferredLanguage = value;
						}}} />
			</nav>
		);
	}
}

export const I18nBar = Translatable(I18nBarComponent);