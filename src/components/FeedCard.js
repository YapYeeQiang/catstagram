import { Link } from "react-router-dom";
import { Card, Col, Button } from "react-bootstrap";
import "./FeedCard.css";

function FeedCard({ id, breed }) {
	return (
		<Col sm={4} className="feedCard__col">
			<Card className="feedCard__card">
				<Card.Img
					variant="top"
					src={breed.image.url}
					width={200}
					height={300}
				/>
				<Card.Body>
					<Card.Title>{breed.name}</Card.Title>
					<Card.Text>{breed.description}</Card.Text>
				</Card.Body>
				<Link to={`/profile/${id}`} className="feedCard__link">
					<Button variant="dark">Profile</Button>
				</Link>
			</Card>
		</Col>
	);
}

export default FeedCard;
