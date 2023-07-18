function HeroMain(props) {
	return (
		<section className="hero hero--main">
			<img className="coming-logo" src={require("../../img/logo.png")} alt="" />
			<img
				className="construction-logo"
				src={require("../../img/construction.png")}
				alt=""
			/>

			{/* <img
					className="hero__image"
					src={require("../../img/homegraphs.png")}
					alt=""
				/> */}
		</section>
	);
}

export default HeroMain;
