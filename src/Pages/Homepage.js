import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row } from "reactstrap";
import ProductCard from "../Components/ProductCard";
import { getProducts } from "../store/actions";

export default function Homepage() {
	const dispatch = useDispatch();
	const [productList, setProductList] = useState([]);

	const { products } = useSelector((state) => ({
		products: state.reducer.products,
	}));

	useEffect(() => {
		if (products && !products.length) {
			dispatch(getProducts());
		}
	});

	useEffect(() => {
		if (products) {
			setProductList(products);
		}
	}, [products]);

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
		</React.Fragment>
	);
}
