import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import pokemonLogo from '../assets/pokemon-logo.png'

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    background: "#3f51b5"
  },
  drawerPaper: {
    width: drawerWidth,
    background: "#3f51b5"
  },
  bigAvatar: {
    margin: 30,
    width: 180,
    height: 180,
  },
  logo: { 
    height: 200
  },
}));

function SideMenu() {

  const styles = useStyles();

  return (
    <Drawer
      open={true}
      variant='permanent'
      anchor='left'
      className={styles.drawer}
      classes={{
        paper: styles.drawerPaper,
      }}
      backgroundColor="#3f51b5"
    >
      <Grid container justify='center' alignItems='center'>
        <img style={{height: "90px", width: "200px"}} src={pokemonLogo} alt="Logo" />
        <Avatar
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${Math.floor(Math.random() * 100) + 1}.png`}
          className={styles.bigAvatar}
        />
                <Avatar
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${Math.floor(Math.random() * 100) + 1}.png`}
          className={styles.bigAvatar}
        />
                <Avatar
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${Math.floor(Math.random() * 100) + 1}.png`}
          className={styles.bigAvatar}
        />
      </Grid>
    </Drawer>
  );
}

export default SideMenu;