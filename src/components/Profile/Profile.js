import { Avatar, Box, Button, IconButton, Input, Typography } from "@mui/material";
import { React, Component } from "react";
import NavBar from "../NavBar/NavBar";

import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../connections/firebase";

//ICONS MUI
/* import SendIcon from '@mui/icons-material/Send'; */
import { PhotoCamera, SearchRounded, Send } from "@mui/icons-material";

//CSS
import './style/style.css'

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

        }
    }

    //BACKGROUND IMAGE

    handleGetImageBg(e) {

        const file = e.target.files[0]
        this.setState({
            backgroundImageFile: file
        })
    }

    async handleSendImageBg(file) {

        const user = getAuth()
        const imageName = user.currentUser.uid

        const storage = getStorage()
        const imageRef = ref(storage, 'backgroundImages/' + `${imageName}Bg`)
        await uploadBytes(imageRef, file).then((res) => {
            return res
        })


        await getDownloadURL(imageRef).then((res) => {
            const imageUrl = res

            const usersRef = doc(db, 'users', imageName)
            updateDoc(usersRef, { backgroundImage: `${imageUrl}` }) //vai subir a url no doc do usuario

            window.location.reload(true)
        })
    }


    //PROFILE IMAGE

    handleGetImageProfile(e) {

        const file = e.target.files[0]

        this.setState({
            profileImageFile: file
        })


    }

    async handleSendImageProfile(file) {
        const user = getAuth()
        const imageName = user.currentUser.uid

        const storage = getStorage()
        const imageRef = ref(storage, 'profileImages/' + `${imageName}Profile`)
        await uploadBytes(imageRef, file).then((res) => {
            return res
        })

        await getDownloadURL(imageRef).then((res) => {
            const imageUrl = res
            const usersRef = doc(db, 'users', imageName)
            updateDoc(usersRef, { profileImage: `${imageUrl}` })
        })


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
                <Box>
                    <NavBar />
                    <Box minHeight={300} mt={8} sx={{
                        backgroundImage:
                            `url(${this.state.backgroundImage})`,
                        backgroundSize: '1500px 500px'
                    }} >
                        <Box sx={{ justifyContent: 'space-around', display: 'flex' }}>
                            <label htmlFor="inputImageProfile">
                                <Input onChange={(e) => this.handleGetImageProfile(e)} sx={{ display: 'none' }} accept="image/*"
                                    id="inputImageProfile" type="file"
                                />
                                <IconButton color="primary" aria-label="upload picture" component="span" sx={{ width: 150, height: 150, marginTop: 10 }}>
                                    <Avatar sx={{ width: 150, height: 150, }} className={'imgProfile'} src={`${this.state.profileImage}`} />
                                    <PhotoCamera sx={{ width: 60, height: 60, color: '#000' }} className={'searchIcon'} />
                                </IconButton>
                                <Button sx={{ display: `${this.state.profileImageFile === '' ? 'none' : 'inline-flex'}` }} onClick={(e) => this.handleSendImageProfile(this.state.profileImageFile)}>Enviar</Button>
                            </label>
                        </Box>
                        <Box>
                            <Typography>User Name</Typography>
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
                        <Button variant='contained' sx={{ display: `${this.state.backgroundImageFile === '' ? 'none' : 'inline-flex'}` }}
                            onClick={(e) => this.handleSendImageBg(this.state.backgroundImageFile)} endIcon={<Send />}>
                            Send
                        </Button>
                    </Box>
                </Box>
            </>
        )
    }
}
export default Profile