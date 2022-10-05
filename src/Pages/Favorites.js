import React from "react";
import { Col, Container, Row } from "reactstrap";

export default function Favorites() {
	return (
		<div className="page-content">
			<Container>
				<Row>
					<Col className="font-weight-800 display-5">Favorites</Col>
				</Row>
				<Row>
					<Col> All your favorites in one place.
                    </Col>
				</Row>
			</Container>
		</div>
	);
}
