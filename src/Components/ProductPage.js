import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDoc, doc, setDoc } from "firebase/firestore/lite";
import { auth, db } from "../firebaseinitial";
import {
	Col,
	Badge,
	ButtonGroup,
	Button,
	Modal,
	ModalBody,
	ModalHeader,
	Table,
	Container,
	Row,
	Spinner,
} from "reactstrap";
// import { productData } from "../data/productData";
import {
	addFavorite,
	addToShoppingBag,
	emptyProduct,
	getProduct,
	getShoppingBag,
	removeFavorite,
	removeFromShoppingBag,
} from "../store/actions";

export default function ProductPage({ user, togglefun, setLog }) {
	const { id } = useParams();
	const dispatch = useDispatch();
	const [productData, setProductData] = useState(null);
	const [favoritesList, setFavoritesList] = useState([]);
	const [shoppingBagList, setShoppingBagList] = useState([]);
	const [btclick, setBtclick] = useState("S");
	const [modal, setModal] = useState(false);
	const [details, setDetails] = useState();
	const ButtonHandler = (index) => {
		setBtclick(index);
	};
	const [prodIds, setProdIds] = useState([]);

	const toggle = () => setModal(!modal);

	const { favorites, product, shoppingBag } = useSelector((state) => ({
		product: state.reducer.product,
		favorites: state.reducer.favorites,
		shoppingBag: state.reducer.shoppingBag,
	}));

	useEffect(() => {
		console.log(`dispatched`);
		dispatch(getShoppingBag());
	}, [dispatch, user]);

	useEffect(() => {
		setShoppingBagList(shoppingBag);
	}, [shoppingBag]);

	useEffect(() => {
		if (favorites) {
			setFavoritesList(favorites.map((item) => item.ProductId));
		}

		if (shoppingBag) {
			setProdIds(shoppingBag.map((item) => item.productId));
		}
	}, [favorites, shoppingBag]);

	useEffect(() => {
		if (!product) {
			dispatch(getProduct(id));
			console.log("dispatched!!");
		}
	}, [id, dispatch, product]);

	useEffect(() => {
		if (product) {
			dispatch(emptyProduct());
		}
	}, [id]);

	useEffect(() => {
		setProductData(product);
	}, [product]);

	useEffect(() => {
		if (productData) {
			let tmp = document.createElement("DIV");
			tmp.innerHTML = productData.product.Description;
			setDetails(tmp.innerText.split("}").pop().split("."));
		}
	}, [productData]);

	useEffect(() => {
		if (favorites) {
			setFavoritesList(favorites.map((item) => item.ProductId));
		}
	}, [favorites]);

	console.log(id);
	console.log(product);
	console.log(shoppingBag);
	if (!productData) {
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
					<Spinner
						style={{ width: "40px", height: "40px" }}
						color="secondary"
					>
						Loading
					</Spinner>
				</div>
			</Container>
		);
	} else {
		return (
			<div className="p-4">
				<Modal isOpen={modal} toggle={toggle}>
					<ModalHeader toggle={toggle}>Size Chart</ModalHeader>
					<ModalBody>
						<Table>
							<thead>
								<th>Size</th>
								<th>To Fit Bust (in)</th>
								<th>To Fit Waist (in)</th>
								<th>Front Length (in)</th>
							</thead>
							<tbody>
								<tr>
									<td>S</td>
									<td>36.5</td>
									<td>30.5</td>
									<td>32.0</td>
								</tr>
								<tr>
									<td>M</td>
									<td>38.5</td>
									<td>31.5</td>
									<td>32.0</td>
								</tr>
								<tr>
									<td>L</td>
									<td>40.5</td>
									<td>32.5</td>
									<td>32.0</td>
								</tr>
								<tr>
									<td>XL</td>
									<td>42.5</td>
									<td>33.5</td>
									<td>32.0</td>
								</tr>
								<tr>
									<td>XXL</td>
									<td>44.5</td>
									<td>35.0</td>
									<td>32.0</td>
								</tr>
							</tbody>
						</Table>
					</ModalBody>
				</Modal>
				<Container>
					<Row>
						<div className="d-flex justify-content-center">
							<Col className="mx-5">
								<img
									style={{ maxHeight: "75vh" }}
									src={
										productData.product.DefaultProductImage
									}
									alt="product"
								></img>
							</Col>
							<Col className="col-8">
								<Row>
									<div
										style={{
											fontWeight: "700",
											fontSize: "28px",
										}}
									>
										{productData.product.DisplayName}
										<span
											className="m-2"
											style={{
												fontWeight: "600",
												fontSize: "15px",
												color: "gray",
											}}
										>
											{productData.product.Brand}
										</span>
									</div>
									<div>
										<div
											style={{
												fontWeight: "700",
												fontSize: "28px",
											}}
										>
											${productData.product.ListPrice}{" "}
											{productData.product.FinalSale ? (
												<span>
													<Badge
														style={{
															fontSize: "13px",
															fontWeight: "500",
														}}
														color="danger"
													>
														Sale
													</Badge>
												</span>
											) : null}
										</div>
										<Row className="m-3 my-4">
											<Col>
												<div
													style={{
														fontWeight: "600",
														fontSize: "20px",
														color: "gray",
													}}
												>
													Select Size{" "}
													<i
														style={{
															cursor: "pointer",
														}}
														color="info"
														onClick={toggle}
														class="bi bi-info-circle-fill"
													></i>
												</div>
												<ButtonGroup>
													<Button
														active={btclick === "S"}
														onClick={() => {
															ButtonHandler("S");
														}}
														color="secondary"
														outline
													>
														S
													</Button>
													<Button
														active={btclick === "M"}
														onClick={() => {
															ButtonHandler("M");
														}}
														color="secondary"
														outline
													>
														M
													</Button>
													<Button
														active={btclick === "L"}
														onClick={() => {
															ButtonHandler("L");
														}}
														color="secondary"
														outline
													>
														L
													</Button>
													<Button
														active={
															btclick === "XL"
														}
														onClick={() => {
															ButtonHandler("XL");
														}}
														color="secondary"
														outline
													>
														XL
													</Button>
													<Button
														active={
															btclick === "XXL"
														}
														onClick={() => {
															ButtonHandler(
																"XXL"
															);
														}}
														color="secondary"
														outline
													>
														XXL
													</Button>
												</ButtonGroup>
											</Col>
											<Col>
												<div>
													<div
														style={{
															fontWeight: "600",
															fontSize: "20px",
															color: "gray",
														}}
													>
														Rating
													</div>
													<div
														style={{
															fontWeight: "600",
															fontSize: "20px",
															color: "gray",
														}}
													>
														<i class="bi bi-star-fill"></i>
														<i class="bi bi-star-fill"></i>
														<i class="bi bi-star-fill"></i>
														<i class="bi bi-star-fill"></i>
														<i class="bi bi-star-half"></i>{" "}
														4.5
													</div>
												</div>
											</Col>
										</Row>
										<div className="d-flex m-4">
											{user ? (
												prodIds.includes(
													productData.product
														.ProductId
												) ? (
													<Button
														onClick={() => {
															dispatch(
																removeFromShoppingBag(
																	shoppingBagList.filter(
																		(
																			prod
																		) =>
																			prod.productId !==
																			productData
																				.product
																				.ProductId
																	)
																)
															);
														}}
														color="success"
													>
														<i class="bi bi-bag mx-2"></i>{" "}
														Remove from Shopping Bag
													</Button>
												) : (
													<Button
														onClick={() => {
															dispatch(
																addToShoppingBag(
																	[
																		...shoppingBagList,
																		{
																			DefaultProductImage:
																				productData
																					.product
																					.DefaultProductImage,
																			DisplayName:
																				productData
																					.product
																					.DisplayName,
																			ListPrice:
																				productData
																					.product
																					.ListPrice,
																			productId:
																				productData
																					.product
																					.ProductId,
																			productSize:
																				btclick,
																		},
																	]
																)
															);
														}}
														color="success"
													>
														<i class="bi bi-bag mx-2"></i>{" "}
														Add to Shopping Bag
													</Button>
												)
											) : (
												<Button
													onClick={() => {
														togglefun();
														setLog("logIn");
													}}
												>
													Sign In to start Shopping!
												</Button>
											)}
											<div className="mx-3">
												{favoritesList.includes(
													productData.product
														.ProductId
												) ? (
													<Button
														onClick={() => {
															dispatch(
																removeFavorite(
																	productData.product
																)
															);
														}}
														style={{
															color: "#de3163",
															fontWeight: 700,
														}}
														color="white"
													>
														<i
															style={{
																color: "#de3163",
															}}
															className="bi bi-heart-fill mx-1"
														></i>{" "}
														Remove from Favorites
													</Button>
												) : (
													<Button
														onClick={() => {
															dispatch(
																addFavorite(
																	productData.product
																)
															);
														}}
														style={{
															border: 0,
															backgroundColor:
																"#de3163",
															color: "white",
															fontWeight: 700,
														}}
													>
														<i
															style={{
																color: "white",
															}}
															className="bi bi-heart-fill mx-1"
														></i>{" "}
														Add to Favorites
													</Button>
												)}
											</div>
										</div>
									</div>
								</Row>
								<div
									className="m-2"
									style={{
										fontWeight: "700",
										fontSize: "23px",
										color: "black",
									}}
								>
									Product Details
								</div>
								<Row>
									<Col>
										<div
											className="text-secondary "
											style={{ fontWeight: "600" }}
										>
											<ul>
												{details ? (
													<li>
														{details[0].replace(
															"Details",
															""
														)}
													</li>
												) : null}
												{details && details[1] ? (
													<li>
														{details[1]
															.replace("-", "")
															.replace(
																"Content + Care-",
																""
															)}
													</li>
												) : null}
												{details && details[2] ? (
													<li>
														{details[2]
															.replace(
																"Content + Care-",
																""
															)
															.replace("-", "")}
													</li>
												) : null}
											</ul>
										</div>
									</Col>
								</Row>
							</Col>
						</div>
					</Row>
				</Container>
			</div>
		);
	}
}
