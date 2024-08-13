import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { changeFormVersion, changeFlowDiagram } from '../../store/appSlice';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import List from '@mui/material/List';
import { useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import SharedFormsData from '../SharedFormsData';

const config = require('../../config/componentConfig.json');
const SidebarComponent = () => {
  const currentForm = useSelector((state: RootState) => state.app.version);
  const dispatch = useDispatch();
  const currentURL = useLocation();
  const currentDiagram = useSelector((state: RootState) => state.app.diagram);

  return (
    <List disablePadding>
      {currentURL.pathname === '/diagram' ? (
        <>
          {config.flowDiagrams.map((item: any, index: number) => {
            console.log('item verion', item);
            return (
              <ListItem
                disablePadding
                key={index}
                sx={
                  item.version === currentDiagram
                    ? {
                        backgroundColor: 'rgba(71, 98, 130, 1)',
                        transition: 'background 0.3s',
                        border: '1px solid #2f3b69',
                      }
                    : { color: '#ffffffb0' }
                }
              >
                <ListItemButton
                  onClick={() =>
                    dispatch(
                      changeFlowDiagram(item.version === 'v1' ? 'v1' : 'v2')
                    )
                  }
                  disabled={currentDiagram === item.version}
                >
                  <ListItemIcon>
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText>{item.name}</ListItemText>
                </ListItemButton>
              </ListItem>
            );
          })}
        </>
      ) : (
        <>
          {config.components.map((item: any, index: number) => {
            return (
              <Box>
                <ListItem
                  key={index}
                  disablePadding
                  sx={
                    item.version === currentForm
                      ? {
                          backgroundColor: 'rgba(71, 98, 130, 1)',
                          transition: 'background 0.3s',
                          border: '1px solid #2f3b69',
                        }
                      : { color: '#ffffffb0' }
                  }
                >
                  <ListItemButton
                    onClick={() => dispatch(changeFormVersion(item.version))}
                    disabled={currentForm === item.version}
                  >
                    <ListItemIcon>
                      <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary={item.name}></ListItemText>
                  </ListItemButton>
                </ListItem>
              </Box>
            );
          })}
        </>
      )}
      <SharedFormsData />
    </List>
  );
};

export default SidebarComponent;
