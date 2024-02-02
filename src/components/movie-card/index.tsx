import { useContext } from "react";
import { MovieDataType } from "../../assets/data"
import { Moviecontext } from "../../context/movie-context";
import { Box, Card, CardContent } from "@mui/material";


interface MovieCardProps {
    movie: MovieDataType;
}

const MovieTrendCard = ({movie}: MovieCardProps) => {
const {dispatch} = useContext(Moviecontext) 
  return (
    <Card 
    key={movie.id}
    elevation={0}
    style={{backgroundColor: "transparent"}}
    
    >
      <CardContent
        style={{
            display: "flex",
            padding: 0,
            position: "relative",
        }}
        sx={{
            width: {
                xs: "",
                lg: "100%",
            }
        }}
      >
         <img src={movie.thumbnail.regular.large} alt="" style={{ width: "300px", height: "200px", borderRadius: "8px",}}/>
      </CardContent>
    </Card>
  )
}

export default MovieTrendCard