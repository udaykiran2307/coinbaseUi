import "./styles/Header.css";
import { BsArrowRightShort } from "react-icons/bs";
import shapeshift from "./assets/shapeshift.png";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useState } from "react";

const Banner = () => {
  return (
    <div className="banner">
      <img className="banner-img" src={shapeshift} alt="shape-shift" />
      <div className="banner-text">
        Buy, sell, & swap your favorite assets. No KYC. No added fees.
        Decentralized.
      </div>
      <BsArrowRightShort className="right-icon" />
    </div>
  );
};

const Navbar = () => {
  const [currency, setCurrency] = useState("");
  const [language,setLanguage]=useState("");

  const handleChange = (event) => {
    setCurrency(event.target.value);
    setLanguage(event.target.value);
  };
  return (
    <div className="nav-bar">
      <div className="nav-coin-options">
        <Button variant="text" sx={{ textTransform: 'none',color:"black" }} >Coins</Button>
        <Button variant="text" sx={{ textTransform: 'none',color:"black" }}>Exchanges</Button>
        <Button variant="text" sx={{ textTransform: 'none',color:"black" }}>Swap</Button>
      </div>
      <img
        className="nav-img"
        src="https://coincap.io/static/logos/black.svg"
        alt="coincap-logo"
      />
      <div className="nav-tools">
        <FormControl sx={{ m: 1, minWidth: 40 }} size="small">
          <Select
            value={currency}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            sx={{ border: "none"}}
          >
            <MenuItem value="">USD</MenuItem>
            <MenuItem value={10}>INR</MenuItem>
            <MenuItem value={20}>IRR</MenuItem>
            <MenuItem value={30}>AED</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 40, border: "none",mx:2 }} size="small">
          <Select
            value={language}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">english</MenuItem>
            <MenuItem value={10}>french</MenuItem>
            <MenuItem value={20}>hindi</MenuItem>
            <MenuItem value={30}>telugu</MenuItem>
          </Select>
        </FormControl>
        <SearchIcon fontSize="small" sx={{mx:1}}/>
        <SettingsIcon fontSize="small" sx={{mx:1}}/>
      </div>
    </div>
  );
};

const SubHeader = () => {

    return(
        <div className ="subHead">
             <Box sx={{ flexGrow: 1,mx:11,color:"white",fontWeight: 500 }}>
      <Grid container spacing={2}>
        <Grid item lg={2}>
          <item>MARKET CAP</item>
        </Grid>
        <Grid item lg={2}>
          <item>EXCHANGE VOL</item>
        </Grid>
        <Grid item lg={2}>
          <item>ASSETS</item>
        </Grid>
        <Grid item lg={2}>
          <item>EXCHANGES</item>
        </Grid>
        <Grid item lg={2}>
          <item>MARKETS</item>
        </Grid>
        <Grid item lg={2}>
          <item>BTC DOM INDEX</item>
        </Grid>
        <Grid item lg={2} sx={{ textAlign: 'start',mt:-1 }}>
          <item>$1.29T</item>
        </Grid>
        <Grid item lg={2} sx={{ textAlign: 'start',mt:-1 }}>
          <item>$28.57B</item>
        </Grid>
        <Grid item lg={2} sx={{ textAlign: 'start',mt:-1 }}>
          <item>2,296</item>
        </Grid>
        <Grid item lg={2} sx={{ textAlign: 'start',mt:-1 }}>
          <item>73</item>
        </Grid>
        <Grid item lg={2} sx={{ textAlign: 'start',mt:-1 }}>
          <item>9,465</item>
        </Grid>
        <Grid item lg={2} sx={{ textAlign: 'start',mt:-1 }}>
          <item>52.6%</item>
        </Grid>
      </Grid>
    </Box>

        </div>
    )
};

const Header = () => {
  return (
    <div>
      <Banner />
      <Navbar />
      <SubHeader/>
    </div>
  );
};

export default Header;
