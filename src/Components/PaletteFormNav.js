import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
import DraggableColorList from './DraggableColorList';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Icon from '@material-ui/core/Icon';
import { arrayMove } from 'react-sortable-hoc';

class PaletteFormNav extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }


    render() {

        const { classes, open } = this.props;

        return (
            <>
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
                            Add New Palette Page - This page is yet to be finished....
                        <ValidatorForm onSubmit={e => savePaletteFully()}>
                                <TextValidator
                                    validators={['required', 'uniqueName']}
                                    errorMessages={['this field is required', 'Name is taken']}
                                    label="Palette Name" value={newPaletteName} onChange={(e) => setNewPaletteName(e.target.value)} />
                                <Button type="submit" variant="contained" color="primary" className={classes.button}
                                >
                                    <Icon>add_circle</Icon>  Save Palette
                        </Button>
                                <Link style={{ textDecoration: 'none' }} to="/"> <Button variant="contained" color="secondary" >Go Back</Button> </Link>
                            </ValidatorForm>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </>
        )
    }
}

export default PaletteFormNav;