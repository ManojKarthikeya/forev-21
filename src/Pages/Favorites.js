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
import { addFavorite, removeFavorite } from "../store/actions";

export default function Favorites() {
	const dispatch = useDispatch();
	const [favoritesList, setFavoritesList] = useState([]);
	const [favoritesIdList, setFavoritesIdList] = useState([]);

	const { favorites } = useSelector((state) => ({
		favorites: state.reducer.favorites,
	}));

	useEffect(() => {
		setFavoritesList(favorites);
		setFavoritesIdList(favorites.map((item) => item.ProductId));
	}, [favorites]);

	console.log(favoritesList);
	if (favoritesList.length) {
		return (
			<div>
				<Container>
					{/* <div className="text-secondary" style={{ fontWeight: 500 }}>
						Spandu & Manu <i className="bi bi-caret-right-fill"></i>{" "}
						{productList.CategoryDisplayName}{" "}
					</div> */}
					<div className="mx-3 my-3">
						<div className="display-5" style={{ fontWeight: 700 }}>
							Favorites
						</div>
						<div
							className="text-secondary"
							style={{ fontWeight: 700 }}
						>
							All your selected Favorites at one place.
						</div>
					</div>
					<CardGroup>
						{favoritesList.map((product) => (
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
											{favoritesIdList.includes(
												product.ProductId
											) ? (
												<i
													style={{
														fontSize: "25px",
														color: "#de3163",
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
														color: "#de3163",
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
					<div className="display-5">
						Your Favorites list is empty.
					</div>
					<div className="text-sm-center">
						Browse Around and{" "}
						<i
							style={{
								color: "#de3163",
							}}
							className="bi bi-heart-fill"
						></i> products you like.
					</div>
				</div>
			</Container>
		);
	}
}
