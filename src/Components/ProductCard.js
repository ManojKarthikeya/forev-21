import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

export default function ProductCard({ title, price, description, images }) {
	return (
		<Card className="col-3 p-0">
			<img src={`${images[0]}`} alt="img" />
			<CardBody>
				<CardTitle tag={'h5'}>{title}</CardTitle>
				<CardText>{description}</CardText>
			</CardBody>
		</Card>
	);
}
