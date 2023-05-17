import React, { useState, useEffect } from 'react'
import { Container, InputBase, Paper, IconButton, ListItemAvatar, Popper, Box, Drawer, Divider, ListItemText, ListItem, ListItemButton, List, Button, ListItemIcon, Avatar, Grid, Collapse, Link, Typography } from "@mui/material";
import { useSpring, animated } from '@react-spring/web'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import { getAllThread } from '../../../actions/thread'
import { getAllUser } from '../../../actions/user';
import Logo from './nettee.png'
import expandLess from './expandLess.png'
import expandMore from './expandMore.png'
import menu from './menu.png'
import search from './search.png';
import home from './home.png'
import notification from './alarm.png'
import challenge from './challenge.png'
import pin from './pin.png'
import help from './help.png'
import setting from './setting.png'

const SideBar = () => {
  const [state, setState] = useState({
    left: false,
  });
  const [openUserCollapse, setOpenUserCollapse] = useState(false);
  const [openChallengeCollapse, setOpenChallengeCollapse] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [width, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = JSON.parse(localStorage.getItem("NETTEE_TOKEN"))?.data?.user;

  let thread = useSelector((state) => state.threadReducer?.data?.threadData?.filter((thread) => thread?.pins?.includes(currentUser?._id)));
  const allUser = useSelector((state) => state.userReducer?.allUserData);

  const mergeArrays = (thread, allUser) => {
    let res = [];
    res = thread.map(obj => {
      const index = allUser.findIndex(el => el["_id"] === obj["userID"]);
      let owner = index !== -1 ? allUser[index] : {};
      return {
        ...obj,
        owner,
      };
    });
    return res;
  };

  const Fade = React.forwardRef(function Fade(props, ref) {
    const { in: openNotification, children, onEnter, onExited, ...other } = props;
    const style = useSpring({
      from: { opacity: 0 },
      to: { opacity: openNotification ? 1 : 0 },
      onStart: () => {
        if (openNotification && onEnter) {
          onEnter();
        }
      },
      onRest: () => {
        if (!openNotification && onExited) {
          onExited();
        }
      },
    });

    return (
      <animated.div ref={ref} style={style} {...other}>
        {children}
      </animated.div>
    );
  });

  Fade.propTypes = {
    children: PropTypes.element,
    in: PropTypes.bool,
    onEnter: PropTypes.func,
    onExited: PropTypes.func,
  };

  const handleClick = () => {
    setOpenUserCollapse(!openUserCollapse);
  };

  const handlePopover = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenNotification((previousOpen) => !previousOpen);
  }

  const handleLogout = () => {
    localStorage.removeItem("NETTEE_TOKEN");
    navigate('/login', { replace: true });
  }

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
    if (!open) {
      setOpenNotification(false);
    }
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect(() => {
    dispatch(getAllThread());
    dispatch(getAllUser());
  }, [openNotification, dispatch])


  return (
    <Container component="main" disableGutters={true} sx={{ width: 'inherit', position: 'fixed' }}>
      <Popper id="popover" open={openNotification} anchorEl={anchorEl} placement="right-start"
        sx={{
          zIndex: 1000000,
          width: '350px',
          overflowY: 'scroll',
          maxHeight: '500px',
        }}
      >
        <Box component='main' sx={{ p: 1, bgcolor: '#FFFFFF' }}>
          <Grid container direction="column"
            justifyContent="center"
            alignItems="center">
            {mergeArrays(thread, allUser).map((elems, index) => {
              return (
                <Grid item sx={{
                  border: '2px solid red',
                  padding: '4px',
                  marginBottom: '6px',
                  width: '100%'
                }}
                  key={index}
                >
                  <ListItem alignItems="flex-start" disablePadding>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: 'orange' }} src={elems?.owner && elems.owner.image}>{!elems?.owner?.image && elems?.owner?.name?.charAt(0)}</Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Box sx={{ position: 'relative' }}>
                          <Typography
                            sx={{ display: 'inline', fontWeight: '700' }}
                            component="span"
                            variant="body2"
                            color="#081FF7"
                          >
                            {elems?.owner?.name ? elems?.owner?.name : 'Unknown'}
                          </Typography>
                          <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body1"
                            color="text.secondary"
                          >
                            &nbsp; {new Date(elems.createdAt).toLocaleDateString("en-US")}
                          </Typography>
                          <Box sx={{
                            position: 'absolute', right: 0, top: 0, display: 'flex', flexDirection: 'row',
                            '& > *': {
                              marginX: '2px'
                            }
                          }}>
                            <Avatar sx={{ bgcolor: 'orange', width: '12px', height: '12px', padding: '2px' }} src={pin} alt='pin icon' />
                            <Avatar sx={{ bgcolor: 'red', width: '12px', height: '12px', padding: '2px' }} src={pin} alt='pin icon' />
                          </Box>
                        </Box>
                      }
                      secondary={
                        <React.Fragment>
                          {elems.content}
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                </Grid>)
            })}
          </Grid>
        </Box>
      </Popper>
      {(width > 900) ?
        <Grid container position='relative' sx={{ width: '100%', height: '95vh' }}>
          <Grid item sx={{ width: '100%' }}
          >
            <Box>
              <Link underline='none'>
                <Grid container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  sx={{ padding: '16px' }}
                >
                  <Grid item>
                    <ListItemIcon>
                      <img src={Logo} alt="logo" style={{ maxWidth: '100%', height: '7.5vh' }} />
                    </ListItemIcon>
                  </Grid>
                  <Grid item>
                    <Typography variant='h4' sx={{ fontSize: '1.5rem' }} >
                      Nettee
                    </Typography>
                  </Grid>
                </Grid>
              </Link>
              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <Avatar sx={{ bgcolor: 'orange' }} src={currentUser.image && currentUser.image}>{!currentUser.image && currentUser.name.charAt(0)}</Avatar>
                </ListItemIcon>
                <ListItemText primary={currentUser.email} />
                {openUserCollapse ? <img src={expandLess} alt="expand less" style={{ width: '16px', height: '16px' }} /> : <img src={expandMore} alt="expand more" style={{ width: '16px', height: '16px' }} />}
              </ListItemButton>
              <Collapse in={openUserCollapse} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }} onClick={() => navigate('/profile')}>
                    <ListItemText primary="My profile" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }} onClick={handleLogout}>
                    <ListItemText primary="Logout" />
                  </ListItemButton>
                </List>
              </Collapse>
            </Box>
            <Divider />
            <Paper
              component="form"
              sx={{ display: 'flex', alignItems: 'center', width: '100%' }}
            >
              <IconButton aria-label="search">
                <img src={search} alt='search icon' />
              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                inputProps={{ 'aria-label': 'Search' }}
              />
            </Paper>
            <List>
              <ListItem disablePadding>
                <ListItemButton onClick={() => navigate('/home')}>
                  <ListItemIcon>
                    <ListItemIcon>
                      <Avatar src={home} alt='home' />
                    </ListItemIcon>
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={handlePopover}>
                  <ListItemIcon>
                    <ListItemIcon>
                      <Avatar src={notification} alt='notification' />
                    </ListItemIcon>
                  </ListItemIcon>
                  <ListItemText primary="Notification" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{ background: openChallengeCollapse ? "#E6E9FE" : "none" }}>
                <ListItemButton onClick={() => setOpenChallengeCollapse(!openChallengeCollapse)}>
                  <ListItemIcon>
                    <ListItemIcon>
                      <Avatar src={challenge} alt='challenge' />
                    </ListItemIcon>
                  </ListItemIcon>
                  <ListItemText primary="Challenge" />
                  {openChallengeCollapse ? <img src={expandLess} alt="expand less" style={{ width: '16px', height: '16px' }} /> : <img src={expandMore} alt="expand more" style={{ width: '16px', height: '16px' }} />}
                </ListItemButton>
              </ListItem>
              <Collapse in={openChallengeCollapse
              } timeout="auto" unmountOnExit sx={{ background: openChallengeCollapse ? "#E6E9FE" : "none" }}>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 8 }} onClick={() => navigate("/qChallenge")}>
                    <ListItemText primary="Quick challenges" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 8 }} onClick={() => navigate("/lChallenge")}>
                    <ListItemText primary="Long challenges" />
                  </ListItemButton>
                </List>
              </Collapse>
            </List>
          </Grid>
          <Grid item sx={{ position: 'absolute', bottom: 0, width: '100%' }}>
            <Divider />
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <ListItemIcon>
                      <Avatar src={help} alt='help' />
                    </ListItemIcon>
                  </ListItemIcon>
                  <ListItemText primary="Help" />
                </ListItemButton>
              </ListItem>
            </List>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <ListItemIcon>
                      <Avatar src={setting} alt='settings' />
                    </ListItemIcon>
                  </ListItemIcon>
                  <ListItemText primary="Settings" />
                </ListItemButton>
              </ListItem>
            </List>
          </Grid>
        </Grid>
        :
        <Grid container maxWidth>
          {['left'].map((anchor) => (
            <React.Fragment key={anchor}>
              <Button onClick={toggleDrawer(anchor, true)}>
                <img src={menu} alt="menu" style={{ width: '64px', height: '64px' }} />
              </Button>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                <Box
                  sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
                  role="presentation"
                // onKeyDown={toggleDrawer(anchor, false)}
                >
                  <Box>
                    <Link underline='none'>
                      <Grid container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        sx={{ padding: '16px' }}
                      >
                        <Grid item>
                          <ListItemIcon>
                            <img src={Logo} alt="logo" style={{ maxWidth: '100%', height: '7.5vh' }} />
                          </ListItemIcon>
                        </Grid>
                        <Grid item>
                          <Typography variant='h4' sx={{ fontSize: '1.5rem' }} >
                            Nettee
                          </Typography>
                        </Grid>
                      </Grid>
                    </Link>
                    <ListItemButton onClick={handleClick}>
                      <ListItemIcon>
                        <Avatar sx={{ bgcolor: 'orange' }} src={currentUser.image && currentUser.image}>{!currentUser.image && currentUser.name.charAt(0)}</Avatar>
                      </ListItemIcon>
                      <ListItemText primary={currentUser.email} />
                      {openUserCollapse ? <img src={expandLess} alt="expand less" style={{ width: '16px', height: '16px' }} /> : <img src={expandMore} alt="expand more" style={{ width: '16px', height: '16px' }} />}
                    </ListItemButton>
                    <Collapse in={openUserCollapse} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }} onClick={() => navigate('/profile')}>
                          <ListItemText primary="My profile" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }} onClick={handleLogout}>
                          <ListItemText primary="Logout" />
                        </ListItemButton>
                      </List>
                    </Collapse>
                  </Box>
                  <Divider />
                  <Paper
                    component="form"
                    sx={{ p: '8px', display: 'flex', alignItems: 'center', width: '100%' }}
                  >
                    <IconButton sx={{}} aria-label="search">
                      <img src={search} alt='search icon' />
                    </IconButton>
                    <InputBase
                      sx={{ ml: 1, flex: 1 }}
                      placeholder="Search"
                      inputProps={{ 'aria-label': 'Search' }}
                    />
                  </Paper>
                  <List>
                    <ListItem disablePadding>
                      <ListItemButton onClick={() => navigate('/home')}>
                        <ListItemIcon>
                          <ListItemIcon>
                            <Avatar src={home} alt='home' />
                          </ListItemIcon>
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton onClick={handlePopover}>
                        <ListItemIcon>
                          <ListItemIcon>
                            <Avatar src={notification} alt='notification' />
                          </ListItemIcon>
                        </ListItemIcon>
                        <ListItemText primary="Notification" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding sx={{ background: openChallengeCollapse ? "#E6E9FE" : "none" }}>
                      <ListItemButton onClick={() => setOpenChallengeCollapse(!openChallengeCollapse)}>
                        <ListItemIcon>
                          <ListItemIcon>
                            <Avatar src={challenge} alt='challenge' />
                          </ListItemIcon>
                        </ListItemIcon>
                        <ListItemText primary="Challenge" />
                        {openChallengeCollapse ? <img src={expandLess} alt="expand less" style={{ width: '16px', height: '16px' }} /> : <img src={expandMore} alt="expand more" style={{ width: '16px', height: '16px' }} />}
                      </ListItemButton>
                    </ListItem>
                    <Collapse in={openChallengeCollapse
                    } timeout="auto" unmountOnExit sx={{ background: openChallengeCollapse ? "#E6E9FE" : "none" }}>
                      <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 8 }} onClick={() => navigate("/qChallenge")} >
                          <ListItemText primary="Quick challenges" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 8 }} onClick={() => navigate("/lChallenge")}>
                          <ListItemText primary="Long challenges" />
                        </ListItemButton>
                      </List>
                    </Collapse>
                  </List>
                </Box>
                <Box sx={{ position: 'absolute', bottom: 0, width: '100%' }}>
                  <Divider />
                  <List>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <ListItemIcon>
                            <Avatar src={help} alt='help' />
                          </ListItemIcon>
                        </ListItemIcon>
                        <ListItemText primary="Help" />
                      </ListItemButton>
                    </ListItem>
                  </List>
                  <List>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <ListItemIcon>
                            <Avatar src={setting} alt='settings' />
                          </ListItemIcon>
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Box>
              </Drawer>
            </React.Fragment>
          ))}
        </Grid>}
    </Container>
  )
}

export default SideBar