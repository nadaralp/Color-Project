import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Button } from '@material-ui/core';
import { ChromePicker } from 'react-color';
import DraggableColorBox from './DraggableColorBox';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Icon from '@material-ui/core/Icon';

const drawerWidth = 350;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        height: ' calc( 100vh - 64px )',
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

function PersistentDrawerLeft(props) {
    const { savePalette, history, palettes } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [backgroundColor, setBackgroundColor] = useState('teal');
    const [colors, setColors] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [newPaletteName, setNewPaletteName] = useState("");

    function savePaletteFully() {
        const newPalette = {
            paletteName: newPaletteName,
            colors,
            id: generateId(newPaletteName)
        };
        console.log(newPalette);
        savePalette(newPalette);
        history.push('/');
    }

    const generateId = (paletteName) => paletteName.replace(/ /g, "-").toLowerCase();

    function handleDrawerOpen() {
        setOpen(true);
    }

    function handleDrawerClose() {
        setOpen(false);
    }

    const handleSubmit = e => {
        e.preventDefault();
        setColors([...colors, {
            name: inputValue,
            color: backgroundColor
        }])
        setInputValue('');

    }

    useEffect(() => {
        console.log(colors)
    }, [colors])

    useEffect(() => {
        ValidatorForm.addValidationRule('isColorNameUnique', (value) => {
            return colors.every(({ name }) => value.toLowerCase() !== name.toLowerCase());
        });
        ValidatorForm.addValidationRule('isUniqueColor', () => {
            return colors.every(({ color }) => color !== backgroundColor);

        });
        ValidatorForm.addValidationRule('uniqueName', value => {
            console.log(palettes);
            return palettes.every(({ paletteName }) => paletteName.toLowerCase() !== newPaletteName.toLowerCase())
        })
    }, [colors, backgroundColor, palettes, newPaletteName])

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                color="default"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Persistent drawer
                        <ValidatorForm onSubmit={e => savePaletteFully()}>
                            <TextValidator
                                validators={['required', 'uniqueName']}
                                errorMessages={['this field is required', 'Name is taken']}
                                label="Palette Name" value={newPaletteName} onChange={(e) => setNewPaletteName(e.target.value)} />
                            <Button type="submit" variant="contained" color="primary" className={classes.button}
                            >
                                <Icon>add_circle</Icon>  Save Palette
                        </Button>
                        </ValidatorForm>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>

                <Divider />
                <Typography variant="h4" >Design Your Palette</Typography>
                <div>
                    <Button variant="contained" color="secondary" >Clear Palette</Button>
                    <Button variant="contained" color="primary" >Random Color</Button>
                </div>
                <ChromePicker onChangeComplete={(newColor) => setBackgroundColor(newColor.hex)} color={backgroundColor} />
                <ValidatorForm onSubmit={e => handleSubmit(e)} >
                    <TextValidator value={inputValue} onChange={(e) => setInputValue(e.target.value)}
                        validators={['required', 'isColorNameUnique', 'isUniqueColor']}
                        errorMessages={['Enter a color name', 'Name is used', 'Color already used']}
                    />
                    <Button type="submit" variant="contained" style={{ backgroundColor }}>Add Color</Button>
                </ValidatorForm>
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
                {
                    colors.map((color, index) => <DraggableColorBox key={index} backgroundColor={color.color} name={color.name} />)
                }

            </main>
        </div>
    );
}

export default PersistentDrawerLeft