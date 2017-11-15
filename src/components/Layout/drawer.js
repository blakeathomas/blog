import React, { Component } from 'react'
import { getAllCategories } from '../../graphql/queries/categories'
import Drawer from 'material-ui/Drawer'
import Divider from 'material-ui/Divider'
import IconButton from 'material-ui/IconButton'
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft'
import ListSubheader from 'material-ui/List/ListSubheader'
import Hidden from 'material-ui/Hidden'
import { ListItem, ListItemText, ListItemIcon } from 'material-ui/List'
import { Link } from 'react-router-dom'
import AlarmClock from 'material-ui-icons/Alarm'
import ClockIcon from 'material-ui-icons/AccessTime'
import { graphql } from 'react-apollo'

const displayCategories = props => {
  const { data, classes } = props
  if (data.loading) return

  return (
    <div>
      <Link to={`/category/`} className={classes.link}>
        <ListItem button>
          <ListItemText secondary={`All`} />
        </ListItem>
      </Link>
    </div>
  )
}

class SideComponent extends Component {
  render() {
    const classes = this.props.classes
    const drawer = (
      <div className={classes.drawerInner}>
        <div className={classes.drawerHeader}>
          <ListItem>
            <Link to="/">
              <img
                className={classes.image}
                alt="logo"
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxNzkuMiAxNzkuMiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTc5LjIgMTc5LjIiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxjaXJjbGUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjM0RBNERDIiBzdHJva2Utd2lkdGg9IjUuNSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBjeD0iOTAiIGN5PSI5MC45IiByPSI4Ni45Ii8+Cgk8Zz4KCQkKCQkJPHBvbHlsaW5lIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzNEQTREQyIgc3Ryb2tlLXdpZHRoPSI1LjUiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSI0LjQ4IiBwb2ludHM9IgoJCQkxMTMuNSw3MSAxMzMuOCw5MS4yIDEzMy44LDkxLjIgMTEzLjUsMTExLjQgCQkiLz4KCQkKCQkJPHBvbHlsaW5lIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzNEQTREQyIgc3Ryb2tlLXdpZHRoPSI1LjUiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSI0LjQ4IiBwb2ludHM9IgoJCQk2Ni40LDcxIDQ2LjIsOTEuMiA0Ni4yLDkxLjIgNjYuNCwxMTEuNCAJCSIvPgoJCTxsaW5lIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzNEQTREQyIgc3Ryb2tlLXdpZHRoPSI1LjUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgeDE9IjgxLjgiIHkxPSIxMjEuMiIgeDI9Ijk4LjEiIHkyPSI2MC42Ii8+Cgk8L2c+CjwvZz4KPC9zdmc+Cg=="
              />
            </Link>
          </ListItem>
          <IconButton
            className={classes.navIconHide}
            onClick={this.props.handleDrawerClose}
          >
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <Link to="/" className={classes.link}>
          <ListItem button>
            <ListItemText secondary="Home" />
          </ListItem>
        </Link>
        <Divider />
        <ListSubheader>Categories</ListSubheader>
        {displayCategories(this.props)}
        <Divider />

        <Divider />
      </div>
    )
    return (
      <div>
        <Hidden mdUp>
          <Drawer
            type="temporary"
            open={this.props.open}
            classes={{
              paper: classes.drawerPaper
            }}
            onRequestClose={this.props.handleDrawerToggle}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden mdDown implementation="css">
          <Drawer
            type="permanent"
            open
            classes={{
              paper: classes.drawerPaper
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </div>
    )
  }
}

export default graphql(getAllCategories)(SideComponent)
