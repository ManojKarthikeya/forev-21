import React from "react";
import { Card, CardBody, CardFooter, CardHeader, CardLink, CardText, Col, Row } from "reactstrap";

export default function SignIn(props) {
	return (
		<React.Fragment>
			<Card>
				<CardHeader>
					<Row>
						<Col>
							<h2 className="display-6 mx-3">Log in</h2>
						</Col>
						<Col className="text-sm-end">
							<h3>
								<i
									onClick={() => {
										props.togglefun();
									}}
									style={{ cursor: "pointer" }}
									className="bi bi-x "
								></i>
							</h3>
						</Col>
					</Row>
				</CardHeader>
				<CardBody className="px-5">hehe</CardBody>
				<CardFooter>
					<CardText className="mx-3 p-1">
						Don't have an account?{" "}
						<CardLink
							onClick={() => {
								props.setLog(!props.log);
							}}
						>
							Register
						</CardLink>
					</CardText>
				</CardFooter>
			</Card>
		</React.Fragment>
	);
}
