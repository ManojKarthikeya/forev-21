import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
	Button,
	Card,
	CardBody,
	CardGroup,
	CardSubtitle,
	CardTitle,
	Container,
} from "reactstrap";
import { auth } from "../firebaseinitial";
import {
	addToShoppingBag,
	getShoppingBag,
	removeFromShoppingBag,
} from "../store/actions";

export default function Bag({ user }) {
	const dispatch = useDispatch();
	const [bagList, setBagList] = useState([]);
	const [bagIdList, setBagIdList] = useState([]);

	const { shoppingBag } = useSelector((state) => ({
		shoppingBag: state.reducer.shoppingBag,
	}));

	useEffect(() => {
		dispatch(getShoppingBag());
	}, [user]);

	useEffect(() => {
		setBagList(shoppingBag);
		setBagIdList(shoppingBag.map((item) => item.ProductId));
	}, [shoppingBag, user]);

	console.log(shoppingBag);
	if (bagList.length) {
		return (
			<div>
				<Container>
					<div className="mx-3 my-3">
						<div className="display-5" style={{ fontWeight: 700 }}>
							Shopping Bag
						</div>
						<div
							className="text-secondary"
							style={{ fontWeight: 700 }}
						>
							Check out and Place an order here!
						</div>
					</div>
					<CardGroup>
						{bagList.map((product) => (
							<Card
								className="col-4"
								style={{
									borderRadius: 0,
									minWidth: "300px",
									maxWidth: "300px",
								}}
								onClick={() => {
									console.log("asdasd");
								}}
							>
								<img
									className="m-3 mb-0"
									src={`${product.DefaultProductImage}`}
									alt="img"
								/>
								<CardBody className="d-flex flex-column">
									<div>
										<CardTitle className="m-0">
											<div
												style={{
													fontWeight: 700,
												}}
											>
												{product.DisplayName}
											</div>
										</CardTitle>
										<CardSubtitle
											className="text-secondary"
											style={{ fontWeight: 700 }}
										>
											<div className="d-flex justify-content-between mt-1 mb-2">
												<span>{product.Brand}</span>
												<span
													style={{
														fontSize: "19px",
														fontWeight: "500",
													}}
												>
													${product.ListPrice}
												</span>
											</div>
										</CardSubtitle>
									</div>
									<div
										className="d-flex justify-content-between"
										style={{ marginTop: "auto" }}
									>
										<div>
											<Button
												color="success"
												className="me-1"
												style={{ borderRadius: 0 }}
											>
												<i className="bi bi-bag mx-2"></i>
												Add to Bag
											</Button>
											<Link
												to={`/product/${product.ProductId}`}
											>
												<Button
													style={{ borderRadius: 0 }}
												>
													<i className="bi bi-box-arrow-up-right mx-1"></i>{" "}
												</Button>
											</Link>
										</div>
										<div>
											{bagIdList.includes(
												product.ProductId
											) ? (
												<i
													style={{
														fontSize: "25px",
														color: "#de3163",
													}}
													onClick={() => {
														dispatch(
															removeFromShoppingBag(
																product
															)
														);
													}}
													className="bi bi-heart-fill"
												></i>
											) : (
												<i
													style={{
														fontSize: "25px",
														color: "#de3163",
													}}
													onClick={() => {
														dispatch(
															addToShoppingBag(
																product
															)
														);
													}}
													className="bi bi-heart text-sm-end"
												></i>
											)}
										</div>
									</div>
								</CardBody>
							</Card>
						))}
					</CardGroup>
				</Container>
			</div>
		);
	} else {
		return (
			<Container fluid>
				<div
					style={{
						position: "absolute",
						left: "50%",
						top: "50%",
						transform: "translate(-50%,-50%)",
					}}
				>
					<div className="display-5">Your Shopping Bag is Empty</div>
					<div className="text-sm-center">
						Add products to your bag to check out.
					</div>
				</div>
			</Container>
		);
	}
}
