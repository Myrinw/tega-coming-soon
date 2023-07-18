import HeroBig from "../../components/hero-big/hero-big";
import Members from "../../components/members/members";
import { useRef } from "react";
import { scrollOnClick } from "../../utils/utils";

function Faq() {
	const pledgeOne = useRef();
	const pledgeTwo = useRef();
	const pledgeThree = useRef();
	const pledgeFour = useRef();
	const pledgeFive = useRef();
	const pledgeSix = useRef();
	const pledgeSeven = useRef();

	return (
		<div>
			<HeroBig />
			<section className="list">
				<div className="container">
					<ol className="list__list">
						<li
							className="list__bullet"
							onClick={() => scrollOnClick(pledgeOne)}
						>
							Preparing Aspiring Futures Traders for Live Futures Markets
						</li>
						<li
							className="list__bullet"
							onClick={() => scrollOnClick(pledgeTwo)}
						>
							Providing Equal Opportunity for Aspiring Futures Traders
						</li>
						<li
							className="list__bullet"
							onClick={() => scrollOnClick(pledgeThree)}
						>
							Providing a Fair, Objective and Low Risk Environment for Aspiring
							Futures Traders
						</li>
						<li
							className="list__bullet"
							onClick={() => scrollOnClick(pledgeFour)}
						>
							Practicing Transparent Business Policies
						</li>
						<li
							className="list__bullet"
							onClick={() => scrollOnClick(pledgeFive)}
						>
							Rejecting Deceptive Marketing
						</li>
						<li
							className="list__bullet"
							onClick={() => scrollOnClick(pledgeSix)}
						>
							Educating Aspiring Futures Traders on the Risks Associated with
							Trading
						</li>
						<li
							className="list__bullet"
							onClick={() => scrollOnClick(pledgeSeven)}
						>
							Where appropriate, implementing independent compliance and audit
							protocols so aspiring futures traders can objectively compare
							among trader evaluation firms
						</li>
					</ol>
				</div>
			</section>
			<section ref={pledgeOne} className="pledge">
				<div className="container">
					<h3 className="pledge__title">
						Preparing Aspiring Futures Traders for Live Futures Markets
						<div className="pledge__number">01</div>
					</h3>
					<div className="pledge__line"></div>
					<p className="pledge__text">
						<strong>TEGA</strong> Members are primarily focused on helping the
						aspiring futures trader community learn and develop trading and risk
						management skills in a low risk, real-time simulated environment.
						<strong>TEGA</strong> Members strongly believe that the experience
						of simulated trading, as experiential learning, is a valuable
						educational piece that will help increase the likelihood of trader
						success. Members provide a real-time simulated trading environment
						to help aspiring futures traders safely learn how to trade and to
						develop the skills and the discipline necessary to be more prepared
						for live trading, whether it be their personal or proprietary
						capital. <strong>TEGA</strong> Members believe the service provided
						is good for the trading community and the financial industry as a
						whole.
					</p>
				</div>
			</section>
			<section ref={pledgeTwo} className="pledge">
				<div className="container">
					<h3 className="pledge__title">
						Providing Equal Opportunity for Aspiring Futures Traders
						<div className="pledge__number">02</div>
					</h3>
					<div className="pledge__line"></div>
					<p className="pledge__text">
						<strong>TEGA</strong> Members firmly believe that success in trading
						is not exclusively contingent on a formal or professional
						background, and that the current technological environment has
						opened up opportunities for trading in a democratic way. While in
						the past, trading was often the exclusive domain of a closed, small
						group of professionals, non-professional traders are testing their
						mettle in the market in growing numbers. <strong>TEGA</strong>{" "}
						Members endeavor to support the rights of, and provide opportunities
						for aspiring futures traders to join the professional trading
						industry, by testing themselves through an objective examination and
						joining a proprietary trading firm as professional traders.
						<br /> <br />
						Except where legally prohibited, <strong>TEGA</strong> Members
						commit to provide aspiring futures traders, regardless of physical
						location, race, religious beliefs, age, gender, income level or
						other differentiation, with access to a process that objectively
						measures performance and ultimately leads to the possibility of
						trading proprietary capital for those who meet the applicable
						standards.
					</p>
				</div>
			</section>
			<section ref={pledgeThree} className="pledge">
				<div className="container">
					<h3 className="pledge__title">
						Provide a Fair, Objective and Low Risk Environment for Aspiring
						Futures Traders
						<div className="pledge__number">03</div>
					</h3>
					<div className="pledge__line"></div>
					<p className="pledge__text">
						<strong>TEGA</strong> Members undertake to provide an objective and
						low risk environment for aspiring futures traders to receive
						exposure to markets. Accordingly, <strong>TEGA</strong> Members
						commit to the following principles:
						<br />
						<br />
						<ul>
							<li className="pledge__list">
								Provide an objective service for aspiring futures trader to have
								their trading evaluated
							</li>
							<li className="pledge__list">
								Provide aspiring futures traders with the option of at least one
								live third party data feed connectivity service for their
								evaluation
							</li>
							<li className="pledge__list">
								Provide aspiring futures traders with the option of at least one
								third party trading platform for their evaluation
							</li>
							<li className="pledge__list">
								Ensure the impartiality of and prevention of manipulation of any
								trades made over the course of the examination, and commit to
								non interference or manipulation with any part of the data feed
							</li>
							<li className="pledge__list">
								Commit to respond in a reasonably prompt and effective manner to
								any customer support, billing, and technical support requests,
								including directing traders with platform or data inquiries to
								their respective providers
							</li>
							<li className="pledge__list">
								Ensure that successful candidates who successfully complete
								their evaluations are reasonably promptly onboarded to
								proprietary trading accounts, without inappropriate delays
							</li>
							<li className="pledge__list">
								Recognize that they are not registered Commodity Trading
								Advisors (CTA’s) and refrain from providing any specific or
								tailored trading advice to aspiring futures traders.
							</li>
						</ul>
					</p>
				</div>
			</section>
			<section ref={pledgeFour} className="pledge">
				<div className="container">
					<h3 className="pledge__title">
						Practice Transparent Business Policies
						<div className="pledge__number">04</div>
					</h3>
					<div className="pledge__line"></div>
					<p className="pledge__text">
						<strong>TEGA</strong> Members undertake to provide an objective and
						low risk environment for aspiring futures traders to receive
						exposure to markets. Accordingly, <strong>TEGA</strong> Members
						commit to the following principles:
						<br />
						<br />
						<ul>
							<li className="pledge__list">
								Provide an objective service for aspiring futures trader to have
								their trading evaluated
							</li>
							<li className="pledge__list">
								Provide aspiring futures traders with the option of at least one
								live third party data feed connectivity service for their
								evaluation
							</li>
							<li className="pledge__list">
								Provide aspiring futures traders with the option of at least one
								third party trading platform for their evaluation
							</li>
							<li className="pledge__list">
								Ensure the impartiality of and prevention of manipulation of any
								trades made over the course of the examination, and commit to
								non interference or manipulation with any part of the data feed
							</li>
							<li className="pledge__list">
								Commit to respond in a reasonably prompt and effective manner to
								any customer support, billing, and technical support requests,
								including directing traders with platform or data inquiries to
								their respective providers
							</li>
							<li className="pledge__list">
								Ensure that successful candidates who successfully complete
								their evaluations are reasonably promptly onboarded to
								proprietary trading accounts, without inappropriate delays
							</li>
							<li className="pledge__list">
								Recognize that they are not registered Commodity Trading
								Advisors (CTA’s) and refrain from providing any specific or
								tailored trading advice to aspiring futures traders.
							</li>
						</ul>
					</p>
				</div>
			</section>
			<section ref={pledgeFive} className="pledge">
				<div className="container">
					<h3 className="pledge__title">
						Reject Deceptive Marketing Practices
						<div className="pledge__number">05</div>
					</h3>
					<div className="pledge__line"></div>
					<p className="pledge__text">
						<strong>TEGA</strong> Members understand that good trading takes
						time to develop and learn. Members commit to the rejection of
						negative, deceptive, malicious, inflammatory, fraudulent or
						otherwise inappropriate marketing practices. Specifically, marketing
						must never present the examinations (or the examination process) as
						a path to wealth or an extravagant lifestyle and shall always be
						accompanied by appropriate disclaimers. The difficulty of long-term
						successful trading shall not be minimized, and <strong>TEGA</strong>{" "}
						Members shall not present the lifestyle available to successful
						traders in a manner that suggests that such lifestyle is achieved
						except by a minority of traders.
					</p>
				</div>
			</section>
			<section ref={pledgeSix} className="pledge">
				<div className="container">
					<h3 className="pledge__title">
						Educate Traders on the Risks Associated with Trading
						<div className="pledge__number">06</div>
					</h3>
					<div className="pledge__line"></div>
					<p className="pledge__text">
						<strong>TEGA</strong> Members commit to educating aspiring futures
						traders about the risks associated with trading. All{" "}
						<strong>TEGA</strong> Members shall provide an objective,
						non-product specific trading education that emphasizes risk
						management as the fundamental principle underlying responsible
						trading. This information can be provided through appropriate media,
						including but not limited to:
						<br />
						<br />
						<ul>
							<li className="pledge__list">Blog or news articles</li>
							<li className="pledge__list">Informational videos</li>
							<li className="pledge__list">Social media sites</li>
							<li className="pledge__list">Email newsletters</li>
						</ul>
					</p>
				</div>
			</section>
			<section ref={pledgeSeven} className="pledge pledge--last">
				<div className="container">
					<h3 className="pledge__title">
						Submit to Independent Compliance and Audit Reviews
						<div className="pledge__number">07</div>
					</h3>
					<div className="pledge__line"></div>
					<p className="pledge__text">
						All <strong>TEGA</strong> Members agree to periodic examinations by
						independent examiners. Any material issues may be reported to, and
						disclosed by, <strong>TEGA</strong> . Instances of egregious or
						continued non-compliance with applicable <strong>TEGA</strong>{" "}
						requirements may result in disciplinary action up to and including
						expulsion from the association.
					</p>
				</div>
			</section>
			<Members />
		</div>
	);
}

export default Faq;
