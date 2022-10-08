import React from "react";
import {
	Card,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
	UncontrolledDropdown,
} from "reactstrap";
import { categories } from "./../data/caterogies";

export default function Categories() {
	const data = categories.menuItemList[0].ChildMenus;
	return (
		<div className="page-content">
			<div className="d-flex">
				{data.map((mainCategory) => (
					<div key={mainCategory.Key}>
						<UncontrolledDropdown direction="down">
							<DropdownToggle className="dropdown-toggle-categories" color="white" href="#">
								{mainCategory.Name}
							</DropdownToggle>
							<DropdownMenu className="dropdown-menu-end">
								<div className="d-flex">
									{mainCategory.ChildMenus.map(
										(subCategory) => (
											<div key={subCategory.Key}>
												<DropdownItem>
													{subCategory.Name}
												</DropdownItem>
												{subCategory.ChildMenus.map(
													(chinnest) => (
														<DropdownItem>
															{chinnest.Name}{" "}
														</DropdownItem>
													)
												)}
											</div>
										)
									)}
								</div>
							</DropdownMenu>
						</UncontrolledDropdown>
					</div>
				))}
			</div>
		</div>
	);
}
