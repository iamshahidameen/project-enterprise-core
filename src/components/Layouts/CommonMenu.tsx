import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMenu } from '../../store/menuSlice';
import Box from '@mui/material/Box';
import { NavLink, useLocation } from 'react-router-dom';
import { RootState } from '../../store';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
interface MenuItem {
  id: string;
  label: string;
  link: string;
}

const CommonMenu = () => {
  const dispatch = useDispatch();
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const currentForm = useSelector((state: RootState) => state.app.version);
  const currentURL = useLocation();
  const currentFlow = useSelector((state: RootState) => state.app.diagram);

  useEffect(() => {
    const loadMenuConfig = async () => {
      try {
        const response = await fetch('/menuConfig.json');
        const menuConfig = await response.json();
        setMenuItems(menuConfig.menu);
        dispatch(setMenu(menuConfig.menu));
      } catch (error) {
        console.error('Failed to load menu config:', error);
      }
    };
    loadMenuConfig();
  }, [dispatch]);

  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <Box
        sx={{
          typography: 'body1',
          '& > :not(style) ~ :not(style)': {
            ml: 2,
          },
        }}
      >
        {menuItems.map((item) => (
          <NavLink
            to={item.link}
            key={item.id}
            className={({ isActive, isPending }) =>
              isPending
                ? 'pending nav-item'
                : isActive
                ? 'active nav-item'
                : 'nav-item'
            }
          >
            {item.label}
          </NavLink>
        ))}
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h5" marginRight={5}>
          Current Version of the{' '}
          {currentURL.pathname === '/diagram'
            ? `React Flow Node  ${currentFlow}`
            : `Form ${currentForm}`}
        </Typography>

        <Stack direction="row">
          <Avatar>H</Avatar>
        </Stack>
      </Box>
    </nav>
  );
};

export default CommonMenu;
