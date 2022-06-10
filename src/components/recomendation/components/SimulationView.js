import {
  Typography,
  Box,
  Divider,
  Grid,
  Stack,
  Chip,
  Button,
} from "@mui/material";
import { useSelector } from "react-redux";

export const SimulationView = ({}) => {
  const { recomendedPortfolio } = useSelector((store) => store.portfolios);
  const portfolioName = recomendedPortfolio.name;
  const totalInvestProfit = parseFloat(
    10000 * Math.pow(1 + recomendedPortfolio.return_3yr, 3)
  ).toFixed(0);
  const totalInvestProfitString =
    parseInt(totalInvestProfit).toLocaleString("de-DE");

  // const portfolioThemes = JSON.parse(recomendedPortfolio.themes)
  if (!portfolioName) {
    return (
      <Typography sx={{ color: "#16224f", fontWeight: "bold" }}>
        No se encontraron datos del portafolio
      </Typography>
    );
  }
  // answer click logic
  // const handleSubmit = (e) => {

  // }
  return (
    <Box
      sx={{
        height: "100%",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 360, color:"white", borderRadius:2}}>
        <Typography gutterBottom variant="h6" component="div" sx={{ my: 1, mx: 2 }}>
          {portfolioName}
        </Typography>
        <Box sx={{ my: 2, mx: 2 }}>
          <Grid container alignItems="center">
            <Grid item xs>
              <Typography gutterBottom variant="h5" component="div">
                $10.000
              </Typography>
            </Grid>
            <Grid item>
              <Typography gutterBottom variant="h5" component="div">
                $ {totalInvestProfitString}
              </Typography>
            </Grid>
          </Grid>
          <Typography  variant="body1">
            Si hubieras invertido $10.000 dolares hace 3 años en este portafolio asi se veria tu
            patrimonio actualmente.
          </Typography>
        </Box>
        <Divider variant="middle" sx={{ background: "white" }} />
        <Box sx={{ m: 2 }}>
          <Typography gutterBottom variant="body1">
            Tematicas portafolio
          </Typography>
          <Stack direction="row" spacing={1}>

            <Chip color="secondary" label="Cambio Climatico" />

          </Stack>
        </Box>

      </Box>
    </Box>
  );
};
