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
							className="dropdown-toggle-categories"
							color="white"
							href="#"
						>
							{mainCategory.Name}
						</DropdownToggle>
						<DropdownMenu
							className="dropdown-menu-end"
							key={mainCategory.Key}
							style={{minWidth: 'fit-content'}}
						>
							<div className="d-flex cate-boxes flex-column flex-wrap">
								{mainCategory.ChildMenus.map((subCategory) => (
									<div
										key={subCategory.Key}
										className="d-flex flex-column flex-wrap"
										style={{maxWidth: '50vh'}}
									>
										<DropdownItem
											className="mx-1"
											style={{
												color: colors[
													`${mainCategory.Key}`
												],
												fontWeight: 700,
											}}
										>
											{subCategory.Name}
										</DropdownItem>
										{subCategory.ChildMenus.map(
											(chinnest) => (
												<DropdownItem style={{fontSize: '13px'}}>
													{chinnest.Name}{" "}
												</DropdownItem>
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
