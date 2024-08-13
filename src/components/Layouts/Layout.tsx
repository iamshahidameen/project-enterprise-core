import React from 'react';
import CommonMenu from './CommonMenu';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import SidebarComponent from './SidebarComponent';
import { Outlet, NavLink } from 'react-router-dom';

const drawerWidth = 350;

function Layout(props: any) {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          backgroundColor: '#2f3b69',
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            <CommonMenu />
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#2f3b69',
            borderRightColor: '#fff',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <NavLink to="/">
          <img
            src="/flow-web.png"
            alt="logo"
            style={{ objectFit: 'cover', maxHeight: '64px', minWidth: '100%' }}
          />
        </NavLink>

        <Divider sx={{ backgroundColor: '#fff' }} />

        <SidebarComponent />
        <Divider sx={{ backgroundColor: '#fff' }} />
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: 'background.default',
          p: 0,
          mt: 8,
          ml: 0,
          minHeight: 'calc(100vh - 64px)',
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
