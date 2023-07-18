import Select from "react-select";
import { useRef, useState, useMemo } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import countryList from "react-select-country-list";

function ContactForm() {
	const form = useRef();
	const recaptchaRef = useRef();
	const [captchaValue, setCaptchaValue] = useState("");
	const [success, setSuccess] = useState("");
	const [failed, setFailed] = useState("");
	const [loading, setLoading] = useState(false);
	const [countryValue, setCountryValue] = useState("");
	const countries = useMemo(() => countryList().getData(), []);
	const [formDetails, setFormDetails] = useState({
		company_name: "",
		street_address: "",
		name: "",
		title: "",
		email: "",
		message: "",
		zipcode: "",
	});

	const changeCountryHandler = (value) => {
		setCountryValue(value);
	};

	const handleCaptchaChange = (value) => {
		setCaptchaValue(value);
	};

	const onFormChange = (event) => {
		const { name, value } = event.target;
		setFormDetails({ ...formDetails, [name]: value });
	};

	const selectChange = (event) => {
		SetFormKind(event);
		setSuccess("");
		setFailed("");
	};

	const options = [
		{
			value: "applications",
			label: "Applications",
			message:
				"Please send us the company name, registered address, the name and title of the person responsible for the applications and TEGA will respond in 3 business days.",
		},
		{
			value: "general-inquiry",
			label: " General Inquiry",
			message: "Please explain the nature of your inquiry.",
		},
		{
			value: "complaints",
			label: "Complaints",
			message:
				"Please detail the nature of your complaint about a TEGA member entity. Note that while TEGA files and records complaints about non-member organizations in the industry, it has no recourse against the organization unless it is a TEGA member.",
		},
	];

	const [formKind, SetFormKind] = useState(options[0]);

	const handleSubmit = async (e) => {
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

		let formParams;

		if (formKind.value === "applications") {
			formParams = {
				form_kind: formKind.value,
				company_name: formDetails.company_name,
				country: countryValue.label,
				street_address: formDetails.street_address,
				zipcode: formDetails.zipcode,
				name: formDetails.name,
				title: formDetails.title,
				email: formDetails.email,
				reply_to: formDetails.email,
				message: formDetails.message,
			};
		} else {
			formParams = {
				form_kind: formKind.value,
				name: formDetails.name,
				email: formDetails.email,
				reply_to: formDetails.email,
				message: formDetails.message,
			};
		}

		const emailBody = {
			service_id: "service_g9joiv9",
			template_id: "template_fwioeof",
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
				setSuccess("");
				setLoading(false);
				console.log(error.statusText);
			}
		);
	};

	return (
		<section className="form">
			<div className="container">
				<form ref={form} className="form-block" onSubmit={handleSubmit}>
					<p className="form-block__label">Select one:</p>
					<Select
						defaultValue={options[0]}
						options={options}
						onChange={selectChange}
						styles={{
							control: (baseStyles, state) => ({
								...baseStyles,
								borderColor: "#04724d",
								fontWeight: "bold",
								color: "#616161",
								paddingTop: "4px",
								paddingBottom: "4px",
								marginBottom: "24px",
								borderRadius: "0",
							}),
						}}
					/>
					<p className="form-block__message">{formKind.message}</p>
					{formKind.value === "applications" && (
						<>
							<input
								className="form-block__input form-block__input--half"
								type="text"
								name="company_name"
								placeholder="Company Name *"
								value={formDetails.company_name}
								onChange={onFormChange}
								required
							/>
							<div className="form-block__row">
								<input
									className="form-block__input"
									value={formDetails.street_address}
									onChange={onFormChange}
									type="text"
									name="street_address"
									placeholder="Street Address *"
									required
								/>

								<input
									className="form-block__input"
									type="text"
									placeholder="Zip *"
									value={formDetails.zipcode}
									onChange={onFormChange}
									name="zipcode"
								/>
							</div>

							<div className="form-block__row">
								<Select
									placeholder="Country"
									options={countries}
									onChange={changeCountryHandler}
									required={true}
									styles={{
										control: (baseStyles, state) => ({
											...baseStyles,
											borderColor: "#04724d",
											fontWeight: "bold",
											color: "#616161",
											paddingTop: "4px",
											paddingBottom: "4px",
											borderRadius: "0",
										}),
									}}
								/>
								<input
									className="form-block__input"
									type="text"
									placeholder="Your Title *"
									value={formDetails.title}
									onChange={onFormChange}
									name="title"
								/>
							</div>
						</>
					)}
					<div className="form-block__row">
						<input
							className="form-block__input"
							type="text"
							placeholder="Your Name *"
							value={formDetails.name}
							onChange={onFormChange}
							name="name"
							required
						/>
						<input
							className="form-block__input"
							type="email"
							placeholder="Your Email *"
							value={formDetails.email}
							onChange={onFormChange}
							name="email"
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
export default ContactForm;
