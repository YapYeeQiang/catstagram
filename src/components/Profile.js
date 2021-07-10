import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import axios from "axios";
import "./Profile.css";

function Profile() {
	const { id } = useParams();
	const [catNum, setCatNum] = useState(5);
	const url = `https://api.thecatapi.com/v1/images/search?breed_id=${id}&limit=${catNum}`;

	const [breeds, setBreeds] = useState([]);

	useEffect((e) => {
		axios
			.get(url)
			.then((res) => {
				console.log(res.data);
				setBreeds(res.data);
			})
			.catch((err) => {
				console.log("Error is: ", err);
			});
	}, []);

	const fetchData = (e) => {
		e.preventDefault();
		catNum > 0
			? axios
					.get(url)
					.then((res) => {
						console.log(res.data);
						setBreeds(res.data);
					})
					.catch((err) => {
						console.log("Error is: ", err);
					})
			: alert("Please type a number greater than 0!");
	};

	return (
		<div className="profile">
			<br />
			<div className="profile__header">
				<h1>{id} Profile</h1>
				<form onSubmit={(e) => fetchData(e)}>
					<input
						type="number"
						placeholder="Number of Cats"
						value={catNum}
						onChange={(e) => setCatNum(e.target.value)}
					/>
					<button className="profile__button" type="submit">
						🔍
					</button>
				</form>
			</div>
			<br />
			<div className="profile__images">
				{breeds.map((breed) => {
					console.log(breed.breeds[0]);
					return (
						<Card className="profile__card">
							<Card.Img
								variant="left"
								src={breed.url}
								width={300}
								height={300}
							/>
							<Card.Body>
								<Card.Title>{breed.breeds[0].name}</Card.Title>
								<Card.Text>{breed.breeds[0].description}</Card.Text>
							</Card.Body>
						</Card>
					);
				})}
			</div>
		</div>
	);
}

export default Profile;
