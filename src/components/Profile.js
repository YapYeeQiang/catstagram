import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Profile.css";

function Profile() {
	const { id } = useParams();
	const url = `https://api.thecatapi.com/v1/images/search?breed_id=${id}&limit=5`;

	const [breeds, setBreeds] = useState([]);

	useEffect(() => {
		axios
			.get(url)
			.then((res) => {
				console.log(res.data);
				setBreeds(res.data);
			})
			.catch((err) => {
				console.log("Error is: ", err);
			});
	}, [url]);

	return (
		<div className="profile">
			<br />
			<h1>{id} Profile</h1>
			<br />
			<div>
				{breeds.map((breed) => {
					return breed ? (
						<img
							key={breed.id}
							src={breed.url}
							width={200}
							height={200}
							alt=""
							className="profile__img"
						/>
					) : (
						<p>Loading...</p>
					);
				})}
			</div>
		</div>
	);
}

export default Profile;
