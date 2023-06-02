import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
	return (
		<Box
			sx={{
				bgcolor: "#701313d7",
				color: "#c5c2c2",
				height: 50,
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				mt: 5,
			}}
		>
			<Typography
				sx={{
					fontWeight: "light",
					textAlign: "center",
					m: 1,
				}}
			>
				Hecho con ♥ por Ivi Demichelis
			</Typography>
			
			<a
				href="https://www.linkedin.com/in/ivana-demichelis-a14677185/"
				aria-label="Ir a mi linkedin"
			>
				<LinkedInIcon sx={{ color: "#c5c2c2", m: 1 }} />
			</a>
			<a href="https://github.com/ivi-demichelis" aria-label="Ir a mi linkedin">
				<GitHubIcon sx={{ color: "#c5c2c2c0", m: 1 }} />
			</a>
						
		</Box>
	);
};

export default Footer;