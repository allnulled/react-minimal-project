import React from "react";
import "./index.scss";
import { withTranslation } from "react-i18next";

const Translatable = withTranslation();

class AboutPageComponent extends React.Component {
	render() {
		const { t } = this.props;
		return (
			<section className="Page AboutPage">
				<h1 className="Title">{t("Sobre nosotros")}</h1>
				<h3 className="Subtitle">{t("Esta página habla sobre nosotros")}</h3>
				<main className="Contents">
					<p>{t("Esta página es para hablar de nosotros")}</p>
				</main>
			</section>
		);
	}
}

export const AboutPage = Translatable(AboutPageComponent);