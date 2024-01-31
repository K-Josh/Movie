import { Box, Hidden, Icon, Typography } from "@mui/material"
import { FaHome } from "react-icons/fa"
import { FaBookmark } from 'react-icons/fa6'
import { IoTvSharp } from "react-icons/io5"
import { MdMovie } from "react-icons/md"
import { Link, useLocation } from "react-router-dom"

const navLinks = [
    {
        name: 'Home',
        icon: <FaHome />,
        link: "/",
    },
    {
        name: 'Movies',
        icon: <MdMovie />,
        link: "/movies",
    },
    {
        name: 'tv-series',
        icon: <IoTvSharp />,
        link: "/tv-series",
    },
    {
        name: 'bookmark',
        icon: <FaBookmark />,
        link: "/bookmark",
    },
]

const Sidebar = () => {
    const { pathname } = useLocation()
  return (
    <Box sx={{
        backgroundColor: "#161d2f",
        padding: 2,
        display: "flex",
        flexDirection: {
            xs: "row",
            lg: "column",
        },
        alignItems: 'center',
        justifyContent: "space-between",
        width: {
            xs: "80vw",
            sm: "90vw",
            lg: 200,
        },
    }}>
        <Box sx={{
            display: "flex",
            flexDirection: {
                sm: "row",
                lg: "column",
            },
            gap: 5,
            alignItems: {
                xs: "center",
                lg: "start",
            },
            width: "100%",
        }}>
            <Hidden smDown>
                <Typography variant="h5" component="h1" fontWeight={400}>WatchApp</Typography>
            </Hidden>
            <Box sx={{
                py: {
                    xs: "0px",
                    ls: "16px",
                },
                display: "flex",
                flexDirection: {
                    xs: "row",
                    md: "row",
                    lg: "column"
                },
                gap: 4,
            }}>
                {navLinks.map((item) => (
                    <Link 
                    key={item.name}
                    to={item.link}
                    style={{textDecoration: "none"}}
                    >
                     <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        color: "white",
                        cursor: "pointer",
                        
                     }}>
                        <Icon className="icon" sx={{
                            width: "25px",
                            alignItems: "center",
                            filter: `${pathname === item.link ? "invert(58%) sepia(14%) saturate(3166%) hue-rotate(215deg) brightness(91%) contrast(87%)"
                            : "invert(84%) white"
                            }`
                        }}>{item.icon}</Icon>
                       <Hidden mdDown>
                         <Typography>{item.name}</Typography>
                       </Hidden>
                     </Box> 
                    </Link>
                ))} 
            </Box>
        </Box>
    </Box>
  )
}

export default Sidebar