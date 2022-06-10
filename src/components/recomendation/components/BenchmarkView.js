import {
  Typography,
  Box,
  Grid,
  // Table,
  // Paper,
  // TableContainer,
  // TableHead,
  // TableRow,
  // TableBody,
} from "@mui/material";
import { useSelector } from "react-redux";

export const BenchmarkView = ({}) => {
  const { recomendedPortfolio } = useSelector((store) => store.portfolios);
  const benchmark_carbonintensity =
    recomendedPortfolio.benchmark_carbonintensity;
  const carbonintensity_equivalentportafolio =
    recomendedPortfolio.carbonintensity_equivalentportafolio;
  const benchmark_esgscore = recomendedPortfolio.benchmark_esgscore;
  const esg_score = recomendedPortfolio.esg_score;
  const totalProfitability = parseFloat(
    (Math.pow(1 + recomendedPortfolio.return_3yr, 3) - 1) * 100
  ).toFixed(2);
  const totalBenchmarkProfitability = parseFloat(
    (Math.pow(1 + recomendedPortfolio.benchmark_return3yr, 3) - 1) * 100
  ).toFixed(2);

  if (
    !benchmark_carbonintensity ||
    !benchmark_esgscore ||
    !carbonintensity_equivalentportafolio
  ) {
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
        width: "60%",
        borderRadius: 3,
        padding: "3%",
        display: "flex",
  
      }}
    >
      <Grid container>
        <Grid item lg={12} md={12} sm={12} xs={12} sx={{ mx: "auto"}}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontWeight: "bold", marginX: "auto", color:"white"  }}
            align="center"
          >
            {" "}
            Comparación portafolios
          </Typography>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12} sx={{ mx: "auto" }}>
          <Typography
            gutterBottom
            variant="h7"
            component="div"
            sx={{ color:"white" , fontWeight: "bold", marginX: "auto" }}
            align="center"
          >
            {" "}
            Comparacion entre portafolio sustentable y no sustetable equivalente
          </Typography>
        </Grid>
        <Grid container mx={"auto"} spacing={1}>
          <Grid item lg={6} md={6} sm={6} xs={6} sx={{ mx: "auto" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                p: 1,
                m: 1,
                bgcolor: "#FFFFFF",
                borderRadius: 1,

                boxShadow: "2",
              }}
            >
              <Typography>Puntaje ESG </Typography>
            </Box>
          </Grid>
          <Grid item lg={3} md={3} sm={3} xs={3} sx={{ mx: "auto" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                p: 1,
                m: 1,
                bgcolor: "#4CAF50",
                borderRadius: 1,
                boxShadow: "2",
              }}
            >
              <Typography>{esg_score} </Typography>
            </Box>
          </Grid>
          <Grid item lg={3} md={3} sm={3} xs={3} sx={{ mx: "auto" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                p: 1,
                m: 1,
                bgcolor: "#C8E6C9",
                borderRadius: 1,
                boxShadow: "2",
              }}
            >
              <Typography>{benchmark_esgscore} </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container mx={"auto"} spacing={1}>
          <Grid item lg={6} md={6} sm={6} xs={6} sx={{ mx: "auto" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                p: 1,
                m: 1,
                bgcolor: "#FFFFFF",
                borderRadius: 1,

                boxShadow: "2",
              }}
            >
              <Typography>Huella carobono </Typography>
            </Box>
          </Grid>
          <Grid item lg={3} md={3} sm={3} xs={3} sx={{ mx: "auto" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                p: 1,
                m: 1,
                bgcolor: "#4CAF50",
                borderRadius: 1,
                boxShadow: "2",
              }}
            >
              <Typography>{carbonintensity_equivalentportafolio} </Typography>
            </Box>
          </Grid>
          <Grid item lg={3} md={3} sm={3} xs={3} sx={{ mx: "auto" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                p: 1,
                m: 1,
                bgcolor: "#C8E6C9",
                borderRadius: 1,
                boxShadow: "2",
              }}
            >
              <Typography>{benchmark_carbonintensity} </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container mx={"auto"} spacing={1}>
          <Grid item lg={6} md={6} sm={6} xs={6} sx={{ mx: "auto" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                p: 1,
                m: 1,
                bgcolor: "#FFFFFF",
                borderRadius: 1,

                boxShadow: "2",
              }}
            >
              <Typography>Rentabilidad acomulada </Typography>
            </Box>
          </Grid>
          <Grid item lg={3} md={3} sm={3} xs={3} sx={{ mx: "auto" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                p: 1,
                m: 1,
                bgcolor: "#4CAF50",
                borderRadius: 1,
                boxShadow: "2",
              }}
            >
              <Typography>{totalProfitability} </Typography>
            </Box>
          </Grid>
          <Grid item lg={3} md={3} sm={3} xs={3} sx={{ mx: "auto" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                p: 1,
                m: 1,
                bgcolor: "#C8E6C9",
                borderRadius: 1,
                boxShadow: "2",
              }}
            >
              <Typography>{totalBenchmarkProfitability} </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container mx={"auto"} spacing={1}>
          <Grid item lg={6} md={6} sm={6} xs={6} sx={{ mx: "auto" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                p: 1,
                m: 1,
                bgcolor: "#FFFFFF",
                borderRadius: 1,

                boxShadow: "2",
              }}
            >
              <Typography>Se traduce a: </Typography>
            </Box>
          </Grid>
          <Grid item lg={3} md={3} sm={3} xs={3} sx={{ mx: "auto" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                p: 1,
                m: 1,
                bgcolor: "#4CAF50",
                borderRadius: 1,
                boxShadow: "2",
              }}
            >
              <Typography>simulation </Typography>
            </Box>
          </Grid>
          <Grid item lg={3} md={3} sm={3} xs={3} sx={{ mx: "auto" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                p: 1,
                m: 1,
                bgcolor: "#C8E6C9",
                borderRadius: 1,
                boxShadow: "2",
              }}
            >
              <Typography>simulation </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
