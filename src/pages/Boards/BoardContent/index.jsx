import Box from '@mui/material/Box'

function BoardContent() {
  return (
    <Box sx={{
      backgroundColor: (theme) => (theme.palette.mode == 'dark' ? '#2c3e50' : '#1976d2'),
      width: '100%',
      height: (theme) => `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
      display: 'flex',
      alignItems: 'center'
    }}>
      BoardContent
    </Box>
  )
}

export default BoardContent
