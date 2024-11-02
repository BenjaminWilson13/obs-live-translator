import { FormEvent, useState } from "react";

export default function SettingsComponent() {
	const [textDuration, setTextDuration] = useState("");
	const [outputOptions, setOutputOptions] = useState("");
	const [inputLanguage, setInputLanguage] = useState("");
	const [outputLanguage, setOutputLanguage] = useState("");
	const [subtitleStyling, setSubtitleStyling] = useState("");
	const availableLanguages = ["English", "Spanish"];
	function handleSubmit(event: FormEvent) {
		event.preventDefault();
		return undefined;
	}
	return (
		<>
			<div className='outer-box'>
				<form onSubmit={handleSubmit}>
					<div>
						<label htmlFor="textDuration">
							Text Duration
						</label>
						<input name="textDuration" value={textDuration} onChange={e => setTextDuration(e.target.value)} />
					</div>
					<div>
						<label htmlFor="outputOptions">
							Output Options
						</label>
						<input name="outputOptions" value={outputOptions} onChange={e => setOutputOptions(e.target.value)} />
					</div>
					<div>
						<label htmlFor="inputLanguage">
							Spoken Language
						</label>
						<select id="inputLanguage" value={inputLanguage} onChange={e => setInputLanguage(e.target.value)}>
							{availableLanguages.map((language) => <option value={language}>{language}</option>)}
						</select>
					</div>
					<div>
						<label htmlFor="outputLanguage">
							Text Language
						</label>
						<select id="outputLanguage" value={outputLanguage} onChange={e => setOutputLanguage(e.target.value)}>
							{availableLanguages.map((language) => <option value={language}>{language}</option>)}
						</select>					</div>
					<div>
						<label htmlFor="subtitleStyling">
							Subtitle CSS
						</label>
						<input name="subtitleStyling" value={subtitleStyling} onChange={e => setSubtitleStyling(e.target.value)} />
					</div>
				</form>
			</div>
		</>
	);
}