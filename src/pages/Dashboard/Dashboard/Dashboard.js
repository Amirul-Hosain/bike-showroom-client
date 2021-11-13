import React from 'react';
import './Dashboard.css';
import {
    Switch, Route, Link, useRouteMatch
} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AddProduct from '../AddProduct/AddProduct';
import useAuth from '../../../hooks/useAuth';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AdminRoute from '../AdminRoute/AdminRoute';
import MyOrder from '../MyOrder/MyOrder';
import ManageProduct from '../ManageProduct/ManageProduct';
import ManageOrder from '../ManageOrder/ManageOrder';
import Review from '../Review/Review';
import Payment from '../Payment/Payment';

const drawerWidth = 240;

const Dashboard = (props) => {
    const { user, handleLogOut, admin } = useAuth();
    let { path, url } = useRouteMatch();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const drawer = (
        <div style={{ backgroundImage: 'linear-gradient(  lightgreen, green)', height: '100vh' }}>
            <List>
                <ul style={{ marginTop: '25%' }}>
                    <Link className='dash-link' to={`${url}/payment`}>Payment</Link><br />
                    <Link className='dash-link' to={`${url}/MyOrder`}>My Orders</Link><br />
                    <Link className='dash-link' to={`${url}/review`}>Review us</Link><br />
                    {admin &&
                        <Box>
                            <Link className='dash-link' to={`${url}/manageOrder`}>Manage Orders</Link><br />
                            <Link className='dash-link' to={`${url}/addProduct`}>Add Product</Link><br />
                            <Link className='dash-link' to={`${url}/manageProduct`}>Manage Products</Link><br />
                            <Link className='dash-link' to={`${url}/makeAdmin`}>Make Admin</Link>
                        </Box>
                    }
                </ul>

                <ul style={{ marginTop: '80%' }}>
                    {user?.email &&
                        <Link to='/' className='logout' onClick={handleLogOut}><i class="fas fa-sign-out-alt"></i> Log out</Link>
                    }
                </ul>

            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <Box sx={{ display: 'flex', backgroundColor: 'rgb(229, 254, 223)', paddingBottom: '10%' }}>
            <CssBaseline />

            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    backgroundColor: 'rgb(229, 254, 223)',
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" style={{ color: 'black' }}>
                        Your Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Box sx={{ flexGrow: 1 }}>
                    <Switch>
                        <Route exact path={`${path}/payment`}>
                            <Payment></Payment>
                        </Route>
                        <Route exact path={`${path}/MyOrder`}>
                            <MyOrder></MyOrder>
                        </Route>
                        <Route exact path={`${path}/review`}>
                            <Review></Review>
                        </Route>
                        <Route exact path={`${path}/addProduct`}>
                            <AddProduct></AddProduct>
                        </Route>
                        <AdminRoute exact path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>
                        <AdminRoute exact path={`${path}/manageProduct`}>
                            <ManageProduct></ManageProduct>
                        </AdminRoute>
                        <AdminRoute exact path={`${path}/manageOrder`}>
                            <ManageOrder></ManageOrder>
                        </AdminRoute>
                    </Switch>
                </Box>
            </Box>
        </Box >
    );
};

export default Dashboard;