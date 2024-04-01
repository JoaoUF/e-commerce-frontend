import { alpha } from '@mui/material'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import SearchItem from '../components/SearchItem'
import { Product } from '../services/product/Product.interface'
import ProductCard from '../components/ProductCard'
import { UUID } from 'crypto'

interface BodyProps {
  result: Product[]
  getProductsSearch: (busqueda: string) => void
  setValue: (numero: UUID) => void
}

export default function Body(props: BodyProps) {
  const { result, getProductsSearch, setValue } = props

  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
            : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 4, sm: 8 },
        }}
      >
        <SearchItem getProductsSearch={getProductsSearch} />
        <Stack
          spacing={{ xs: 3, sm: 2 }}
          direction="row"
          useFlexGap
          flexWrap="wrap"
          justifyContent={'space-around'}
          sx={{
            width: { xs: '100%' }
          }}
        >
          {result && result?.map((product, index) => (
            <ProductCard product={product} setValue={setValue} key={index} />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}