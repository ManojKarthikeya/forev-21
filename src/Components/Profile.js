import React, { useState } from "react";
import {
	Card,
	CardBody,
	CardFooter,
	CardGroup,
	Container,
	Row,
} from "reactstrap";
import UpdateProfile from "./UpdateProfile";

export default function Profile(props) {
	const [orders, setOrders] = useState([
		{
			date: "12-10-2022",
			orderId: "32df2t4ds",
			products: [
				{
					name: "Shirt",
					price: "3421",
					img: "https://picsum.photos/200",
					quantity: 2,
				},
				{
					name: "Pant",
					price: "1234",
					img: "https://picsum.photos/200",
					quantity: 6,
				},
				{
					name: "Shoes",
					price: "590",
					img: "https://picsum.photos/200",
					quantity: 1,
				},
			],
			totalPrice: 1234 + 3421,
		},
		{
			date: "9-1-1998",
			orderId: "ads3v22vd",
			products: [
				{
					name: "Socks",
					price: "12",
					img: "https://picsum.photos/200",
					quantity: 2,
				},
				{
					name: "Shoes",
					price: "590",
					img: "https://picsum.photos/200",
					quantity: 1,
				},
			],
			totalPrice: 12 + 590,
		},
	]);
	if (!props.user) {
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
					<div className="display-5">
						Please Login before you can view your profile.
					</div>
				</div>
			</Container>
		);
	} else {
		return (
			<div>
				<Container>
					<div className="mx-3 my-3">
						<div className="display-5" style={{ fontWeight: 700 }}>
							My Profile
						</div>
						<div
							className="text-secondary"
							style={{ fontWeight: 700 }}
						>
							What can we help you with?
						</div>
					</div>
					<Row>
						<div className="mx-5 my-3">
							<div
								className="display-6 text-secondary"
								style={{ fontWeight: 700 }}
							>
								My Orders
							</div>
							<CardGroup className="w-100 d-flex p-3 flex-wrap">
								{orders.map((order) => (
									<Card
										className=""
										style={{
											borderRadius: 0,
											minHeight: "30vh",
											maxWidth: "25%",
										}}
									>
										<CardBody className="d-flex flex-column w-100">
											<div
												className="d-flex justify-content-between w-100"
												style={{ fontWeight: 700 }}
											>
												<div>
													Order Id :{" "}
													<span className="text-secondary">
														{order.orderId}
													</span>
												</div>
												<div>{order.date}</div>
											</div>
											<div className="d-flex w-100 flex-wrap">
												{order.products.map(
													(product) => (
														<div className="w-100 m-4">
															<div
																style={{
																	fontWeight: 600,
																}}
															>
																<div>
																	<span>
																		Product
																		Name :
																	</span>
																	{" " +
																		product.name}
																</div>
																<div>
																	<span>
																		Price :
																	</span>
																	{" " +
																		product.price}
																</div>
																<div>
																	<span>
																		Quanitiy
																		:
																	</span>
																	{" " +
																		product.quantity}
																</div>
															</div>
														</div>
													)
												)}
											</div>
										</CardBody>
										<CardFooter>
											<div
												className="text-end"
												style={{
													fontWeight: 700,
												}}
											>
												Total Price : $
												{order.totalPrice}{" "}
											</div>
										</CardFooter>
									</Card>
								))}
							</CardGroup>
						</div>
					</Row>
					<Row>
						<div className="mx-5 my-3">
							<div
								className="display-6 text-secondary"
								style={{ fontWeight: 700 }}
							>
								Change Password
							</div>
							<div className="p-3">
								<UpdateProfile />
							</div>
						</div>
					</Row>
					<Row>
						<div className="mx-5 my-3">
							{/* <div
								className="display-6 text-secondary"
								style={{ fontWeight: 700 }}
							>
								Contact Us
							</div> */}
						</div>
					</Row>
				</Container>
			</div>
		);
	}
}
