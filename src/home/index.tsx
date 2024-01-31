import { Box, InputAdornment, InputBase, Paper, Typography } from "@mui/material"
import Layout from "../Layout"
import { SetStateAction, useState } from "react"
import { FaSearch } from "react-icons/fa"
import "./style.css"

const Home = () => {
  const[search, setSearch] = useState("")
  const handleSearch = (e: {target: {value: SetStateAction<string>}}) => {
    
    setSearch(e.target.value);
  }
    console.log(handleSearch); 
  return (
    <Layout>
      <Box>
        <Paper component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "default",
            width: {
              xs: "80vw",
              sm: "89.5vw",
              lg: "80vw",
            },
            backgroundColor: "#10141f"
          }}>
            <InputBase placeholder="Search any movie here" value={search} onChange={handleSearch}
             sx={{
               ml: {
                xs: 0.9,
                md: 1,
                lg: 2,
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
      <Box py={2} px={4}>
          <Box width="100%" >
            {search === "" ? (
              <Box width="100%" sx={{
                display: "flex",
                flexDirection: "row",
                gap: {
                  xs: 3,
                  sm: "12rem",
                  lg:'35rem',
                },
                
             }}>
                <Box width="100%">
                  <Typography sx={{
                    fontSize: {
                      xs: "0.8rem",
                      sm: "1.5rem",
                      lg: "2rem",
                      whiteSpace: "nowrap",
                    }
                  }} variant="h5" component="h1" fontWeight={400}>Trending Movies</Typography>
                </Box>
                <Box width="100%">
                  <Typography sx={{
                    fontSize: {
                      xs: "0.8rem",
                      sm: "1.5rem",
                      lg: "2rem",
                      whiteSpace: "nowrap",
                    }
                  }} variant="h5" component="h1" fontWeight={400}>Recomended</Typography>
                </Box>
              </Box>
            ) : ""}
          </Box>
      </Box>
    </Layout>
  )
}

export default Home