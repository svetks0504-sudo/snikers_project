import {Box, IconButton} from '@mui/material'

const preventDefault = (event) => event.preventDefault();


function SocialContact(){
    return(
        <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: "2vw"
      }}
      onClick={preventDefault}
    >
      <IconButton 
        component="a"
        href="https://www.snapchat.com"
        target="_blank"
      >
        <img style={{width: "4vw"}}
        src="src/assets/icons/group.svg" alt="facebook" width={24} />
      </IconButton>

      <IconButton
        component="a"
        href="https://facebook.com"
        target="_blank"
      >
        <img style={{width: "4vw"}}
        src="src/assets/icons/symbol.svg.svg" alt="twitter" width={24} />
      </IconButton>

      <IconButton
        component="a"
        href="https://twitter.com"
        target="_blank"
      >
        <img style={{width: "4vw"}}
        src="src/assets/icons/x_icon.jpeg.svg" alt="foto" width={24} />
      </IconButton>
    </Box>
    )
}

export default SocialContact;
