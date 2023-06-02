import ListaItem from "./ListaItems";
import Grid from "@mui/material/Grid";

const ListaPeliculas = ({ info }) => {
	return (
		<Grid container>
			<Grid
				item
				xs={12}
				md={12}
				sx={{
					height: "400px",
					backgroundColor: "rgb(131, 51, 51)",
					overflowY: "scroll",
					p: 5,
				}}
			>
				{info.map((elemento) => (
					<ListaItem
						key={elemento.id}
						titulo={elemento.title}
						imagen={`https://image.tmdb.org/t/p/w300/${elemento.poster_path}`}
						link={elemento.id}
						puntaje={elemento.vote_average}
					/>
				))}
			</Grid>
		</Grid>
	);
};

export default ListaPeliculas;