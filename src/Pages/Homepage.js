import React from "react";
import CustomCarousal from "../Components/Carousal";
import CatHomePage from "../data/categoriesHomepage";

import { Button, Card, Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

export default function Homepage() {
	return (
		<React.Fragment>
			<Container>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					version="1.1"
					style={{ position: "absolute" }}
				>
					<defs>
						<filter id="squiggly-0">
							<feTurbulence
								id="turbulence"
								baseFrequency="0.02"
								numOctaves="3"
								result="noise"
								seed="0"
							/>
							<feDisplacementMap
								id="displacement"
								in="SourceGraphic"
								in2="noise"
								scale="6"
							/>
						</filter>
						<filter id="squiggly-1">
							<feTurbulence
								id="turbulence"
								baseFrequency="0.02"
								numOctaves="3"
								result="noise"
								seed="1"
							/>
							<feDisplacementMap
								in="SourceGraphic"
								in2="noise"
								scale="8"
							/>
						</filter>

						<filter id="squiggly-2">
							<feTurbulence
								id="turbulence"
								baseFrequency="0.02"
								numOctaves="3"
								result="noise"
								seed="2"
							/>
							<feDisplacementMap
								in="SourceGraphic"
								in2="noise"
								scale="6"
							/>
						</filter>
						<filter id="squiggly-3">
							<feTurbulence
								id="turbulence"
								baseFrequency="0.02"
								numOctaves="3"
								result="noise"
								seed="3"
							/>
							<feDisplacementMap
								in="SourceGraphic"
								in2="noise"
								scale="8"
							/>
						</filter>

						<filter id="squiggly-4">
							<feTurbulence
								id="turbulence"
								baseFrequency="0.02"
								numOctaves="3"
								result="noise"
								seed="4"
							/>
							<feDisplacementMap
								in="SourceGraphic"
								in2="noise"
								scale="6"
							/>
						</filter>
					</defs>
				</svg>
				<div
					className="test text-center m-3"
					style={{
						fontSize: "50px",
						fontWeight: 700,
						color: "#9B111E",
					}}
				>
					HALLOWEEN SALE!
				</div>
				<Row>
					<Col>
						<div className="mx-auto">
							<img
								style={{ minWidth: "300px" }}
								className="col-11"
								src="https://unsplash.com/photos/TT-ROxWj9nA/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY1NjgzNTI4&force=true&w=640"
								alt="adasd"
							/>
						</div>
					</Col>
					<Col>
						<div
							className="d-flex flex-column mt-5 align-items-center"
							style={{
								fontSize: "40px",
								fontWeight: 600,
								color: "grey",
							}}
						>
							<div>
								Get exclusive deals and prices on halloween
								themed products.
							</div>
							<Link to="/products/promo_night_collection">
								<Button
									className="m-4"
									style={{
										borderRadius: 0,
										fontSize: "24px",
										fontWeight: 600,
									}}
									outline
								>
									Halloween Section{" "}
									<i className="bi bi-arrow-right"></i>
								</Button>
							</Link>
						</div>
					</Col>
				</Row>
				<div className="m-4">
					<div
						style={{
							fontSize: "40px",
							fontWeight: 700,
							color: "grey",
						}}
					>
						Featured Categories
					</div>
					<div className="d-flex justify-content-center m-3">
						<div className="d-flex flex-wrap">
							{CatHomePage.map((item) => {
								return (
									<div
										className="avatar-big m-4"
										key={item.name}
									>
										<Link
											style={{
												textDecoration: "none",
												color: "gray",
												fontWeight: "500",
											}}
											to={`/products/${item.category}`}
										>
											<img
												className="avatar-img rounded-circle"
												src={item.imgUrl}
												alt="asdasd"
											/>
											<div className="text-center m-2">
												{item.name}
											</div>
										</Link>
									</div>
								);
							})}
						</div>
					</div>
				</div>
				<div className="m-4">
					<div
						style={{
							fontSize: "40px",
							fontWeight: 700,
							color: "grey",
						}}
					>
						Featured Products
					</div>
					<div className="d-flex justify-content-center">
						<CustomCarousal />
					</div>
				</div>
				<div className="m-4">
					<div
						style={{
							fontSize: "40px",
							fontWeight: 700,
							color: "grey",
						}}
					>
						About Us
					</div>
					<Row>
						<Col>
							<div
								className="d-flex flex-column mt-5 align-items-center"
								style={{
									fontSize: "34px",
									fontWeight: 600,
									color: "grey",
								}}
							>
								<div className="m-1 my-3">
									We are a sincere e-commerce start up with the
									goal of providing our customers the best
									they can get with their money.
								</div>
							</div>
						</Col>
						<Col>
							<div className="m-1">
								<img
									style={{ maxWidth: "300px" }}
									className="col-11"
									src="forev21.png"
									alt="adasd"
								/>
							</div>
						</Col>
					</Row>
				</div>
			</Container>
			<div className="mt-5">
				<Footer />
			</div>
		</React.Fragment>
	);
}
