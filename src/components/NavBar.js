
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { useContext, useState } from "react";
import Context from "../context/Context";
import Hamburger from "hamburger-react";
import NavList from "./NavList";

const NavBar = () => {
	const [mostrarMenu, setMostrarMenu] = useState(false);
	const handleClickMenu = () => {
		setMostrarMenu(!mostrarMenu);
	};
	const context = useContext(Context);
	const handleClick = () => {
		context.setModoClaro(!context.modoClaro);
	};

	return (
		<Box
			sx={{
				mb: 1,
				width: "100%",				
			}}
		>
			<AppBar
				sx={{
					bgcolor: "#701313d7",					
					fontSize: 16,
				}}
				position="static"
			>
				<Hamburger
					label="Show menu"
					toggled={mostrarMenu}
					toggle={setMostrarMenu}
					onClick={handleClickMenu}
				/>
				{mostrarMenu && (
					<NavList className="nav-bar" handleClick={handleClick} />
				)}
				<NavList className="hidden" handleClick={handleClick} text="text-align"/>
			</AppBar>
		</Box>
	);
};
export default NavBar;
