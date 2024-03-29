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
import { useLocalStorage } from '../hooks/useLocalStorage'
import { ListProduct } from '../services/product/ListProduct.interface'
import { ProductService } from '../services/product/Product.service'

export default function LandingPage() {
  const [mode, setMode] = React.useState<PaletteMode>('light')
  const [showCustomTheme, setShowCustomTheme] = React.useState(true)
  const [listProduct, setListProduct] = React.useState<ListProduct | null>(null)
  const LPtheme = createTheme(getLPTheme(mode))
  const defaultTheme = createTheme({ palette: { mode } })
  // const { setValue }: any = useLocalStorage()

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  const getAllData = async () => {
    try {
      const productService = new ProductService()
      const output = await productService.getAllProducts()
      return output
    } catch (error) {
      console.log(error)
      return null
    }
  }

  React.useEffect(() => {
    getAllData().then((data) => {
      setListProduct(data)
    })
  }, [])

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
          {listProduct && listProduct.result.map((product) => (
            <ProductCard product={product} />
          ))}
        </Body>
        <Pagination count={11} defaultPage={1} siblingCount={0} />
        <Divider />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}