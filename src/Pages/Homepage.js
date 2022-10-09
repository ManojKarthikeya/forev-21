import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Row } from "reactstrap";
// import ProductCard from "../Components/ProductCard";
import { getProducts } from "../store/actions";

export default function Homepage() {

	return (
		<React.Fragment>
			<Container>
				<Row>
					{/* {productList.map((product) => (
						<ProductCard
							images={product.images}
							title={product.title}
							description={product.description}
							price={product.price}
						/>
					))} */}
				</Row>
			</Container>
			<Link to='product-page'>Product</Link>
		</React.Fragment>
	);
}
