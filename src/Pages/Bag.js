import React, { useState } from "react";
import {
	Button,
	Card,
	CardBody,
	CardSubtitle,
	CardTitle,
	Col,
	Container,
	Input,
	Label,
	Row,
} from "reactstrap";

export default function Bag({ user }) {
	const [bagitems, setBagItems] = useState([
		{ name: "shirt", price: "$400", size: "m" },
		{ name: "pant", price: "$200", size: "l" },
	]);
	return (
		<div className="page-content">
			<Container>
				<Row>
					<div
						className="display-6 text-center"
						style={{ fontWeight: "500" }}
					>
						Shopping Bag
					</div>
				</Row>
				<Row>
					<Col className="col-7">
						<Card>
							{bagitems ? (
								<CardBody>
									<CardTitle tag={"h3"}>
										YOUR SHOPPING BAG IS EMPTY!
									</CardTitle>
									{user ? (
										<CardSubtitle>
											Your shopping bag is empty.
										</CardSubtitle>
									) : (
										<CardSubtitle>
											Sign in to save or access already
											saved items in your shopping bag.
										</CardSubtitle>
									)}
								</CardBody>
							) : null}
						</Card>
					</Col>
					<Col className="col-4">
						<Card>
							<CardBody>
								<Row className="row-cols-lg-auto g-3 align-items-center">
									<Col>
										<Input />
									</Col>
									<Col>
										<Button>Redeem</Button>
									</Col>
								</Row>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
