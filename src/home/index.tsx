import { Box, InputAdornment, InputBase, Paper, Typography } from "@mui/material"
import Layout from "../Layout"
import { SetStateAction, useContext, useState } from "react"
import { FaSearch } from "react-icons/fa"
import "./style.css"
import MovieTrendList from "../components/movie-list/movieTrendList"
import MovieList from "../components/movie-list"
import { MovieDataType } from "../assets/data"
import { Moviecontext } from "../context/movie-context"

const Home = () => {
  const[search, setSearch] = useState("")
  const[searchList, setSearchList] = useState<MovieDataType[]>([])
  const {state} = useContext(Moviecontext)
  const {movies} = state;
  
  const trendingList = movies.filter((item) => item.isTrending === true);
  const recommendList = movies.filter((item) => item.isTrending !== true)
  
  const handleSearch = (e: {target: {value: SetStateAction<string>}}) => {
    setSearch(e.target.value);
    const newList = movies.filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()) )
    setSearchList(newList)
  }
  return (
    <Layout>
  {/* search input box */}
      <Box>
        <Paper component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "default",
            width: {
              xs: "80vw",
              sm: "89.5vw",
              lg: "78vw",
            },
            backgroundColor: "#10141f"
          }}>
            <InputBase placeholder="Search any movie here" value={search} onChange={handleSearch}
             sx={{
               ml: {
                xs: 0.9,
                md: 1,
                lg: 1.5,
               },
               flex: 1,
               color: "white",
               border: "1px solid",
               borderRadius: "1rem",
               p: {xs: 0.5, sm: 2, lg: 1},
              }}
              startAdornment= {
                <InputAdornment position="start">
                  <FaSearch className="icon"/>
                </InputAdornment>
              }
            />
        </Paper>
      </Box>
  {/* recommended and trending List component */}
      <Box py={2} px={4}>
          <Box width="100%" >
            {search === "" ? (
              <Box width="100%" sx={{gap: 3}}>
                <Box width="100%">
                  <Typography sx={{                
                    fontSize: {
                      xs: "0.8rem",
                      sm: "1.5rem",
                      lg: "2rem",
                      whiteSpace: "nowrap",
                    }
                  }} variant="h5" component="h1" fontWeight={400}>Trending Movies</Typography>
                  <MovieTrendList  trendingList={trendingList} />
                </Box>
                <Box width="100%" mt={3}>
                  <Typography sx={{
                    fontSize: {
                      xs: "0.8rem",
                      sm: "1.5rem",
                      lg: "2rem",
                      whiteSpace: "nowrap",
                    }
                  }} variant="h5" component="h1" fontWeight={400}>Recomended</Typography>
                  <MovieList recommendList={recommendList} />
                </Box>
              </Box>
            ) : (
              <Box width="100%">
                <Typography>Found</Typography>
              </Box>
            )}
          </Box>
      </Box>
    </Layout>
  )
}

export default Home