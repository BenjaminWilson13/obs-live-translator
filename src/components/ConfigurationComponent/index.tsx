import { FormEvent, useEffect, useState } from "react";

export default function ConfigurationComponent() {
	const [apiKey, setApiKey] = useState("");
	const [wsPort, setWsPort] = useState("");
	const [wsUserName, setWsUserName] = useState("");
	const [wsPassword, setWsPassword] = useState("");
	const [audioSource, setAudioSource] = useState("");
	const [availableInputs, setAvailableInputs] = useState([] as MediaDeviceInfo[]);
	useEffect(() => {
		if (!availableInputs.length) {
			navigator.mediaDevices.enumerateDevices().then((res) => {
				setAvailableInputs(res.filter((device) => device.kind === "audioinput"))
			}).catch((error) => {
				console.error("Error Accessing Media Devices: ", error)
			})
		}
	}, [availableInputs.length])
	function handleSubmit(event: FormEvent) {
		event.preventDefault();
		return undefined;
	}

	function connectToMicrosoft(event: FormEvent) {
		event.preventDefault(); 
	}
	return (
		<>
			<div className='outer-box'>
				<form onSubmit={handleSubmit}>
					<div>
						<label htmlFor="apiKey">
							Microsoft API Key
						</label>
						<input id="apiKey" name="apiKey" type="password" value={apiKey} onChange={e => setApiKey(e.target.value)} />
					</div>
					<div>
						<label htmlFor="wsPort">
							OBS Websocket Port
						</label>
						<input id="apiKey" name="wsPort" type="text" value={wsPort} onChange={e => setWsPort(e.target.value)} />
					</div>
					<div>
						<label htmlFor="wsUserName">
							OBS Websocket Username
						</label>
						<input id="apiKey" name="wsUserName" type="text" value={wsUserName} onChange={e => setWsUserName(e.target.value)} />
					</div>
					<div>
						<label htmlFor="wsPassword">
							OBS Websocket Password
						</label>
						<input id="apiKey" name="wsPassword" type="password" value={wsPassword} onChange={e => setWsPassword(e.target.value)} />
					</div>
					<div>
						<label htmlFor="audioSource">
							Audio Source
						</label>
						<select id="audioSource" value={audioSource} onChange={e => setAudioSource(e.target.value)} >
							<option value="" disabled>Select an audio source</option>
							{availableInputs.map((input) => <option key={input.deviceId} value={input.deviceId}>{input?.label || "unknown device"}</option>)}
						</select>
					</div>
					<button type="submit">Save Config</button>
				</form>
				<button onClick={connectToMicrosoft}>Connect to Microsoft</button>
			</div>
		</>
	)
}
