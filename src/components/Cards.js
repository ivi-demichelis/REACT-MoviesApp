import "../App.scss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { useContext } from "react";
import Context from "../context/Context";
const Cards = ({ titulo, imagen }) => {
	const context = useContext(Context);
	return (
		<Card
			className="Card-pelicula"
			sx={{
				width: 330,
				height: 530,
				bgcolor: context.modoClaro ? "#c5c2c2" : "transparent",
				position: "relative",
				m: 2,
				"&:hover": {
					transform: "scale(1.15)",
					transitionDuration: "0.3s",
					zIndex: 7,
				},
			}}
		>
			<CardContent sx={{ textAlign: "center" }}>
				<CardMedia
				 className="imagen-pelicula"
					sx={{ width: "100%", height: "440px" }}
					component="img"
					image={imagen}
					alt={`Poster de ${titulo}`}
				/>
				<Typography
					variant="h6"
					gutterBottom
					sx={{
						mt: 2,
						color: context.modoClaro ? "modo-claro" : "white",
						textDecoration: "none",
					}}
				>
					{titulo}
				</Typography>
			</CardContent>
		</Card>
	);
};
export default Cards;