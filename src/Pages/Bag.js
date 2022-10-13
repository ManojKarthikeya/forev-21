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
	Col,
	Container,
	Row,
} from "reactstrap";
import { auth } from "../firebaseinitial";
import {
	addOrder,
	addToShoppingBag,
	getOrders,
	getShoppingBag,
	removeFromShoppingBag,
} from "../store/actions";

export default function Bag({ user }) {
	const dispatch = useDispatch();
	const [bagList, setBagList] = useState([]);
	const [orderList, setOrderList] = useState([]);
	const [tprice, setTPrice] = useState(0);

	const { shoppingBag, orders } = useSelector((state) => ({
		shoppingBag: state.reducer.shoppingBag,
		orders: state.reducer.orders,
	}));

	useEffect(() => {
		dispatch(getShoppingBag());
		dispatch(getOrders());
	}, [user, dispatch]);

	useEffect(() => {
		if (orders) {
			setOrderList(orders);
		}
	}, [orders, user]);

	useEffect(() => {
		setBagList(shoppingBag);
	}, [shoppingBag, user]);

	useEffect(() => {
		let sum = 0;
		bagList.forEach((item) => {
			sum += item.ListPrice;
		});
		setTPrice(Math.round(sum));
	}, [bagList]);
	console.log(orderList);
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
					<div>
						{bagList.map((product) => (
							<Card
								className="col-9 m-0 p-0"
								style={{
									borderRadius: 0,
								}}
							>
								<CardBody className="d-flex flex-row p-0 m-0 mb-3">
									<img
										className="m-3 mb-0"
										src={`${product.DefaultProductImage}`}
										alt="img"
										style={{ maxWidth: "150px" }}
									/>
									<div className="mx-2 my-3 d-flex flex-column justify-content-between w-100">
										<div>
											<div className="d-flex justify-content-between">
												<div
													style={{
														fontSize: "26px",
														fontWeight: 700,
													}}
												>
													{product.DisplayName}
												</div>
												<div
													className="text-end mx-3"
													style={{
														cursor: "pointer",
													}}
													onClick={() => {
														dispatch(
															removeFromShoppingBag(
																bagList.filter(
																	(prod) =>
																		prod.productId !==
																		product.productId
																)
															)
														);
													}}
												>
													<i
														style={{
															fontSize: "28px",
														}}
														className="bi bi-x"
													/>
												</div>
											</div>
											<div
												style={{
													fontSize: "24px",
													fontWeight: 700,
												}}
											>
												${product.ListPrice}
											</div>
										</div>
										<div className="text-secondary">
											<div
												style={{
													fontSize: "24px",
													fontWeight: 700,
												}}
											>
												Size:{" " + product.productSize}
											</div>
											<div
												style={{
													fontSize: "24px",
													fontWeight: 700,
												}}
											>
												Quantity: 1
											</div>
										</div>
									</div>
								</CardBody>
							</Card>
						))}
					</div>
					<div className="col-9">
						<div
							style={{
								fontSize: "26px",
								fontWeight: 700,
							}}
							className="text-end m-3 mb-0"
						>
							Total Price: ${tprice.toString()}
						</div>
						<div className="text-end m-3" style={{}}>
							<Button
								style={{
									fontSize: "18px",
									fontWeight: 500,
									borderRadius: 0,
								}}
								className="text-end "
								onClick={() => {
									dispatch(
										addOrder([
											...orderList,
											{
												orderId: Math.round(
													Math.random() * 1000
												),
												orderDate:
													Date.now().toString(),
												products: bagList,
												totalPrice: tprice,
											},
										])
									);
								}}
							>
								Check out
							</Button>
						</div>
					</div>
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
