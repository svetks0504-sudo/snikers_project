import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';


const preventDefault = (event) => event.preventDefault();


function SocialLinks(){
    return(
         <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}
      onClick={preventDefault}
    >
      <IconButton
        component="a"
        href="https://facebook.com"
        target="_blank"
      >
        <img src="src/assets/icons/facebook.svg" alt="facebook" width={24} />
      </IconButton>

      <IconButton
        component="a"
        href="https://twitter.com"
        target="_blank"
      >
        <img src="src/assets/icons/twitter.svg" alt="twitter" width={24} />
      </IconButton>

      <IconButton
        component="a"
        href="https://example.com"
        target="_blank"
      >
        <img src="src/assets/icons/foto.svg" alt="foto" width={24} />
      </IconButton>
    </Box>
    )
}

export default SocialLinks;