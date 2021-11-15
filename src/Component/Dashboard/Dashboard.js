import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from 'react-bootstrap';
import './Dashboard.css'
import {

    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Pay from '../Pay/Pay';
import Order from '../Order/Order';
import useAuth from '../../hooks/useAuth';
import AddProduct from '../../Component/AddProduct/AddProduct'
import AddReview from '../../Component/AddReview/AddReview'
import ManageProduct from '../ManageProduct/ManageProduct';
import MyOrder from '../MyOrder/MyOrder';

const drawerWidth = 150;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { admin, logout } = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Link to={"/home"} className="link">Home Page</Link><br />
            <Link to={`${url}`} className="link">Dashboard</Link><br />
            <Link to={`${url}/pay`} className="link">Pay</Link> <br />
            <Link to={`${url}/myorder`} className="link">My Order</Link> <br />
            <Link to={`${url}/review`} className="link"> Add Review</Link> <br />


            {admin && <Box>
                <Link to={`${url}/makeadmin`} className="link">Make Admin</Link> <br />
                <Link to={`${url}/addproduct`} className="link">Add Product</Link><br />
                <Link to={`${url}/manageallorder`} className="link">Manage all Order</Link><br />
                <Link to={`${url}/manageproduct`} className="link">Manage Products</Link><br />
            </Box>}
            <Button className="logout-btn" onClick={logout}>Log Out</Button>


            <Divider />
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
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
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
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
                <Switch>
                    <Route exact path={path}>
                        <h3 className="text-center">Walcome Our Dashboard</h3>
                    </Route>
                    <Route path={`${path}/makeadmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/myorder`}>
                        <Order></Order>
                    </Route>
                    <Route path={`${path}/addproduct`}>
                        <AddProduct></AddProduct>
                    </Route>
                    <Route path={`${path}/manageproduct`}>
                        <ManageProduct></ManageProduct>
                    </Route>
                    <Route path={`${path}/manageallorder`}>
                        <Order></Order>
                    </Route>
                    <Route path={`${path}/review`}>
                        <AddReview></AddReview>
                    </Route>
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
