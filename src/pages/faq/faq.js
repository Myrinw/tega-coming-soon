import { useRef, useEffect } from "react";
import Hero from "../../components/hero/hero";
import Members from "../../components/members/members";
import { useLocation } from "react-router-dom";
import { scrollOnClick } from "../../utils/utils";
import { Link } from "react-router-dom";

function Faq() {
	const members_faq = useRef();
	const traders_faq = useRef();
	const why_join = useRef();
	const location = useLocation();

	useEffect(() => {
		if (location.state) {
			const { scroll } = location.state;
			if (scroll === "why-join") {
				scrollOnClick(why_join);
			}
		}
	});

	return (
		<div>
			<Hero title={"FAQ"} />
			{/* <section className="text-block-section">
				<div className="container">
					<p className="text-block">
						
					</p>
				</div>
			</section> */}

			<div className="container">
				<div className="faq-qwrap">
					<button
						className="text-block text-block--sm"
						onClick={() => scrollOnClick(members_faq)}
					>
						<span className="text-block__title">Organizations</span>
						See why your entity should join.
					</button>
					<button
						className="text-block text-block--sm"
						onClick={() => scrollOnClick(traders_faq)}
					>
						<span className="text-block__title">Traders</span>
						Understand TEGA and the sim-to-funded business
					</button>
				</div>
			</div>

			<section className="faqs">
				<div className="container">
					<h3 className="faqs__title" ref={members_faq}>
						ORGANIZATIONS
					</h3>
					<div ref={why_join}>
						<h4 className="faqs__question">Why should I join TEGA?</h4>
						<div className="faqs__line"></div>
						<p className="faqs__answer">
							There are two main reasons for joining our association. The first
							and most important is to commit to a transparent set of protocols,
							guidelines and compliance procedures that can verify the fairness
							of your business model. The second is to join a group of your
							associates who share similar interests and concerns, and have your
							voice added to the representation of our industry in dealing with
							third parties.
						</p>
					</div>
					<div>
						<h4 className="faqs__question">Why should my company join TEGA?</h4>
						<div className="faqs__line"></div>
						<p className="faqs__answer">
							By joining TEGA, you work towards a more transparent industry.
							Your company gains access to a streamlined auditing process to
							maximize compliance, which will increase the longevity of your
							business and industry. Join a group of associates who share the
							same interest and have your voice added to the representation of
							the industry.
						</p>
					</div>
					<div>
						<h4 className="faqs__question">
							Who conducts the third party compliance reports?
						</h4>
						<div className="faqs__line"></div>
						<p className="faqs__answer">
							A prestigious law firm with immense experience dealing in capital
							markets and financial regulatory issues is contracted by the
							association to provide standardized annual compliance reports of
							each member.
						</p>
					</div>
					<div>
						<h4 className="faqs__question">
							What are the requirements of joining TEGA?
						</h4>
						<div className="faqs__line"></div>
						<p className="faqs__answer">
							Prospective TEGA members must bring their business practices
							inline with our association Pledge and submit to annual compliance
							audits. Please <Link to="/pledge">click here</Link> to be directed
							to the full text of our Pledge.
						</p>
					</div>
					<h3 className="faqs__title faqs__title--mt" ref={traders_faq}>
						TRADERS
					</h3>
					<div>
						<h4 className="faqs__question">
							What differentiates TEGA members from other trader evaluation
							firms?
						</h4>
						<div className="faqs__line"></div>
						<p className="faqs__answer">
							TEGA members commit to an industry pledge and to submit to annual
							third party compliance audits. TEGA members work according to
							standardized, transparent business practices and are held
							accountable by the association for any lapses. Non-TEGA members
							exist outside of the association, and may or may not commit to
							fair and acceptable business practices.
						</p>
					</div>
					<div>
						<h4 className="faqs__question">
							What is the Pledge that TEGA members must abide by?
						</h4>
						<div className="faqs__line"></div>
						<p className="faqs__answer">
							Please <Link to="/pledge">click here</Link> to be directed to the
							full text of our Pledge.
						</p>
					</div>
					<div>
						<h4 className="faqs__question">
							How can I report an issue with the company I work with?
						</h4>
						<div className="faqs__line"></div>
						<p className="faqs__answer">
							If the company you work with is a TEGA member, you should submit
							any queries you have to their customer or technical support staff.
							TEGA does not provide customer support services and cannot resolve
							issues between companies and their respective customers. If you
							believe that you have an unresolvable issue, or that a TEGA member
							has violated their pledge in working with you, you may{" "}
							<Link to="/contact">click here</Link> to submit a complaint form
							to the association. Upon submission you will receive an automatic
							reply confirming submission. Please note that any such submissions
							are for internal records and auditing purposes only, and will not
							be personally handled by TEGA. <br />
							<br />
							If the company you work with is not a TEGA member, please{" "}
							<Link to="/contact">click here</Link> to fill out a form for
							submission. Upon submission you will receive an automatic reply
							confirming submission. Please note that any such submissions are
							for internal records and auditing purposes only, and will not be
							personally handled by TEGA.
						</p>
					</div>
					<div>
						<h4 className="faqs__question">
							Who conducts the third party compliance reports?
						</h4>
						<div className="faqs__line"></div>
						<p className="faqs__answer">
							A prestigious law firm with immense experience dealing in capital
							markets and financial regulatory issues is contracted by the
							association to provide standardized annual compliance reports of
							each member.
						</p>
					</div>
				</div>
			</section>
			<Members />
		</div>
	);
}

export default Faq;
