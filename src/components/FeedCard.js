import { Link } from "react-router-dom";
import { Card, Col, Button } from "react-bootstrap";

function FeedCard({ id, breed }) {
	return (
		<Col sm={4} style={{ marginBottom: "50px" }}>
			<Card
				style={{
					width: "100%",
					marginBottom: "20px",
					height: "100%",
				}}>
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
				<Button variant="dark">
					<Link to={`/profile/${id}`} style={{ color: "white" }}>
						Profile
					</Link>
				</Button>
			</Card>
		</Col>
	);
}

export default FeedCard;
