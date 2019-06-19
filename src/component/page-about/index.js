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
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus dolor non tincidunt sagittis. Donec auctor augue sed lorem faucibus, vel vestibulum libero auctor. Suspendisse at ante enim. Donec nec ex id tellus viverra pharetra. Praesent at lorem in est maximus rhoncus. Mauris non imperdiet est. Phasellus ultricies metus volutpat elit iaculis, nec iaculis ipsum mollis. Maecenas vel mauris ut augue sollicitudin porttitor. Donec magna augue, lacinia eget nunc a, ultricies sagittis nulla. Integer eros sapien, ultricies a nisi cursus, hendrerit suscipit nunc. In pretium, magna at ultricies dapibus, purus nibh tincidunt dui, eu consectetur augue metus sit amet nibh. Donec dictum justo vel quam interdum suscipit. Pellentesque varius ornare lectus, id auctor risus condimentum id. Donec in nisi nibh. Donec a tincidunt massa. In imperdiet ut nibh id cursus.</p>
					<p>Nulla sed ullamcorper purus, eu pulvinar urna. Pellentesque quis est eu leo tincidunt ultricies. Fusce ullamcorper odio eu ante elementum, non molestie est rhoncus. Sed vulputate turpis in massa condimentum viverra. Fusce eget risus tempus, lacinia erat at, porta lacus. Aliquam et dignissim orci, vel molestie ipsum. In fringilla aliquam lectus eu commodo. Nunc mi orci, viverra et tristique id, iaculis sed sem. Curabitur id est fringilla, euismod elit vitae, blandit neque. Maecenas in orci sed felis facilisis auctor sed et leo. Fusce quis nibh sit amet odio ultricies ultricies sit amet congue dui. Curabitur vitae arcu sed mauris tincidunt molestie vitae vel nibh. Nunc in enim tempor, placerat arcu sit amet, tempus tortor. Vestibulum aliquam, mi at vestibulum gravida, magna quam sollicitudin dolor, non suscipit risus ante eu dui.</p>
					<p>Nullam auctor mi a lorem aliquam, a porttitor eros eleifend. Duis quis ornare lacus. Ut lacinia, leo at cursus elementum, quam neque accumsan justo, quis rutrum purus nisi nec magna. Ut lorem ex, tincidunt nec fringilla a, venenatis at turpis. Curabitur et feugiat nibh. Phasellus lorem velit, cursus sit amet felis ut, mollis ultrices odio. Aenean nulla ante, feugiat ut dapibus non, tristique quis metus. Nam justo arcu, facilisis vitae arcu ac, hendrerit dignissim odio.</p>
					<p>Curabitur sed elit ac ante lacinia porttitor. Nunc iaculis mi lorem, ac iaculis metus feugiat vel. Quisque venenatis, nulla ut aliquam tempor, turpis tortor dictum odio, in porta nisl nisi ut nulla. Praesent maximus pharetra dui quis condimentum. Nam feugiat facilisis arcu nec porttitor. Duis consequat, lacus vel suscipit sodales, nunc erat ultricies turpis, et bibendum sapien orci auctor felis. Curabitur egestas lectus id maximus convallis. Nunc sapien justo, aliquam id porttitor id, placerat ac diam. Maecenas ornare vel lorem sit amet maximus. Maecenas vitae nisi dui. Sed sapien purus, gravida non rhoncus quis, blandit sed urna. Curabitur hendrerit, odio eu aliquet sollicitudin, ligula leo semper ante, ac accumsan ipsum mi vitae nisi. Nullam volutpat urna turpis, eu suscipit orci ultrices eu. Maecenas consectetur dolor in odio dictum, malesuada consequat risus tempus. Mauris sed nisi at sem sodales tristique.</p>
					<p>Mauris neque nisi, tempor a sem ac, ullamcorper sagittis orci. Nunc maximus nisi finibus mollis lobortis. Fusce aliquam ut orci nec scelerisque. Proin malesuada ultrices convallis. Quisque placerat maximus orci id rhoncus. Nam ultricies nisi ante. Duis suscipit et elit at placerat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla blandit, velit vitae sodales auctor, ex velit consequat erat, sed consectetur elit felis in leo.</p>
				</main>
			</section>
		);
	}
}

export const AboutPage = Translatable(AboutPageComponent);