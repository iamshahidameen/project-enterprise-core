import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import People from '@mui/icons-material/People';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { Box } from '@mui/material';
import { PermMedia, Public } from '@mui/icons-material';

const data = [
  { icon: <People />, label: 'Name' },
  { icon: <Public />, label: 'Email' },
  { icon: <PermMedia />, label: 'Terms' },
];
const SharedFormsData = () => {
  const sharedData = useSelector((state: RootState) => state.app.sharedState);

  const [open, setOpen] = React.useState(true);
  return (
    <Box
      sx={{
        display: 'flex',
        mt: 3,
        borderTop: '1px solid #fff',
        position: 'fixed',
        bottom: 0,
        left: 0,
        minWidth: '350px',
      }}
      className="shared__data"
    >
      <Box
        sx={{
          bgcolor: open ? 'rgba(71, 98, 130, 1)' : null,
          pb: open ? 2 : 0,
        }}
      >
        <ListItemButton
          alignItems="flex-start"
          onClick={() => setOpen(!open)}
          sx={{
            px: 3,
            pt: 2.5,
            pb: open ? 0 : 2.5,
            '&:hover, &:focus': { '& svg': { opacity: open ? 1 : 0 } },
          }}
        >
          <ListItemText
            primary="Shared Data From Forms"
            primaryTypographyProps={{
              color: '#fff',
              fontSize: 22,
              fontWeight: 'medium',
              lineHeight: '26px',
              mb: '10px',
            }}
            sx={{ my: 0 }}
          />
          <KeyboardArrowDown
            sx={{
              mr: -1,
              opacity: 0,
              transform: open ? 'rotate(-180deg)' : 'rotate(0)',
              transition: '0.2s',
            }}
          />
        </ListItemButton>
        {open &&
          data.map((item, index) => (
            <ListItemButton
              key={item.label}
              sx={{ py: 0, minHeight: 32, color: 'rgba(255,255,255,.8)' }}
            >
              <ListItemIcon sx={{ color: 'inherit' }}>{item.icon}</ListItemIcon>
              <ListItemText
                onClick={() => {
                  navigator.clipboard.writeText(
                    sharedData.firstName &&
                      sharedData.lastName &&
                      sharedData.email
                  );
                }}
                primaryTypographyProps={{
                  fontSize: 14,
                  fontWeight: 'medium',
                }}
              >
                <p className="shared-text">
                  {index === 0 &&
                    sharedData.firstName + ' ' + sharedData.lastName}
                </p>
                <p>{index === 1 && sharedData.email}</p>
                <p>
                  {index === 2 &&
                    sharedData.terms &&
                    'Agree to Terms and Condition'}
                </p>
              </ListItemText>
            </ListItemButton>
          ))}
      </Box>
    </Box>
  );
};

export default SharedFormsData;
