import { createMuiTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00695c',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontSize: 12,
  },
  overrides: {
    MuiTabs: {
      flexContainer: {
        justifyContent: 'center',
      },
    },
    MuiRadio: {
      root: {
        padding: '4px',
      },
    },
    MuiAccordionSummary: {
      expandIcon: {
        padding: '2px',
      },
    },
    MuiAccordionDetails: {
      root: {
        paddingTop: '0px',
        marginLeft: '16px',
        display: 'unset',
      },
    },
    MuiOutlinedInput: {
      multiline: {
        padding: '12px',
      },
    },
    MuiDialog: {
      paperWidthSm: {
        maxWidth: '900px',
      },
    },
  },
})

export default theme
