import { Avatar, Box, Button, Container, Divider, Grid, IconButton, Input, List, ListItem, Typography } from "@mui/material";
import { React, Component } from "react";
import NavBar from "../NavBar/NavBar";

import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../connections/firebase";

//ICONS MUI
/* import SendIcon from '@mui/icons-material/Send'; */
import { AccessTime, Delete, HistorySharp, PhotoCamera, Send, Star, Visibility } from "@mui/icons-material";

//CSS
import './style/style.css'
import Footer from "../Footer/Footer";

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            backgroundImageFile: '',
            profileImageFile: '',
            backgroundImage: '',
            profileImage: '',
            email: '',
            firstName: '',
            lastName: '',
            txtValue: '',
            animesIformation: {
                later: '',
                Watching: '',
                Favorites: '',
                Watched: '',
                Dropped: '',
            },


        }
    }

    //BACKGROUND IMAGE

    handleGetImageBg(e) {

        const file = e.target.files[0]

        this.setState({
            backgroundImageFile: file,
        })
    }

    //PROFILE IMAGE

    handleGetImageProfile(e) {

        const file = e.target.files[0]

        this.setState({
            profileImageFile: file
        })
    }

    //SEND IMAGES BACKGROUND AND PROFILE
    async handleSendImage(file, fileName) {
        const user = getAuth()
        const imageName = user.currentUser.uid

        const storage = getStorage()
        const imageRef = ref(storage, `${fileName}Images/` + `${imageName}${fileName}`)
        await uploadBytes(imageRef, file).then((res) => {
            return res
        })

        //GET URL OF IMAGE
        await getDownloadURL(imageRef).then((res) => {
            const imageUrl = res
            const path = `${fileName}Image`
            const usersRef = doc(db, 'users', imageName)
            //SEND URL TO USER DOC
            updateDoc(usersRef, { [path]: `${imageUrl}` })
        })
        window.location.reload()
    }

    //GET USER DATA

    getUserData() {

        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user)
                const uid = user.uid
                const docRef = doc(db, 'users/', uid)

                const docSnap = getDoc(docRef).then((res) => {
                    const data = res._document.data.value.mapValue.fields
                    this.setState({
                        backgroundImage: data.backgroundImage.stringValue,
                        profileImage: data.profileImage.stringValue,
                        email: data.email.stringValue,
                        firstName: data.firstName.stringValue,
                        lastName: data.lastName.stringValue,
                    })
                    console.log('profile', this.state.profileImage)
                })
            }
            else {
                console.log('deslogado')
            }
        })
    }
    componentDidMount() {
        this.getUserData()
    }

    render() {

        return (
            <>
                <NavBar />
                <Box className="profileBody" sx={{ maxHeight: '85vh' }}>
                    <Box minHeight={300} sx={{
                        backgroundImage:
                            `url(${this.state.backgroundImage})`,
                        backgroundSize: '1500px 500px',
                    }} >
                        <Box sx={{ justifyContent: 'left', display: 'flex', ml: 1 }}>

                            <label htmlFor="inputImageProfile">
                                <Input onChange={(e) => this.handleGetImageProfile(e)} sx={{ display: 'none' }} accept="image/*"
                                    id="inputImageProfile" type="file"
                                />
                                <IconButton color="primary" aria-label="upload picture" component="span"
                                    sx={{ width: 150, height: 150, marginTop: 10 }}>
                                    <Avatar sx={{ width: 150, height: 150, }} className={'imgProfile'}
                                        src={`${this.state.profileImage}`} />
                                    <PhotoCamera sx={{ width: 60, height: 60, color: '#primary' }} className={'searchIcon'} />
                                </IconButton>
                                <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 1 }}>
                                    <Button sx={{ display: `${this.state.profileImageFile === '' ? 'none' : 'inline-flex'}` }}
                                        onClick={(e) => this.handleSendImage(this.state.profileImageFile, 'profile')} variant={'outlined'}
                                        endIcon={<Send />} color={'yellow'} size={'small'}>
                                        send
                                    </Button>
                                </Box>
                            </label>

                            <Typography sx={{ fontSize: { xs: 30, sm: 30, md: 50, lg: 50 }, mt: 20, fontFamily: 'Gotham Thin', color: "white" }}
                            >Ana Guimarães</Typography>
                        </Box>

                        <Box>
                            <label htmlFor="inputImageBg">
                                <Input sx={{ display: 'none' }} accept="image/*" id="inputImageBg" type="file"
                                    onChange={(e) => this.handleGetImageBg(e)} />
                                <IconButton color="primary" aria-label="upload picture" component="span">
                                    <PhotoCamera />
                                </IconButton>
                            </label>
                        </Box>
                        <Box>
                            <Button variant='outlined' sx={{ display: `${this.state.backgroundImageFile === '' ? 'none' : 'inline-flex'}` }}
                                onClick={(e) => this.handleSendImage(this.state.backgroundImageFile, 'background')} endIcon={<Send />} color={'yellow'} size={'small'}>
                                Send
                            </Button>
                        </Box>

                    </Box>
                    {/* INFORMATIONS */}
                    <Container maxWidth={'xl'}>
                        <Box sx={{ backgroundColor: '#383838', color: 'white' }} >
                            <Grid container sx={{ justifyContent: 'space-around' }}>

                                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                                    <Box>
                                        <Typography color={'primary'} variant="h6">PERSONAL INFORMATION</Typography>

                                        <List>
                                            <ListItem><Typography color='teal'>First Name : {this.state.firstName}</Typography></ListItem>
                                            <ListItem><Typography color='teal'>Last Name : {this.state.lastName}</Typography></ListItem>
                                            <ListItem><Typography color='teal'>Email Address : {this.state.email}</Typography></ListItem>
                                            <ListItem><Typography color='teal'>Nickname : {this.state.firstName}</Typography></ListItem>
                                        </List>

                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>

                                    <Box>
                                        <Typography color={'primary'} variant="h6">ANIME INFORMATION</Typography>

                                        <List>
                                            <ListItem><AccessTime color="error" /> <Typography ml={1}>Later : {'30'}</Typography></ListItem>
                                            <ListItem><Visibility /><Typography ml={1}>Watching  : {'30'}</Typography></ListItem>
                                            <ListItem><Star color='yellow' /> <Typography ml={1}>Favorites : {'30'}</Typography></ListItem>
                                            <ListItem><HistorySharp color='teal' />  <Typography ml={1}>Watched : {'30'}</Typography></ListItem>
                                            <ListItem><Delete color='secondary' /> <Typography ml={1}>Dropped : {'30'} </Typography></ListItem>
                                        </List>

                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>

                    </Container>
                    <Box sx={{ justifyContent: 'space-around', display: 'flex' }}>
                        <Footer bgColor={"#383838"} color={"#F7F5F2"} colorDivider={"#0a66c2"} />
                    </Box>
                </Box>


            </>
        )
    }
}
export default Profile