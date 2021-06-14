import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import { Container, Navbar } from "react-bootstrap";

function App() {
	const [breeds, setBreeds] = useState([]);

	useEffect(() => {
		axios
			.get("https://api.thecatapi.com/v1/breeds")
			.then((res) => {
				console.log(res.data);
				setBreeds(res.data.filter((data) => data.image));
			})
			.catch((err) => console.log("Error is: ", err));
	}, []);

	return (
		<Router>
			<Container>
				<Navbar expand="lg" variant="light" bg="dark">
					<Navbar.Brand>
						<Link to="/" style={{ color: "white" }}>
							Catstagram
						</Link>
					</Navbar.Brand>
				</Navbar>
				<Switch>
					<Route exact path="/">
						<Feed breeds={breeds} />
					</Route>
					<Route exact path="/profile/:id">
						<Profile />
					</Route>
				</Switch>
			</Container>
		</Router>
	);
}

export default App;
