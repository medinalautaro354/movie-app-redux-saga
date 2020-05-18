import {makeStyles} from '@material-ui/styles';

const centerStlyeObject = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}
export default makeStyles({
container:{
    height: '100vh',
    flexDirection: 'column',
    ...centerStlyeObject
},
cardContainer:{
    flexDirection: 'column',
    width: 400,
    height: 200,
    padding:'2rem',
    ...centerStlyeObject
},
title:{
    fontSize:'4rem'
},
titleGridContainer:{
    ...centerStlyeObject
},
textFieldSearch:{
    widht: '90%'
},
searchButton:{
    marginTop: '.5rem'
},
movieIcon:{
    fontSize: '4rem'
}
});