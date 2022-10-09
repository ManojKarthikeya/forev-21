import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
	Button,
	Card,
	CardBody,
	CardGroup,
	CardSubtitle,
	CardTitle,
	Container,
	Spinner,
} from "reactstrap";
import {
	addFavorite,
	emptyProducts,
	getProducts,
	removeFavorite,
} from "../store/actions";
import { productList } from "./../data/list";

export default function List() {
	const { id } = useParams();
	const dispatch = useDispatch();
	const [productList, setProductList] = useState([]);
	const [favoritesList, setFavoritesList] = useState([]);

	const { favorites, products } = useSelector((state) => ({
		products: state.reducer.products,
		favorites: state.reducer.favorites,
	}));

	useEffect(() => {
		if (favorites) {
			setFavoritesList(favorites.map((item) => item.ProductId));
		}
	}, [favorites]);

	useEffect(() => {
		if (products) {
			dispatch(emptyProducts());
		}
		if (products && !products.length) {
			dispatch(getProducts(id));
			console.log("dispatched!!");
		}
	}, [id, dispatch]);

	useEffect(() => {
		if (products) {
			setProductList(products);
		}
	}, [products]);
	if (productList.CatalogProducts) {
		return (
			<div className="m-4">
				<Container>
					<div className="text-secondary" style={{ fontWeight: 500 }}>
						Spandu & Manu <i className="bi bi-caret-right-fill"></i>{" "}
						{productList.CategoryDisplayName}{" "}
					</div>
					<div className="mx-3 my-3">
						<div className="display-5" style={{ fontWeight: 700 }}>
							{productList.CategoryDisplayName}
						</div>
						<div
							className="text-secondary"
							style={{ fontWeight: 700 }}
						>
							{productList.CategoryDescription}
						</div>
					</div>
					<CardGroup>
						{productList.CatalogProducts.map((product) => (
							<Card
								className="col-4"
								style={{
									cursor: "pointer",
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
										<Link
											to={`/product/${product.ProductId}`}
										>
											<Button style={{ borderRadius: 0 }}>
												<i className="bi bi-box-arrow-up-right mx-1"></i>{" "}
												<span
													style={{ fontWeight: 600 }}
												>
													View Details
												</span>
											</Button>
										</Link>
										<div>
											{favoritesList.includes(
												product.ProductId
											) ? (
												<i
													style={{
														fontSize: "25px",
														color: "#de3163"
													}}
													onClick={() => {
														dispatch(
															removeFavorite(
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
														color: "#de3163"
													}}
													onClick={() => {
														dispatch(
															addFavorite(product)
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
					<Spinner
						style={{ width: "40px", height: "40px" }}
						color="secondary"
					>
						Loading
					</Spinner>
				</div>
			</Container>
		);
	}
}
