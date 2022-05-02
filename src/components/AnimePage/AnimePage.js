import { Component, react } from 'react';

import { useParams } from 'react-router';

//NAVBAR
import NavBar from '../NavBar/NavBar';

//MUI
import {
    Box,
    Button,
    Container,
    Divider,
    Grid,
    List,
    ListItem,
    Typography,
} from '@mui/material';
import {
    AccessTime,
    Delete,
    HistorySharp,
    Star,
    Visibility,
} from '@mui/icons-material';
import Footer from '../Footer/Footer';
import { ref } from 'firebase/storage';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../connections/firebase';
import { getAuth } from 'firebase/auth';
import { render } from '@testing-library/react';

class AnimePageComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userUid: "g0dNiiSCrRf0xbPbxE9Klbcuq2i2",
            season: '',
            studio: '',
            episodes: '',
            statusAnime: '',
            type: '',
            year: '',
            synopsis: '',
            imgAnime: '',
            title: '',
            seeLater: false,
            watching: false,
            favorit: false,
            watched: false,
            dropped: false,
            global: {}
        };
    }

    async getAnimeInfo() {
        await fetch(`https://kitsu.io/api/edge/anime/${this.props.idUrl}`, {
            method: 'get',
        })
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                const titles = res.data.attributes.titles
                const data = {
                    season: res.data.attributes.startDate,
                    episodes: res.data.attributes.episodeCount,
                    statusAnime: res.data.attributes.status,
                    type: res.data.type,
                    year: res.data.attributes.startDate,
                    synopsis:
                        res.data.attributes.synopsis === ''
                            ? "Sorry, We don't have a synopsis for this anime"
                            : res.data.attributes.synopsis,
                    imgAnime: res.data.attributes.posterImage.small,

                    title: titles.en === undefined ?
                        titles.en_jp === undefined ? titles.ja_jp : titles.en_jp :
                        titles.en
                };

                this.setState({
                    season: data.season,
                    studio: data.studio,
                    episodes: data.episodes,
                    statusAnime: data.statusAnime,
                    type: data.type,
                    year: data.year,
                    synopsis: data.synopsis,
                    imgAnime: data.imgAnime,
                    title: data.title
                });
            });
    }

    async getElementStatus() {

        const docRef = doc(db, 'users', this.state.userUid);

        await getDoc(docRef).then((res) => {
            const animeId = this.props.idUrl;

            const dataExists =
                res._document.data.value.mapValue.fields.animeList.mapValue.fields[
                    animeId
                ] === undefined
                    ? false
                    : true;

            if (dataExists == true) {
                const data =
                    res._document.data.value.mapValue.fields.animeList.mapValue.fields[
                        animeId
                    ].mapValue.fields;

                this.setState({
                    seeLater: data.seeLater.booleanValue,
                    watching: data.watching.booleanValue,
                    favorit: data.favorit.booleanValue,
                    watched: data.watched.booleanValue,
                    dropped: data.dropped.booleanValue,
                });
            } else {
                const animeListItem = 'animeList.' + [animeId];
                const docRef = doc(db, 'users', this.state.userUid);

                updateDoc(docRef, {
                    [animeListItem]: {
                        dropped: false,
                        favorit: false,
                        seeLater: false,
                        watched: false,
                        watching: false,
                    },
                });
            }
        });
    }

    async getElementGlobalStatus(value) {
        const globalRef = doc(db, 'users', 'global')

        await getDoc(globalRef).then((res) => {
            const animeId = this.props.idUrl

            const dataExists = res._document.data.value.mapValue.fields.animeList.mapValue.fields[animeId] === undefined ? false : true

            if (dataExists == true) {
                getDoc(globalRef).then((res) => {
                    const data = res._document.data.value.mapValue.fields.animeList.mapValue.fields[animeId].mapValue.fields
                    this.setState({
                        global: {
                            dropped: data.dropped.integerValue,
                            favorit: data.dropped.integerValue,
                            seeLater: data.dropped.integerValue,
                            watched: data.dropped.integerValue,
                            watching: data.dropped.integerValue,
                        }
                    })
                })
            } else {
                updateDoc(globalRef, {
                    [`animeList.${animeId}`]: {
                        dropped: 0,
                        favorit: 0,
                        seeLater: 0,
                        watched: 0,
                        watching: 0,
                    }
                })
                this.getElementGlobalStatus()
            }


        })
    }

    async handleStatusElement(value, element) {
        const docRef = doc(db, 'users', this.state.userUid);
        const idUrl = this.props.idUrl.toLocaleString();

        const animeList = 'animeList.' + idUrl + '.' + element;

        await updateDoc(docRef, {
            [animeList]: value,
        });

        //numero de favoritos que aquele anime recebeu
        const globalDocRef = doc(db, 'users', 'global')
        var newGlobalValue = 0

        if (value === true) {
            newGlobalValue = (parseInt(this.state.global[element])) + 1

            this.getElementGlobalStatus()
        } else {
            newGlobalValue = (parseInt(this.state.global[element])) - 1

        }


        await updateDoc(globalDocRef, {
            [`animeList.${idUrl}.${element}`]: newGlobalValue
        })

        this.setState({
            [element]: value,
        });
    }

    sendStatusAnimeListUser(value, element) {
        if (value === true) {
            this.handleStatusElement(false, element);
        } else {
            this.handleStatusElement(true, element);
        }
    }

    componentDidMount() {
        this.getElementStatus();
        this.getAnimeInfo();
        this.getElementGlobalStatus()
    }
    render() {
        console.log(this.props.match)

        return (
            <>
                <NavBar />
                <Container maxWidth='lg'>
                    <Box
                        sx={{
                            mt: 2,
                            maxWidth: 1000,
                            bgcolor: '#fff',
                            p: 2,
                            borderRadius: '4px 4px',
                        }}
                    >
                        <Grid container>
                            <Grid item lg={4}>
                                <img src={this.state.imgAnime} width={300} height={400}></img>
                            </Grid>
                            <Grid item lg={8}>
                                <Grid container sx={{ ml: 1 }}>
                                    <Grid item lg={6}>
                                        <Box>
                                            <Typography variant='h1' fontSize={25}>
                                                {this.state.title}
                                            </Typography>

                                        </Box>
                                    </Grid>
                                    <Grid item lg={6}>
                                        <Box sx={{ float: 'right' }}>
                                            <Typography
                                                variant='h1'
                                                sx={{
                                                    bgcolor: '#606060',
                                                    borderRadius: '2px 2px',
                                                    textAlign: 'center',
                                                    fontSize: 20,
                                                }}
                                            >
                                                score
                                            </Typography>
                                            <Typography sx={{ textAlign: 'center', fontSize: 22 }}>
                                                8.5
                                            </Typography>
                                            <Box>
                                                <Star color='yellow' />
                                                <Star color='yellow' />
                                                <Star color='yellow' />
                                                <Star color='yellow' />
                                                <Star color='yellow' />
                                            </Box>
                                            <Typography variant='caption'>Ratings 100</Typography>
                                        </Box>
                                    </Grid>
                                </Grid>

                                <Box sx={{ ml: 1 }}>
                                    <List>
                                        <ListItem>Season :</ListItem>
                                        <Divider />
                                        <ListItem>
                                            Studio :<Typography>{this.state.studio}</Typography>
                                        </ListItem>
                                        <Divider />
                                        <ListItem>
                                            Episodes :<Typography>{this.state.episodes}</Typography>
                                        </ListItem>
                                        <Divider />
                                        <ListItem>
                                            Status :<Typography>{this.state.statusAnime}</Typography>
                                        </ListItem>
                                        <Divider />
                                        <ListItem>
                                            Type :<Typography>{this.state.type}</Typography>
                                        </ListItem>
                                        <Divider />
                                        <ListItem>
                                            Year :<Typography>{this.state.year}</Typography>
                                        </ListItem>
                                        <Divider />
                                    </List>
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-around',
                                        ml: 1,
                                    }}
                                >
                                    <Button
                                        endIcon={<AccessTime color='darkBlue' />}
                                        color={`${this.state.seeLater === true ? 'orange' : 'dark'}`}
                                        variant='contained'
                                        size='small'
                                        onClick={() =>
                                            this.sendStatusAnimeListUser(
                                                this.state.seeLater,
                                                'seeLater'
                                            )
                                        }
                                    >
                                        See later
                                    </Button>
                                    <Button
                                        endIcon={<Visibility color='white' />}
                                        color={`${this.state.watching === true ? 'orange' : 'dark'}`}
                                        variant='contained'
                                        size='small'
                                        onClick={() =>
                                            this.sendStatusAnimeListUser(
                                                this.state.watching,
                                                'watching'
                                            )
                                        }
                                    >
                                        Watching
                                    </Button>
                                    <Button
                                        endIcon={<Star color='yellow' />}
                                        color={`${this.state.favorit === true ? 'orange' : 'dark'}`}
                                        variant='contained'
                                        size='small'
                                        onClick={() =>
                                            this.sendStatusAnimeListUser(
                                                this.state.favorit,
                                                'favorit'
                                            )
                                        }
                                    >
                                        Favorit
                                    </Button>
                                    <Button
                                        endIcon={<HistorySharp color='teal' />}
                                        color={`${this.state.watched === true ? 'orange' : 'dark'}`}
                                        variant='contained'
                                        size='small'
                                        onClick={() =>
                                            this.sendStatusAnimeListUser(
                                                this.state.watched,
                                                'watched'
                                            )
                                        }
                                    >
                                        Watched
                                    </Button>
                                    <Button
                                        endIcon={<Delete color='secondary' />}
                                        color={`${this.state.dropped === true ? 'orange' : 'dark'}`}
                                        variant='contained'
                                        size='small'
                                        onClick={() =>
                                            this.sendStatusAnimeListUser(
                                                this.state.dropped,
                                                'dropped'
                                            )
                                        }
                                    >
                                        Dropped
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                        <Box>
                            <Typography sx={{ textAlign: 'justify' }}>
                                <b>Synopsis:</b>
                                {this.state.synopsis}
                            </Typography>
                        </Box>
                    </Box>
                </Container>
                <Footer bgColor={'white'} />
            </>
        );
    }
}

const AnimePage = (props) => {
    const { id } = useParams()
    return <>
        <AnimePageComponent idUrl={id} />
    </>

}

export default AnimePage;
