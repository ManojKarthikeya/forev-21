import React from "react";
import { Link } from "react-router-dom";
import {
	Card,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
	UncontrolledDropdown,
} from "reactstrap";
import { categories } from "./../data/caterogies";

export default function Categories() {
	const colors = {
		root_women_main: "#FF577F",
		root_plus_size_main: "#FF731D",
		root_accessories_nav_alias: "#2192FF",
		root_activewear_nav: "#FFD372",
		root_mens_main: "#DD5353",
		root_girls_main: "#829460",
		root_sale: "#5CB8E4",
	};
	const data = categories.menuItemList[0].ChildMenus;
	return (
		<div className="d-flex flex-wrap">
			{data.map((mainCategory) => (
				<div key={mainCategory.Key}>
					<UncontrolledDropdown direction="down">
						<DropdownToggle
							className="dps-text p-1 bg-white border-0 text-secondary mx-1"
							style={{
								borderBottomColor: `${
									colors[mainCategory.Key]
								} !important`,
							}}
						>
							<div
								style={{ fontSize: "15px", fontWeight: "600" }}
							>
								{mainCategory.Name}
							</div>
						</DropdownToggle>
						<DropdownMenu
							className="dropdown-menu-end"
							key={mainCategory.Key}
							style={{ minWidth: "fit-content" }}
						>
							<div className="d-flex">
								{mainCategory.ChildMenus.map((subCategory) => (
									<div
										key={subCategory.Key}
										style={{ maxWidth: "50vh" }}
									>
										<DropdownItem
											href={`products/${subCategory.Category}`}
											className=""
											style={{
												color: colors[
													`${mainCategory.Key}`
												],
												fontWeight: 700,
												fontSize: "14px",
											}}
										>
											{subCategory.Name}
										</DropdownItem>
										{subCategory.ChildMenus.map(
											(chinnest) => (
												<Link
													to={`products/${chinnest.Category}`}
													style={{
														textDecoration: "none",
													}}
												>
													<DropdownItem
														style={{
															fontSize: "12px",
														}}
														key={chinnest.Key}
													>
														{chinnest.Name}{" "}
													</DropdownItem>
												</Link>
											)
										)}
									</div>
								))}
							</div>
						</DropdownMenu>
					</UncontrolledDropdown>
				</div>
			))}
		</div>
	);
}
