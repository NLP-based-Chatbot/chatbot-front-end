import React from 'react'
import { makeStyles, Box, Typography, Link, ButtonGroup, Button, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, IconButton, Collapse, CircularProgress } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { PDFDownloadLink } from '@react-pdf/renderer';
import TelecomComplaint from '../Complaints/TelecomComplaint';
import { GetAppRounded } from '@material-ui/icons';
import { useSelector} from 'react-redux';
import { getUser } from '../../store/slices/auth';
import HealthcareComplaint from '../Complaints/HealthcareComplaint';

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "fit-content",
    marginTop: theme.spacing(2),
  },
  container_bot_text: {
    maxWidth: "70%",
    borderRadius: "1.2rem 1.2rem 1.2rem 0",
    width: "fit-content",
    backgroundColor: theme.palette.primary.contrastText,
    padding: theme.spacing(2, 3),
    marginLeft: theme.spacing(2)
  },
  container_bot_buttons: {
    maxWidth: "70%",
    width: "fit-content",
    marginLeft: theme.spacing(3)
  },
  container_bot_table: {
    maxWidth: "90%",
    width: "fit-content",
    marginLeft: theme.spacing(2)
  },
  container_bot_complaint: {
    maxWidth: "50%",
    borderRadius: "1.2rem 1.2rem 1.2rem 0",
    width: "fit-content",
    backgroundColor: theme.palette.primary.contrastText,
    padding: theme.spacing(2, 3),
    marginLeft: theme.spacing(2)
  },
  container_user: {
    maxWidth: "70%",
    borderRadius: "1.2rem 1.2rem 0 1.2rem",
    width: "fit-content",
    backgroundColor: theme.palette.secondary.main,
    padding: theme.spacing(2, 3),
    marginRight: theme.spacing(2),
    marginLeft: "auto"
  },
  font: {
    fontWeight: "600",
    color:"black",
    textDecoration: 'none'
  },
  link: {
    fontWeight: 600,
  },
  row_root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
}))

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.row_root}>
        <TableCell component="th" scope="row">
          {row.package_name}
        </TableCell>
        <TableCell align="right">Rs. {row.value}</TableCell>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box>
              <Table size="small" aria-label="purchases">
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Description
                    </TableCell>
                    <TableCell>{row.description}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      How to Activate
                    </TableCell>
                    <TableCell>{row.activation_method}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Visit Offcial Website
                    </TableCell>
                    <TableCell>
                      <Button size="small" href={row.url} color="primary" variant="outlined" target="_blank">
                        More Details
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const ChatMessage = ({ sender, sendMessage, type, text = "", image = "",  buttons = [], map = "", table = [], complaint = {}, button = {}}) => {
  const displayName = useSelector(getUser)
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      {sender === 'bot' ?
        <Box data-testid='bot'>
          {type === "text" && 
          <Box className={classes.container_bot_text}>
            <Typography variant="body1" className={classes.font}>{text}</Typography>
          </Box>
          }
          {type === "image"  && <Link className={classes.link} href={`${image}`}>{image}</Link>}
          {type === "buttons" && 
          <Box  className={classes.container_bot_buttons} >
            <ButtonGroup size="small" disableElevation variant="contained" color="primary" aria-label="contained primary button group">
              {buttons && buttons.map((button, index) => (
                <Button onClick={() => sendMessage(button.payload, button.title)} key={`${index}`}>{button.title}</Button>
              ))}
              
            </ButtonGroup>
          </Box>
          }
          {type === "table" && 
          <Box  className={classes.container_bot_table} >
          <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>Package</TableCell>
                  <TableCell align="right">Value</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {table && table.map((row) => (
                  <Row key={row.name} row={row} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          </Box>
          }
          {type === "button" && 
          <Box  className={classes.container_bot_buttons} >
            <Button disableElevation variant="contained" color="primary" size="small" href={button.url} target="_blank">
              {button.title}
            </Button>
          </Box>
          }
          {type === "complaint" && 
          <Box  className={classes.container_bot_complaint} >
            {complaint.domain === "telecom" && 
              <PDFDownloadLink document={<TelecomComplaint issue={complaint.title} description={complaint.description} name={complaint.fullname} phone={complaint.contactnum} email={complaint.email} />} fileName={`complaint_preview_${displayName.first_name}.pdf`} >
                {({ blob, url, loading, error }) =>
                  loading ? 
                  <>
                    <Typography variant="body1" className={classes.font}>Document Loading...</Typography>
                    <CircularProgress />
                  </> : 
                  <>
                  <Typography variant="body1" className={classes.font}>Download</Typography>
                  <IconButton aria-label="download">
                    <GetAppRounded />
                  </IconButton>
                  </>
                }
              </PDFDownloadLink>
            }
            {complaint.domain === "healthcare" && 
              <PDFDownloadLink document={<HealthcareComplaint issue={complaint.title} description={complaint.description} name={complaint.fullname} phone={complaint.contactnum} email={complaint.email} />} fileName={`complaint_preview_${displayName.first_name}.pdf`} >
                {({ blob, url, loading, error }) =>
                  loading ? 
                  <>
                    <Typography variant="body1" className={classes.font}>Document Loading...</Typography>
                    <CircularProgress />
                  </> : 
                  <>
                  <Typography variant="body1" className={classes.font}>Download</Typography>
                  <IconButton aria-label="download">
                    <GetAppRounded />
                  </IconButton>
                  </>
                }
              </PDFDownloadLink>
            }
            
          </Box>
          }
     
        </Box>
        :
        <Box data-testid='user' className={classes.container_user}>
          <Typography variant="body1" className={classes.font}>{text}</Typography>
        </Box>
      }
    </Box>
  )
}

export default ChatMessage
