import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Product } from '../services/product/Product.interface'

interface ProductCardProps {
  product: Product
}

export default function ProductCard(props: ProductCardProps) {
  const { product } = props

  return (
    <Card
      sx={{
        width: { xs: '100%', sm: '30%' }
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View</Button>
        <Button size="small">Add to card</Button>
      </CardActions>
    </Card>
  );
}
