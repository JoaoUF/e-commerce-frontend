import * as React from 'react'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'

interface SearchProps {
  getProductsSearch: (busqueda: string) => void
}

export default function SearchItem(props: SearchProps) {
  const { getProductsSearch } = props
  const [text, setText] = React.useState('')

  return (
    <Paper
      component="form"
      elevation={0}
      sx={{
        backgroundColor: 'transparent',
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '70%',
        mb: '2rem',
        border: '1px solid rgba(214, 226, 235, 0.8)',
      }}
    >
      <InputBase
        sx={{ mx: 1, flex: 1 }}
        value={text}
        onChange={e => setText(e.target.value as string)}
        placeholder="Search product"
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={() => getProductsSearch(text)}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}