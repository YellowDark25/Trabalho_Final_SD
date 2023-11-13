import React, { useEffect, useState } from 'react';
import { Typography, Button, Box } from '@mui/material';
import BackgroundVideo from '../../components/video';
import { getSalas } from '../../services/api';
import { participante } from '../SalaDeEspera';


interface Room {
    id: number;
    nome: string;
    capacidade: number;
    participantes: participante[];
    _count: {participantes: number}
}

const Home: React.FC = () => {
    
    const [rooms, setRooms] = useState<Room[]>([]);
    async function GetSalas(){
        await getSalas().then((response) => {
            setRooms(response.data)
        })
    }
    console.log(rooms.map((e) => (e)))

    const handleJoinRoom = async (roomId: number) => {
        // const data = {participanteId: participanteId}
        window.location.href = "/sala-de-espera/" + roomId
        // await putSala(roomId, data)
    };

    useEffect(() => {
        GetSalas()
    },[])

    return (
        <Box
            height={"100vh"}
            width={"100vw"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <BackgroundVideo/>
            <Box
                width={"480px"}
                sx={{background: "transparent", backdropFilter: "blur(10px)"}}
                border={"2px solid rgba(255,255,255,.2)"}
                color={"#fff"}
                borderRadius={"10px"}
                padding={"30px 40px"}
                textAlign={"center"}
            >
                <Typography variant="h3" component="h1" >Escolha uma sala</Typography>
                <Box
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignItems={"flex-start"}
                    width={"100%"}
                >
                    {rooms.map((room) => (
                        <Box
                            display={"flex"}
                            justifyContent={"space-between"}
                            alignItems={"center"}
                            textAlign={"center"}
                            margin={"10px"}
                            width={"100%"}
                        >
                            <Button
                                sx={{}}
                                key={room.id}
                                variant="contained"
                                onClick={() => handleJoinRoom(room.id)}
                            >
                                {room.nome}
                            </Button>
                            <Typography variant="h6" component="h2"
                            paddingRight={"60px"}>
                                {room._count.participantes} pessoas na sala
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default Home;
