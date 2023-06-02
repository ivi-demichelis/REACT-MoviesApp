import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Context from "../context/Context";
import "../App.scss";

const Carrusel = ({ mensaje, info }) => {
	const context = useContext(Context);
	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<Container
			maxWidth="l"
			sx={{
				bgcolor: context.modoClaro ? "modo-claro" : "modo-oscuro",
				p: 5,
			}}
			className="container-carrusel"
		>
			<Box sx={{ display: "flex", alignItems: "center" }}>
				<Typography variant="h5">{mensaje}</Typography>
				<Link
					style={{
						textDecoration: "none",
						color: "white",
					}}
					to="/populares"
				>
					<Fab
						size="small"
						color="secondary"
						aria-label="ir a películas populares"
						sx={{ ml: 3 }}
					>
						<ArrowForwardIosIcon />
					</Fab>
				</Link>
			</Box>

			<Slider {...settings}>
				{info.map((elemento) => (
					<Link
						style={{
							textDecoration: "none",
							color: "#c5c2c2",
						}}
						to={`/movie/${elemento.id}`}
						key={elemento.id}
					>
						<Cards
							titulo={elemento.title}
							imagen={`https://image.tmdb.org/t/p/w300/${elemento.poster_path}`}
						/>
					</Link>
				))}
			</Slider>
		</Container>
	);
};
export default Carrusel;