import React from "react";
import { withTranslation } from "react-i18next";
import "./index.scss";

const Translatable = withTranslation();

class HomePageComponent extends React.Component {
	render() {
		const { t } = this.props;
		return (
			<section className="Page HomePage">
				<h1 className="Title">{t("Inicio")}</h1>
				<h3 className="Subtitle">{t("Bienvenido a la página de inicio")}</h3>
				<main className="Contents">
					<p>{t("Esto es la página de inicio")}.</p>
				</main>
			</section>
		);
	}
}

export const HomePage = Translatable(HomePageComponent);
