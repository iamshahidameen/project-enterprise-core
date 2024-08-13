import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setMenu } from '../../store/menuSlice';
import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';

interface MenuItem {
  id: string;
  label: string;
  link: string;
}

const CommonMenu = () => {
  const dispatch = useDispatch();
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

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
    <nav>
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
    </nav>
  );
};

export default CommonMenu;
