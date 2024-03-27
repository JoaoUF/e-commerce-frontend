import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'

export default function SearchItem() {
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
        placeholder="Search product"
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}