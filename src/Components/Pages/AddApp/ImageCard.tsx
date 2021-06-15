// imports the React Javascript Library
import React from 'react'

import Fab from '@material-ui/core/Fab'
import Grid from '@material-ui/core/Grid'

import red from '@material-ui/core/colors/red'
import blue from '@material-ui/core/colors/blue'

import SearchIcon from '@material-ui/icons/Search'
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate'

//Tabs
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
      width: 500,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    icon: {
      margin: theme.spacing(2),
    },
    iconHover: {
      margin: theme.spacing(2),
      '&:hover': {
        color: red[800],
      },
    },
    cardHeader: {
      textalign: 'center',
      align: 'center',
      backgroundColor: 'white',
    },
    input: {
      display: 'none',
    },
    title: {
      color: blue[800],
      fontWeight: 'bold',
      fontFamily: 'Montserrat',
      align: 'center',
    },
    button: {
      color: blue[900],
      margin: 10,
    },
    secondaryButton: {
      color: 'gray',
      margin: 10,
    },
    typography: {
      margin: theme.spacing(2),
      backgroundColor: 'default',
    },

    searchRoot: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
    },
    searchInput: {
      marginLeft: 8,
      flex: 1,
    },
    searchIconButton: {
      padding: 10,
    },
    searchDivider: {
      width: 1,
      height: 28,
      margin: 4,
    },
  })
)

// handleSearchURL = event => {
//     console.log();
//     var file = event.target.files[0];
//     var reader = new FileReader();
//     var url = reader.readAsDataURL(file);

//     reader.onloadend = function(e) {
//       this.setState({
//         selectedFile: [reader.result]
//       });
//     }.bind(this);
//     console.log(url); // Would see a path?

//     this.setState({
//       selectedFile: event.target.files[0],
//       imageUploaded: 1
//     });
//   };

//   handleImageSearch(url) {
//     var filename = url.substring(url.lastIndexOf("/") + 1);
//     console.log(filename);
//     this.setState({
//       mainState: "uploaded",
//       imageUploaded: true,
//       selectedFile: url,
//       fileReader: undefined,
//       filename: filename
//     });
//   }

//   handleSeachClose = event => {
//     this.setState({
//       mainState: "initial"
//     });
//   };

//   renderSearchState() {
//     const { classes } = this.props;

//     return (
//       <Paper className={classes.searchRoot} elevation={1}>
//         <InputBase className={classes.searchInput} placeholder="Image URL" />
//         <IconButton
//           className={classes.button}
//           aria-label="Search"
//           onClick={this.handleImageSearch}
//         >
//           <SearchIcon />
//         </IconButton>
//         <Divider className={classes.searchDivider} />
//         <IconButton
//           color="primary"
//           className={classes.secondaryButton}
//           aria-label="Close"
//           onClick={this.handleSeachClose}
//         >
//           <CloseIcon />
//         </IconButton>
//       </Paper>
//     );
//   }

//   handleAvatarClick(value) {
//     var filename = value.url.substring(value.url.lastIndexOf("/") + 1);
//     console.log(filename);
//     this.setState({
//       mainState: "uploaded",
//       imageUploaded: true,
//       selectedFile: value.url,
//       fileReader: undefined,
//       filename: filename
//     });
//   }

//   renderGalleryState() {
//     const { classes } = this.props;
//     const listItems = this.props.imageGallery.map(url => (
//       <div
//         onClick={value => this.handleAvatarClick({ url })}
//         style={{
//           padding: "5px 5px 5px 5px",
//           cursor: "pointer"
//         }}
//       >
//         <Avatar src={url} />
//       </div>
//     ));

//     /*const listItems = this.props.imageGallery.map(url => (
//       <div
//         onClick={value => this.handleAvatarClick({ url })}
//         style={{
//           padding: "5px 5px 5px 5px",
//           cursor: "pointer"
//         }}
//       >
//         <Avatar shape="square" size={100} src={url} />
//       </div>
//     ));*/

//     return (
//       <React.Fragment>
//         <Grid>
//           {listItems}
//           <IconButton
//             color="primary"
//             className={classes.secondaryButton}
//             aria-label="Close"
//             onClick={this.handleSeachClose}
//           >
//             <ReplayIcon />
//           </IconButton>
//         </Grid>
//       </React.Fragment>
//     );
//   }

//   renderUploadedState() {
//     const { classes, theme } = this.props;

//     return (
//       <React.Fragment>
//         <CardActionArea onClick={this.imageResetHandler}>
//           <img
//             width="100%"
//             className={classes.media}
//             src={this.state.selectedFile}
//           />
//         </CardActionArea>
//       </React.Fragment>
//     );
//   }

//   imageResetHandler = event => {
//     console.log("Click!");
//     this.setState({
//       mainState: "initial",
//       selectedFile: null,
//       imageUploaded: 0
//     });
//   };

//   render() {
//     const { classes, theme } = this.props;

//     return (
//       <React.Fragment>
//         <div className={classes.root}>
//           <Card className={this.props.cardName}>
//             {(this.state.mainState == "initial" && this.renderInitialState()) ||
//               (this.state.mainState == "search" && this.renderSearchState()) ||
//               (this.state.mainState == "gallery" &&
//                 this.renderGalleryState()) ||
//               (this.state.mainState == "uploaded" &&
//                 this.renderUploadedState())}
//           </Card>
//         </div>
//       </React.Fragment>
//     );
//   }
// }

// interface State {
//   mainState: string
//   imageUploaded: number
//   selectedFile: (string | ArrayBuffer | null)[] | undefined
// }

const ImageCard = () => {
  //const [state, setState] = React.useState<State>({ mainState: 'initial', imageUploaded: 0, selectedFile: undefined })

  const classes = useStyles()

  //   handleUploadClick = event => {
  //     console.log();
  //     var file = event.target.files[0];
  //     const reader = new FileReader();
  //     var url = reader.readAsDataURL(file);

  //     reader.onloadend = function(e) {
  //       setState({
  //           ...state,
  //         selectedFile: [reader.result]
  //       });
  //     }.bind(this);
  //     console.log(url); // Would see a path?

  //     setState({
  //       mainState: "uploaded",
  //       selectedFile: event.target.files[0],
  //       imageUploaded: 1
  //     });
  //   };

  //   handleSearchClick = event => {
  //     setState({
  //         ...state,
  //       mainState: "search"
  //     });
  //   };

  //   handleGalleryClick = event => {
  //     setState({
  //         ...state,
  //       mainState: "gallery"
  //     });
  //   };

  return (
    <Grid container justify="center" alignItems="center">
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        onChange={() => {
          'handleUploadClick'
        }}
      />
      <label htmlFor="contained-button-file">
        <Fab component="span" className={classes.button}>
          <AddPhotoAlternateIcon />
        </Fab>
      </label>
      <Fab
        className={classes.button}
        onClick={() => {
          'handleSearchClick'
        }}>
        <SearchIcon />
      </Fab>
    </Grid>
  )
}

export default ImageCard
