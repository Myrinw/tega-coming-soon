function HeroMain(props) {
	return (
		<section className="hero hero--main">
			<div className="container">
				<img
					className="coming-logo"
					src={require("../../img/logo.png")}
					alt=""
				/>
				<img
					className="construction-logo"
					src={require("../../img/construction.png")}
					alt=""
				/>
				<p className="hero__text">
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
				</p>
				{/* <img
					className="hero__image"
					src={require("../../img/homegraphs.png")}
					alt=""
				/> */}
			</div>
		</section>
	);
}

export default HeroMain;
