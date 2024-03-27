import * as React from 'react'
import { PaletteMode } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Pagination from '@mui/material/Pagination'
import AppAppBar from '../layout/AppBar'
import Footer from '../layout/Footer'
import Body from '../layout/Body'
import ProductCard from '../components/ProductCard'
import getLPTheme from '../components/getLPTheme'

export default function LandingPage() {
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const LPtheme = createTheme(getLPTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev);
  };

  return (
    <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        flexDirection='column'
        sx={{ bgcolor: 'background.default' }}
      >
        <Body>
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Body>
        <Pagination count={11} defaultPage={1} siblingCount={0} />
        <Divider />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}