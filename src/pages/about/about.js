import Hero from "../../components/hero/hero";
import IntroText from "../../components/intro-text/intro-text";
import Members from "../../components/members/members";
import { useLocation } from "react-router-dom";
import { useRef, useEffect } from "react";
import { scrollOnClick } from "../../utils/utils";

function About() {
	const location = useLocation();
	const board = useRef();

	useEffect(() => {
		if (location.state) {
			if (location.state === "board") {
				scrollOnClick(board);
			}
		}
	});

	return (
		<div>
			<Hero title="WHO ARE WE?"></Hero>
			<IntroText id="about-intro" title="Who are we?">
				Located at 11 W. Jackson Suite 1700, Chicago Illinois, TEGA is a
				registered 501(c)(6) membership-based non profit trade association. TEGA
				is managed by a board of directors, and its internal staff who handle
				administrative responsibilities, manage industry outreach, and
				coordinate member affairs.
			</IntroText>

			<h3 className="greentitle mb-1" ref={board}>
				Board of Directors
			</h3>
			<p className="subtitle">Board members are rotated on an annual basis.</p>
			<section className="director director--reversed">
				<div className="director__container">
					<div className="director__flex">
						<div className="director__content">
							<h4 className="director__title">Michael Patak</h4>
							<div className="director__line"></div>
							<p className="director__text">
								Michael Patak created the funded trading concept when he
								launched Topstep in 2012. As the company’s CEO, Michael
								continues to serve as an industry thought leader and an advocate
								for the funded trading concept as the best way for retail
								traders to participate in the futures markets.
								<br />
								Michael began trading futures, while he was in college. The
								lessons learned from those early trades, about the importance of
								healthy trader behavior and risk management, have stayed with
								him and serve as Topstep’s foundation. Prior to founding
								Topstep, Michael traded Dow Jones futures on the floor of the
								CBOT.
								<br />
								His decision to join the TEGA board reflects Michael’s
								commitment to transparency and ongoing effort to maintain the
								integrity of trader evaluation and funding programs.
								<br />
								Michael holds a B.A. in economics from Iowa State University. A
								dedicated skier, Michael and his family live in Snowmass,
								Colorado.
							</p>
						</div>
						<div className="director__box director__box--spacing">
							<div className="director__quote">
								<img
									src={require("../../img/quote.png")}
									className="director__quote-icon"
									alt=""
								/>
								<p className="director__quote-text">
									TEGA is a forum for establishing and upholding the highest
									standards across funded trading programs.
								</p>
								<p className="director__quote-name">- Michael Patak</p>
							</div>
							<img
								src={require("../../img/micheal.png")}
								alt=""
								className="director__image"
							/>
						</div>
					</div>
				</div>
			</section>
			<section className="director">
				<div className="director__container">
					<div className="director__flex">
						<div className="director__content">
							<h4 className="director__title">Lindsay Duff</h4>
							<div className="director__line"></div>
							<p className="director__text">
								Lindsay Duff has been a contributor to the professional trading
								world for 17 years in a variety of roles - from trader to
								educator to advocate for the unification of standards for the
								funded trading community. As both the CEO/founder of the
								educational institute Responsible Day Trading and co-founder of
								the prop firm Uprofit, Lindsay has dedicated her career to
								supporting and guiding traders worldwide to fulfill their
								potential and achieve their trading goals. <br />
								Throughout her journey as both a trader and trading mentor,
								Lindsay has become aware that for future traders, the potential
								for success also comes the risk of encountering predatory
								companies and misguided teaching strategies - motivating her to
								make a difference as a TEGA board member and create
								accountability for other funding platforms. With a track record
								of always putting students first and being open and honest,
								Lindsay remains committed to making the trading world a better
								place for all traders.
								<br />
								Lindsay is from Sugar Land, TX, has a son, a daughter and a
								delightful dog, Duchess.
							</p>
						</div>
						<div className="director__box director__box--spacing">
							<div className="director__quote">
								<img
									src={require("../../img/quote.png")}
									className="director__quote-icon"
									alt=""
								/>
								<p className="director__quote-text">
									Our merit can be upheld and maintained when we hold ourselves
									responsible - TEGA allows us to achieve this and is a guiding
									light for the bright future of traders.
								</p>
								<p className="director__quote-name">- Lindsay Duff</p>
							</div>
							<img
								src={require("../../img/lindsay-duff.png")}
								alt=""
								className="director__image"
							/>
						</div>
					</div>
				</div>
			</section>
			<section className="director director--reversed director--last">
				<div className="director__container">
					<div className="director__flex">
						<div className="director__content">
							<h4 className="director__title">Chris Gray</h4>
							<div className="director__line"></div>
							<p className="director__text">
								Meet Chris, an accomplished Earn2Trade educational mentor and
								trading coach with over 10 years of experience in mentorship.
								Chris has a proven track record of guiding students through the
								complexities of financial landscapes, from basic concepts to
								advanced strategies. His teaching style is grounded in
								real-world experience, as he draws on his extensive background
								in the financial industry to provide students with practical
								insights and knowledge. With a passion for empowering others to
								achieve their financial goals, Chris has helped countless
								students develop the skills and confidence they need to succeed
								in the ever-evolving world of financial trading.
							</p>
						</div>
						<div className="director__box">
							<div className="director__quote">
								<img
									src={require("../../img/quote.png")}
									className="director__quote-icon"
									alt=""
								/>
								<p className="director__quote-text">
									Stay present. Your best “present” leads to your best future,
									and the rest falls into place.
								</p>
								<p className="director__quote-name">- Chris Gray</p>
							</div>
							<img
								src={require("../../img/chris.png")}
								alt=""
								className="director__image"
							/>
						</div>
					</div>
				</div>
			</section>
			<Members />
		</div>
	);
}

export default About;
