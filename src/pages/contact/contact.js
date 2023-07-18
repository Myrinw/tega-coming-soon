import Hero from "../../components/hero/hero";
import ContactForm from "../../components/contactform/contactform";
import Members from "../../components/members/members";

function Contact() {
	return (
		<div>
			<Hero title="CONTACT US"></Hero>
			<section className="title-text">
				<div className="container">
					<h4 className="faqs__question">Stay connected</h4>
					<div className="faqs__line"></div>
					<p className="faqs__answer">
						If you are interested in joining{" "}
						<strong className="green">TEGA</strong>, or have questions about
						meeting compliance requirements to join, please contact us so we can
						help you get on the path to membership.
					</p>
				</div>
			</section>
			<ContactForm />
			<Members />
		</div>
	);
}

export default Contact;
