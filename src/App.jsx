import {BrowserRouter, Route, Routes} from 'react-router-dom';
import React from 'react';
import {ThemeProvider} from '@mui/material/styles';
import {theme} from './components/styles/Theme';
import Container from '@mui/material/Container';
import Landing from './components/Landing';
import '@fontsource/montserrat';

function App() {
  return (
    <ThemeProvider theme = {theme}>
      <BrowserRouter>
        <Container maxWidth={false} disableGutters={true}>
          <Routes>
            <Route path="home/*" element={<Landing/>}/>
          </Routes>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
