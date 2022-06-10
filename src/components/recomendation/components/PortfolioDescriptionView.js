import {
    Typography,
    Box
  } from "@mui/material";
import { useSelector } from "react-redux";

export const PortfolioDescription = ({
        ...props
    }) => {
    const { recomendedPortfolio } = useSelector((store) => store.portfolios); 
    const portfolioName = recomendedPortfolio.name;
    const portfolioDescription = recomendedPortfolio.description;
    const portfolioThemes = recomendedPortfolio.themes;

    if(!portfolioName || !portfolioDescription || !portfolioThemes ){
        return (            
            <Typography sx={{color:"#16224f", fontWeight:"bold"}}>
                No se encontraron datos del portafolio
            </Typography>
        );
    }
    // answer click logic
    // const handleSubmit = (e) => { 

    // }
    return (
      <Box sx={{ maxWidth:"100%",  borderRadius:3, padding:"5%", height:"100%", color: "white", my:"auto" }}>
     
       
            <Typography gutterBottom variant="h4" component="div" sx={{color:"white", fontWeight:"bold"}}>
              {portfolioName}
            </Typography>
            <Typography variant="body1" gutterBottom mb={2}>
              {portfolioDescription}
            </Typography>
            {/* {portfolioThemes.map((theme) => (
                <Typography gutterBottom variant="h6" component="div" sx={{color:"#16224f", fontWeight:"bold"}}>
                    {theme + ","}
                </Typography>
            ))} */}
      
  
       
      </Box>
    );
}