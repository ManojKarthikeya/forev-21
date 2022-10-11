import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container, Row } from "reactstrap";
import ProductPage from "../Components/ProductPage";
import { getSaleItems } from "../store/actions";

export default function Homepage() {
	const [saleItemsList, setSaleItemsList] = useState([]);
	const { saleItems } = useSelector((state) => ({
		saleItems: state.reducer.saleItems,
	}));
	useEffect(() => {
		setSaleItemsList(saleItems);
	}, [saleItems]);

	const dispatch = useDispatch();
	useEffect(() => {
			console.log('useefsdf')
			dispatch(getSaleItems());
	}, []);

	console.log(saleItemsList);

	return (
		<React.Fragment>
			<Container>
				<Row></Row>
			</Container>
		</React.Fragment>
	);
}
