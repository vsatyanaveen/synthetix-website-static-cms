import React, { Fragment } from "react";
import { graphql, Link, withPrefix } from "gatsby";
import "./index.sass";
import Layout from "../components/layout";

import heroLeft from "../resources/hero-left.png";
import heroRight from "../resources/hero-right.png";
import heroTablet from "../resources/hero-bg-tablet.png";

import icoUser1 from "../resources/ico-user-level-1.svg";
import icoUser2 from "../resources/ico-user-level-2.svg";
import icoUser3 from "../resources/ico-user-level-3.svg";
import icoUser4 from "../resources/ico-user-level-4.svg";
import exchangeLogo from "../resources/exchange-logo.svg";
import exchange from "../resources/exchange.png";

import synthCrypto from "../resources/synth-crypto.svg";
import synthCommodity from "../resources/synth-commodity.svg";
import synthFiat from "../resources/synth-fiat.svg";
import synthIndex from "../resources/synth-index.svg";
import synthInverse from "../resources/synth-inverse.svg";
import sxLiquidity from "../resources/sx-liquidity.svg";
import sxContract from "../resources/sx-contract.svg";
import sxDistributed from "../resources/sx-distributed.svg";
import community from "../resources/learn-community.svg";
import litepaper from "../resources/learn-litepaper.svg";

import Modal from "../components/Modal";
import Player from "@vimeo/player";
import UiImg from "../components/UiImg";
import { Helmet } from "react-helmet";

const bottomLabelTx = "Q4 2018";
const fiatCurrencies = ["susd", "seur", "sjpy", "saud", "sgbp", "schf"];
const cryptoCurrencies = [
	"sbtc",
	"seth",
	"sbnb",
	"ibtc",
	"ieth",
	"ibnb",
	"slink",
	"sxtz",
	"strx",
	"ilink",
	"ixtz",
	"itrx"
];
const commodities = ["sxau", "sxag"];
const comingSoon = ["sappl", "10x"];
const arrow = withPrefix("/img/arrow-vertical.svg");

class IndexPage extends React.Component {
	constructor(props) {
		super(props);
	}

	state = {
		isOpen: false,
		showThanks: false,
		emailAddress: ""
	};

	player = null;

	startVideo() {
		this.player = new Player("video-how-it-works", {
			id: 254987969,
			width: 640
		});

		this.player.play();
	}

	pauseVideo() {
		if (this.player) this.player.pause();
	}

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
		e.target.setCustomValidity("");
	};

	submitEmail = e => {
		e.preventDefault();
		const { emailAddress } = this.state;
		if (!emailAddress) return;
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: this.encode({
				"form-name": "mailing-list",
				emailAddress: emailAddress
			})
		})
			.then(() => console.log("Success!"))
			.catch(error => console.log("error", error));
		this.setState({ showThanks: true });
	};

	onInvalid = e => {
		if (!e.target.validity.valid)
			e.target.setCustomValidity(
				"That does not appear to be a valid email address. Please try again."
			);
		else e.target.setCustomValidity("");
	};

	encode = data => {
		return Object.keys(data)
			.map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
			.join("&");
	};

	render() {
		let { isOpen, showThanks, emailAddress } = this.state;
		const { mintrUrl, dashboardUrl, synthetixExchangeUrl } = this.props.data.site.siteMetadata;
		const {
			metaTitle,
			metaDescription,
			heading
		} = this.props.data.allFile.edges[0].node.childPagesJson;

		return (
			<Layout>
				<Helmet title={metaTitle}>
					<meta name="description" content={metaDescription} />
				</Helmet>
				<div className="home-page">
					<section className="section hero-section">
						<div className="hero-bg">
							<div className="hero-left">
								<img src={heroLeft}></img>
							</div>
							<div className="hero-right">
								<img src={heroRight}></img>
							</div>
						</div>
						<div className="title-container">
							<h1 className="hero page-title">
								A protocol for trading synthetic assets on Ethereum
							</h1>
							<div className="hero page-subtitle">On-chain exposure to any asset</div>
						</div>
						<div className="hero-tablet">
							<img src={heroTablet}></img>
						</div>
					</section>
					<section className="section synth-section pb-60 pt-30">
						<div className="section-title is-white">Introducing Synths</div>
						<div className="section-desc">
							Synths are tokens that provide exposure to assets such as gold, Bitcoin,
							U.S. Dollars, TESLA (coming soon), and AAPL (coming soon) within the Ethereum blockchain.
						</div>
						<div className="section synth-categories">
							<div className="synth-type">
								<div className="synth-img">
									<img src={synthCrypto}></img>
								</div>
								<div className="synth-p2">Crypto</div>
							</div>
							<div className="synth-type">
								<div className="synth-img">
									<img src={synthCommodity}></img>
								</div>
								<div className="synth-p2">Commodity</div>
							</div>
							<div className="synth-type">
								<div className="synth-img">
									<img src={synthFiat}></img>
								</div>
								<div className="synth-p2">Forex</div>
							</div>
							<div className="synth-type">
								<div className="synth-img">
									<img src={synthIndex}></img>
								</div>
								<div className="synth-p2">Index</div>
							</div>
							<div className="synth-type">
								<div className="synth-img">
									<img src={synthInverse}></img>
								</div>
								<div className="synth-p2">Inverse</div>
							</div>
						</div>
						<Link to="/tokens" className="view-synths-button">
							View Synths
						</Link>
					</section>
					<section className="section exchange-section">
						<div className="section-desc">TRADE SYNTHS ON THE</div>
						<div className="section-title">
							<img className="exchange-logo" src={exchangeLogo} />
						</div>
						<div className="section-image">
							<img className="screenshot" src={exchange}></img>
						</div>
						<div className="columns is-centered exchange-columns">
							<div className="column">
								<div className="icon-img">
									<img src={sxLiquidity}></img>
								</div>
								<div className="p1">Infinite liquidity</div>
							</div>
							<div className="column">
								<div className="icon-img">
									<img src={sxContract}></img>
								</div>
								<div className="p1">Peer-to-contract trading</div>
							</div>
							<div className="column">
								<div className="icon-img">
									<img src={sxDistributed}></img>
								</div>
								<div className="p1">Distributed collateral pool</div>
							</div>
						</div>
						<a
							className="purple-button centered"
							href="https://synthetix.exchange"
							target="_blank"
						>
							Learn more
						</a>
					</section>
					<div className="background-gradient">
						<section className="section learn-section">
							<div className="section-title is-large w-auto fs-56">
								Learn more about the Synthetix protocol
							</div>
							<div className="columns is-centered learn-columns">
								<a
									className="column learn-litepaper"
									href={"/litepaper"}
									target="_blank"
									rel="noopener noreferrer"
								>
									<div className="c-img">
										<div className="icon-img">
											<img src={litepaper}></img>
										</div>
									</div>
									<div className="p1">Litepaper</div>
									<div
										className="learn-button centered"
										href="/litepaper"
										target="_blank"
									>
										Read it now
									</div>
								</a>
								<a
									className="column learn-community"
									href={"https://synthetix.community/docs/intro"}
									target="_blank"
									rel="noopener noreferrer"
								>
									<div className="c-img">
										<div className="icon-img">
											<img src={community}></img>
										</div>
									</div>
									<div className="p1">Community</div>
									<div
										className="learn-button centered"
										href="https://synthetix.community/docs/intro"
										target="_blank"
									>
										Visit the docs
									</div>
								</a>
								{/* <a
									className="column learn-community"
									href={"https://synthetix.community/docs/intro"}
									target="_blank"
									rel="noopener noreferrer"
								>
									<div className="c-img">
										<div className="icon-img">
											<img src={community}></img>
										</div>
									</div>
									<div className="p1">Community</div>
									<a
										className="purple-button centered"
										to="https://synthetix.community/docs/intro"
										target="_blank"
										rel="noopener noreferrer"
									>
										Visit the docs
									</a>
								</a> */}
							</div>
						</section>
						<section className="product-section section is-padded">
							<div className="section-title is-white is-large w-auto fs-48 pb-60">
								The Synthetix dApps
							</div>
							<div className="columns is-centered product-boxes">
								<a
									className="product-column"
									href={synthetixExchangeUrl}
									target="_blank"
									rel="noopener noreferrer"
								>
									<div className="c-top">TRADING:</div>
									<div className="c-mid">
										<img src={icoUser4} alt="Synthetix.Exchange" />
									</div>
									<div className="c-bottom">
										<div className="p2">EXCHANGE</div>
										<div className="beta-badge"></div>
										<div className="p3">
											Exchange Synths without a counterparty
										</div>
									</div>
								</a>
								<a
									className="product-column"
									href={mintrUrl}
									target="_blank"
									rel="noopener noreferrer"
								>
									<div className="c-top">STAKING:</div>
									<div className="c-mid">
										<img src={icoUser3} alt="For experienced users" />
									</div>
									<div className="c-bottom">
										<div className="p2">MINTR</div>
										<div className="p3">
											Lock SNX to mint Synths and collect fees
										</div>
									</div>
								</a>
								<a
									className="product-column"
									href={dashboardUrl}
									target="_blank"
									rel="noopener noreferrer"
								>
									<div className="c-top">ANALYSIS:</div>
									<div className="c-mid">
										<img src={icoUser2} alt="For new and experienced users" />
									</div>
									<div className="c-bottom">
										<div className="p2">DASHBOARD</div>
										<div className="p3">
											An overview of the Synthetix network
										</div>
									</div>
								</a>
							</div>
						</section>
						<section className="section subscribe-section is-padded">
							<div className="container">
								{!showThanks ? (
									<Fragment>
										<div className="section-title is-white fs-36 pb-40">
											Subscribe to the Synthetix Mailing List
										</div>
										<form
											name="mailing-list"
											method="post"
											data-netlify="true"
											data-netlify-honeypot="bot-field"
											onSubmit={this.submitEmail}
										>
											<div className="sub-inputs">
												<div className="lh-1 input-field">
													<input type="hidden" name="bot-field" />
													<input
														name="emailAddress"
														type="email"
														className="input"
														placeholder="Enter your Email Address"
														value={emailAddress}
														onChange={this.handleChange}
														onInvalid={this.onInvalid}
													/>
												</div>
												<div className="lh-1 input-button">
													<button className="purple-button subscribe-button">
														Subscribe
													</button>
												</div>
											</div>
										</form>
									</Fragment>
								) : (
									<div className="sub-title pb-30">Thanks for Subscribing!</div>
								)}
							</div>
						</section>
					</div>
				</div>
				<Modal
					isOpen={isOpen}
					onRequestClose={() => {
						this.setState({ isOpen: false });
						this.pauseVideo();
					}}
					className="is-video"
				>
					<div data-vimeo-id="254987969" data-vimeo-width="840" id="video-how-it-works" />
				</Modal>
			</Layout>
		);
	}
}

export default IndexPage;

const CodeBox = () => (
	<div className="ui-box is-code code-regular mb-50">
		<span className="code-comment">
			{"//"} Initialize synthetix-js library with any signer (Metamask, Trezor, Ledger,
			PrivateKey supported)
		</span>
		<br />
		<span className="code-green">const </span>
		{"{"} SynthetixJs {"}"} = <span className="code-green">require</span>(
		<span className="code-white">'synthetix-js'</span>
		);
		<br />
		<span className="code-green">const </span> metaMaskSigner ={" "}
		<span className="code-green">new</span> SynthetixJs.signers.Metamask();
		<br />
		<span className="code-green">const </span> snxjs = new SynthetixJs(
		{"{"}
		signer: metaMaskSigner
		{"}"}
		);
		<br />
		<br />
		<span className="code-comment">
			{"//"} Transfer stablecoins to any ethereum address, wallet or smart contract
		</span>
		<br />
		<span className="code-green">const </span>
		txObj = <span className="code-green">await</span> snxjs
		<br />
		&nbsp;&nbsp;&nbsp;.StablePayments
		<br />
		&nbsp;&nbsp;&nbsp;.transfer(
		<span className="code-white">'0x5C545CA7f9D34857664FDCe6aDC22edcF1D5061f'</span>,<br />
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;snxjs.util.parseEther(
		<span className="code-white">'100'</span>
		));
	</div>
);

export const query = graphql`
	query HomePageQuery {
		site {
			siteMetadata {
				dashboardUrl
				mintrUrl
				synthetixExchangeUrl
			}
		}
		allFile(filter: { name: { eq: "index" }, sourceInstanceName: { eq: "pages" } }) {
			edges {
				node {
					childPagesJson {
						metaTitle
						metaDescription
						heading
					}
				}
			}
		}
	}
`;
