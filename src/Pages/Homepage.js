import React from "react";
import CustomCarousal from "../Components/Carousal";
import CatHomePage from "../data/categoriesHomepage";

import { Card, Container } from "reactstrap";
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
					className="test text-center"
					style={{
						fontSize: "50px",
						fontWeight: 700,
						color: "#9B111E",
					}}
				>
					HALLOWEEN SALE!
				</div>
				{/* <div
					className="text-center"
					style={{
						fontSize: "25px",
						fontWeight: 700,
						color: "grey",
					}}
				>
					Spooky dresses that are also fabulous
				</div> */}
				<div>
					<img
						src="https://unsplash.com/photos/TT-ROxWj9nA/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY1NjgzNTI4&force=true&w=640"
						alt="adasd"
					/>
				</div>
				<div className="m-3">
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
				<div className="m-3">
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
			</Container>
			<div className="mt-5">
				<Footer />
			</div>
		</React.Fragment>
	);
}
