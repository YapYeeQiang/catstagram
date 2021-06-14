import { Row } from "react-bootstrap";
import FeedCard from "./FeedCard";

function Feed({ breeds }) {
	return (
		<div className="feed">
			<br />
			<h2>Feed</h2>
			<br />
			<div>
				<Row>
					{breeds.map((breed) => (
						<FeedCard key={breed.id} id={breed.id} breed={breed} />
					))}
				</Row>
			</div>
		</div>
	);
}

export default Feed;
