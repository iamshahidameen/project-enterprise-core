import React, { lazy, Suspense, FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const config = require('../config/componentConfig.json');

const Home: FC = () => {
  const currentVersion = useSelector((state: RootState) => state.app.version);

  const getComponent = () => {
    const component = config.components.find(
      (item: any) => item.version === currentVersion
    );
    const currentComponent = lazy((): Promise<any> => {
      if (component.path === '../components/Forms/RegistrationFormV1') {
        return import('../components/Forms/RegistrationFormV1');
      } else if (component.path === '../components/Forms/RegistrationFormV2') {
        return import('../components/Forms/RegistrationFormV2');
      } else {
        return import('../components/NotFound');
      }
    });
    return currentComponent;
  };
  const Component = getComponent();
  return (
    <div>
      {Component ? (
        <Suspense
          fallback={
            <Stack
              sx={{ color: 'grey.500', mt: 10 }}
              spacing={2}
              direction="row"
            >
              <CircularProgress color="secondary" />
            </Stack>
          }
        >
          <Component />
        </Suspense>
      ) : (
        ''
      )}
    </div>
  );
};

export default Home;
