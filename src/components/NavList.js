import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import LocalMoviesIcon from "@mui/icons-material/MovieFilterOutlined";
import { useContext } from "react";
import Context from "../context/Context";
import { cambioLenguaje } from "../utils/variables";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";


const NavList = ({ handleClick, className, text }) => {
	const context = useContext(Context);
	return (
		<Toolbar className={className}>
			<Link
				style={{
					textDecoration: "none",
					color: "white",
				}}
				to="/"
			>
				<LocalMoviesIcon
					sx={{ fontSize: 60 }}
					className="icono-principal"
				/>
			</Link>
			<List
				component="nav"
				sx={{
					display: "flex",
					flexDirection: "row",
				}}
				className={className}
			>
				<ListItem button>
					<Link
						style={{
							textDecoration: "none",
							color: "#c5c2c2",
							width: "140px",
						}}
						className={text}
						to="/"
					>
						{cambioLenguaje[context.lenguaje].home}
					</Link>
				</ListItem>
				<ListItem button>
					<Link
						style={{
							textDecoration: "none",
							color: "#c5c2c2",
							width: "180px",
						}}
						className={text}
						to="/ultimos-lanzamientos"
					>
						{cambioLenguaje[context.lenguaje].navLanzamientos}
					</Link>
				</ListItem>
				<ListItem button>
					<Link
						style={{
							textDecoration: "none",
							color: "#c5c2c2",
						}}
						className={text}
						to="/populares"
					>
						{cambioLenguaje[context.lenguaje].navPopulares}
					</Link>
				</ListItem>
				<ListItem button>
					<SearchIcon sx={{ fontSize: 30, color: "#c5c2c2" }} />
					<Link						
						style={{
							
							textDecoration: "none",
							color: "#c5c2c2",					
						}}
						className={text}
						to="/busqueda"
					>
						{cambioLenguaje[context.lenguaje].navBuscar}
					</Link>
				</ListItem>
			</List>			
		</Toolbar>
	);
};

export default NavList;
