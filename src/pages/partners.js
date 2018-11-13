import React from "react";
import { Link } from "gatsby";
import "./index.sass";
import Layout from "../components/layout";
import "./partners.sass";

const PartnersPage = () => (
	<Layout>
		<div className="partners-page">
			<section className="section header-section">
				<div className="container">
					<h1 className="page-title">Leave stability to the experts</h1>
					<div className="page-subtitle">
						A stablecoin is a cryptocurrency that is resistant to price volatility, allowing it to
						be used as a stable store of value, medium of exchange, and unit of account. Partner
						with Havven to use our stablecoin, nomins, for all your payment needs!
					</div>
				</div>
			</section>
			<section className="section is-white join-team-section">
				<div className="container">
					<div className="section-title">Join the Team</div>
					<div className="section-desc pb-70">
						We are looking for highly skilled individuals to join the Havven team and help us
						deliver a decentralised payment network and stablecoin to the world. If you're looking
						for a challenging project and want to contribute to building a critical layer of the
						blockchain ecosystem, then please get in touch!
					</div>
					<div className="section-title is-subtle pb-30">Open Positions</div>
					<div className="columns open-positions pb-60">
						<div className="column">
							<div>Senior Blockchain Engineer</div>
						</div>
						<div className="column">
							<div>Head of Marketing and Communication</div>
						</div>
						<div className="column">
							<div>Creative Director</div>
						</div>
					</div>
					<div className="section-desc join-team-desc">
						Looking to join the team but don’t see a position suited to you? We’re always interested
						in hearing from people who are interested in joining our mission. Say hello at{" "}
						<a href="mailto:careers@havven.io">careers@havven.io</a>
					</div>
				</div>
			</section>
		</div>
	</Layout>
);

export default PartnersPage;