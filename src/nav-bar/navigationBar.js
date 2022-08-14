import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider'; 
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import AcUnit from '@mui/icons-material/AcUnit';
import MinorCrash from '@mui/icons-material/MinorCrash';
import CarCrash from '@mui/icons-material/CarCrash';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { ListItemText } from '@mui/material';

const drawerWidth = 240;

function getIcon(iconname){
    switch (iconname) {
        case "HomeIcon":
            return <HomeIcon fontSize="large"/>
        case "AcUnit":
            return <AcUnit fontSize="large"/>
        case "MinorCrash":
            return <MinorCrash fontSize="large"/>
        case "CarCrash":
            return <CarCrash fontSize="large"/>        
        case "AirlineSeatReclineExtraIcon":
            return <AirlineSeatReclineExtraIcon fontSize="large"/>
        default:
            break;
    }
}

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

  export default function PersistentDrawerLeft() {
    let navigate = useNavigate();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    function renderNavigationItems(navItemsList){
        return navItemsList.map((item, index) => {
                    
                  return (
                  <ListItem key={item.label} disablePadding>
                    <ListItemButton onClick={() => {
                                            navigate(item.link)
                                        }}>
                        <ListItemIcon>
                            {getIcon(item.icon)}
                        </ListItemIcon>
                        <Link to={item.link}>{item.label}</Link>
                    </ListItemButton>
                  </ListItem>
                )})
    }
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
  
    return (
        <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
            <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                marginRight: 5,
                ...(open && { display: 'none' }),
                }}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h3" noWrap component="div">
                MEDBEE
            </Typography>
            </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open} className="navigation" >
            <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
                {renderNavigationItems([
                    {"label":'Dashboard', "link":"dashboard", "icon":"HomeIcon"}
                ])}
            </List>
            <Divider />
                <div class="menuHeader">Forms</div>
            <List>
                {renderNavigationItems([
                    {"label":'Variance Safety', "link": "varianceSafety", "icon": "AcUnit"},
                    {"label":'Risk', "link": "risk", "icon": "MinorCrash"},
                    {"label":'Medication Safety', "link": "medicationSafety", "icon": "CarCrash"},
                    {"label":'Surgical', "link": "surgical", "icon": "AirlineSeatReclineExtraIcon"}
                ])}
            </List>
        </Drawer>  
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
        </Box>
      </Box>
    );
  }