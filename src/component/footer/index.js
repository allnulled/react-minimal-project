import React from "react";
import HeartIcon from "resource/image/heart.png";
import { withTranslation } from "react-i18next";
import "./index.scss";

const Translatable = withTranslation();

class FooterComponent extends React.Component {
	render() {
		const { t } = this.props;
		return (
			<footer className="Footer">
				<p>
					<span>{t("Developed with")} </span>
					<img className="FooterIcon" src={HeartIcon} alt="amor" />
					<span> {t("by")}</span>
					<span> Carlos Jimeno Hernández</span>
				</p>
			</footer>
		);
	}
}

export const Footer = Translatable(FooterComponent);
