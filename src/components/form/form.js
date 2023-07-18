import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

function Form() {
	const form = useRef();
	const recaptchaRef = useRef();
	const [captchaValue, setCaptchaValue] = useState("");
	const [success, setSuccess] = useState("");
	const [failed, setFailed] = useState("");
	const [loading, setLoading] = useState(false);
	const [formDetails, setFormDetails] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleCaptchaChange = (value) => {
		setCaptchaValue(value);
	};
	const onFormChange = (event) => {
		const { name, value } = event.target;
		setFormDetails({ ...formDetails, [name]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();

		if (!captchaValue) {
			setSuccess("");
			setFailed("Please complete the captcha");
			setLoading(false);
			return;
		}
		setSuccess("");
		setFailed("");
		setLoading(true);

		const formParams = {
			name: formDetails.name,
			email: formDetails.email,
			reply_to: formDetails.email,
			message: formDetails.message,
			form_kind: "Become a member form",
		};

		const emailBody = {
			service_id: "service_g9joiv9",
			template_id: "template_fb76mvb",
			user_id: "vmiBDYQkBNsJzfQ6a",
			template_params: formParams,
		};

		fetch("https://api.emailjs.com/api/v1.0/email/send", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify(emailBody),
		}).then(
			(result) => {
				console.log(result.statusText);
				if (result.ok) {
					setSuccess(
						<>
							Thank you. <br /> Your message has been sent. TEGA will respond in
							3 business days.
						</>
					);
					setFailed("");
					setLoading(false);
				} else {
					setFailed("Something went wrong");
					setSuccess("");
					setLoading(false);
				}
			},
			(error) => {
				setFailed("Something went wrong");
				setLoading(false);
				console.log(error.statusText);
			}
		);
	};

	return (
		<section className="form">
			<div className="container">
				<form onSubmit={handleSubmit} ref={form} className="form-block">
					<div className="form-block__row">
						<input
							className="form-block__input"
							type="text"
							name="name"
							placeholder="Your Name *"
							value={formDetails.name}
							onChange={onFormChange}
							required
						/>
						<input
							className="form-block__input"
							type="email"
							name="email"
							placeholder="Your Email *"
							value={formDetails.email}
							onChange={onFormChange}
							required
						/>
					</div>
					<textarea
						className="form-block__input form-block__input--area"
						type="text"
						placeholder="Your Message *"
						value={formDetails.message}
						onChange={onFormChange}
						name="message"
						required
					/>
					<div className="form-block__captcha-row">
						<ReCAPTCHA
							sitekey="6LeOAqMmAAAAAIiqXcO-aV7jHtDhO8ZkHwcEYMcW"
							onChange={handleCaptchaChange}
							ref={recaptchaRef}
							className="form-block__captcha"
						/>
					</div>
					<button type="submit" className="form-block__btn">
						{loading && <div class="loader">Loading...</div>}
						SEND
					</button>
					{success && <p className="form-block__success">{success}</p>}
					{failed && <p className="form-block__failed">{failed}</p>}
				</form>
			</div>
		</section>
	);
}
export default Form;
