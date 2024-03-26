import React, { useState } from "react";


const Home = () => {
	const [encryptInput, setEncryptInput] = useState("");
	const [decryptInput, setDecryptInput] = useState("");
	const alphabet = Array.from("abcdefghijklmnopqrstuvwxyz");

	const encrypt = (str) => {
		if (str.length < 2 || str.includes(" ")) alert("Text must contain: a dot, more than 2 characters, no whitespaces")
		else {
			let offsetter = 5;
			let multiplier = 3;
			let newString = "";
			for (let letter of str) {
				newString += alphabet[(alphabet.indexOf(letter) + offsetter) % 26];
			}
			newString += `.${multiplier}`;
			newString += offsetter * multiplier;
			console.log("Encrypted: ", newString);
		}
	};

	const decrypt = (str) => {
		console.log("str.length: ", str.length);
		console.log("str.includes: ", str.includes(" "));
		if (str.length < 2 || str.includes(" ") || !str.includes(".")) alert("Text must contain: a dot, more than 2 characters, no whitespaces")
		else {
			let offsetter = 0;
			let multiplier = 1;
			let decypheredString = "";
			let splitStr = str.split(".");
			multiplier = splitStr[1].charAt(0);
			offsetter = splitStr[1].substring(1) / multiplier;
			for (let letter of splitStr[0]) {
				decypheredString += alphabet[(alphabet.indexOf(letter) - offsetter) % 26];
			}
			console.log("Decrypted: ", decypheredString);
		}
	};

	return (
		<div className="App text-center">
			<h1>Caesar's Cipher</h1>
			<h3>Encrypt your messages</h3>
			<div className="input-group w-50 mx-auto">
				<input
					className="form-control"
					placeholder="Enter text to encrypt"
					value={encryptInput}
					onChange={(e) => setEncryptInput(e.target.value)}
				/>
				<button className="btn btn-outline-warning btn-lg" onClick={() => encrypt(encryptInput)}>Encrypt</button>
			</div>
			<div className="input-group w-50 mx-auto">
				<input
					className="form-control"
					placeholder="Enter text to decrypt"
					value={decryptInput}
					onChange={(e) => setDecryptInput(e.target.value)}
				/>
				<button className="btn btn-outline-success btn-lg" onClick={() => decrypt(decryptInput)}>Decrypt</button>
			</div>
		</div>
	);
}

export default Home;
