import { Typography, Grid, Box, Button } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CompositionDonutChart } from "../components/recomendation/components/CompositionDonutChart";
import { PortfolioDescription } from "../components/recomendation/components/PortfolioDescriptionView";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecomendedPortfolio } from "../store/actions/RecomendationActions";
import { BenchmarkView } from "../components/recomendation/components/BenchmarkView";
import { SimulationView } from "../components/recomendation/components/SimulationView";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { PortfolioActions } from "../store/slices/RecomendationSlice";
import { userActions } from "../store/slices/UserSlice";
export const RecomendationView = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { recomendedPortfolio } = useSelector((store) => store.portfolios);

  useEffect(() => {
    dispatch(fetchRecomendedPortfolio());
  }, []);
  const handleSubmit = (e) => {
    dispatch(userActions.nextStep());
    dispatch(PortfolioActions.replaceRecomendedPortfolios(recomendedPortfolio));
    navigate("/register");
  };
  return (
    <Box
      mx={"auto"}
      mt={2}
      sx={{
        borderRadius: 3,
        background: "#12192c",
        width: "80vw",
        pb: "2%",
        pl: "1.5%",
        pr: "1.5%",
      }}
    >
      <Grid container>
        <Grid item lg={6} md={6} sm={4} xs={4}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width:"60%",
              p: 1,
              mx: "auto",
              borderRadius: 1,
            }}
          >
            <PortfolioDescription />
          </Box>
        </Grid>
        <Grid item lg={6} md={6} sm={4} xs={4}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              p: 1,
              borderRadius: 1,
            }}
          >
            <BenchmarkView />
          </Box>
        </Grid>

        <Grid item lg={6} md={6} sm={4} xs={4} sx={{ mx: "auto" }}>
        <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mb:"3%",
              mx: "auto",
            }}
          >
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ color: "white", fontWeight: "bold" }}
              >
                Donde estoy inviertiendo mi dinero?
              </Typography>
              </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              p: 1,
              borderRadius: 1,
              mx: "auto",
              height: "15vw",
            }}
          >
            <CompositionDonutChart></CompositionDonutChart>
          </Box>
        </Grid>
        <Grid item lg={6} md={6} sm={4} xs={4} sx={{ mx: "auto" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              p: 1,
              height: "15vw",
              borderRadius: 1,
            }}
          >
            <SimulationView></SimulationView>
          </Box>
        </Grid>
        <Grid item xs={6} mt={8}>
          <Box display="flex" justifyContent="flex-start">
            <Button
              sx={{
                background: "#FFFFFF",
                color: "#12192c",
                pt: "2%",
                pb: "2%",
                pr: "5%",
                pl: "5%",
              }}
              variant="contained"
              startIcon={<ArrowBackIosNewIcon />}
            >
              {" "}
              Anterior
            </Button>
          </Box>
        </Grid>
        <Grid item xs={6} mt={8}>
          <Box display="flex" justifyContent="flex-end">
            <Button
              onClick={handleSubmit}
              type="submit"
              sx={{
                background: "#00C9A7",
                pt: "2%",
                pb: "2%",
                pr: "5%",
                pl: "5%",
              }}
              variant="contained"
            >
              Continuar
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
