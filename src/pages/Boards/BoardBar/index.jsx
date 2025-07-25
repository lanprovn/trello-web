import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import AvatarGroup from '@mui/material/AvatarGroup'
import Avatar from '@mui/material/Avatar'
import { Tooltip } from '@mui/material'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

const MENU_STYLES = {
  color: 'white',
  backgroundColor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '.MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    backgroundColor: 'primary.50'
  }

}

function BoardBar() {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      paddingX: 2,
      overflowX: 'auto',
      backgroundColor: (theme) => (theme.palette.mode == 'dark' ? '#2c3e50' : '#1976d2'),
      borderBottom: '1px solid white'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={MENU_STYLES}
          icon={<DashboardIcon />}
          label="NL MERN Stack"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<VpnLockIcon />}
          label="Public/ Private Workspace"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<AddToDriveIcon />}
          label="Add to Google Drive"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<BoltIcon />}
          label="Automation"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<FilterListIcon />}
          label="Filters"
          clickable
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          variant="outlined"
          startIcon={<PersonAddIcon />}
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': { borderColor: 'white' }
          }}
        >
          Invite
        </Button>
        <AvatarGroup
          max={4}
          sx={{
            gap: '10px',
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16,
              border: 'none'
            }
          }}
        >
          <Tooltip title='NL'>
            <Avatar
              alt="NL"
              src="https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/511013731_1770064953938967_324177085752043671_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=gbI-4DDK5T8Q7kNvwEBJ4jj&_nc_oc=Adlf9NqEKkHu9zh4rd4O-yGwNLJvvWkm9gZ6ZGH9zPt3LYYgYUmsKQltW_4hpkmP9QY&_nc_zt=23&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=6N1k18vvUjouEjmU3G8v7g&oh=00_AfSsViOqbv6Ok722-3J8yGO1xfOCOe1PMEoiPelp-L9HyA&oe=6883873E"
            />
          </Tooltip>
          <Tooltip title='NL'>
            <Avatar
              alt="NL"
              src="https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/511013731_1770064953938967_324177085752043671_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=gbI-4DDK5T8Q7kNvwEBJ4jj&_nc_oc=Adlf9NqEKkHu9zh4rd4O-yGwNLJvvWkm9gZ6ZGH9zPt3LYYgYUmsKQltW_4hpkmP9QY&_nc_zt=23&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=6N1k18vvUjouEjmU3G8v7g&oh=00_AfSsViOqbv6Ok722-3J8yGO1xfOCOe1PMEoiPelp-L9HyA&oe=6883873E"
            />
          </Tooltip>
          <Tooltip title='NL'>
            <Avatar
              alt="NL"
              src="https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/511013731_1770064953938967_324177085752043671_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=gbI-4DDK5T8Q7kNvwEBJ4jj&_nc_oc=Adlf9NqEKkHu9zh4rd4O-yGwNLJvvWkm9gZ6ZGH9zPt3LYYgYUmsKQltW_4hpkmP9QY&_nc_zt=23&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=6N1k18vvUjouEjmU3G8v7g&oh=00_AfSsViOqbv6Ok722-3J8yGO1xfOCOe1PMEoiPelp-L9HyA&oe=6883873E"
            />
          </Tooltip>
          <Tooltip title='NL'>
            <Avatar
              alt="NL"
              src="https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/511013731_1770064953938967_324177085752043671_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=gbI-4DDK5T8Q7kNvwEBJ4jj&_nc_oc=Adlf9NqEKkHu9zh4rd4O-yGwNLJvvWkm9gZ6ZGH9zPt3LYYgYUmsKQltW_4hpkmP9QY&_nc_zt=23&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=6N1k18vvUjouEjmU3G8v7g&oh=00_AfSsViOqbv6Ok722-3J8yGO1xfOCOe1PMEoiPelp-L9HyA&oe=6883873E"
            />
          </Tooltip>
          <Tooltip title='NL'>
            <Avatar
              alt="NL"
              src="https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/511013731_1770064953938967_324177085752043671_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=gbI-4DDK5T8Q7kNvwEBJ4jj&_nc_oc=Adlf9NqEKkHu9zh4rd4O-yGwNLJvvWkm9gZ6ZGH9zPt3LYYgYUmsKQltW_4hpkmP9QY&_nc_zt=23&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=6N1k18vvUjouEjmU3G8v7g&oh=00_AfSsViOqbv6Ok722-3J8yGO1xfOCOe1PMEoiPelp-L9HyA&oe=6883873E"
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
