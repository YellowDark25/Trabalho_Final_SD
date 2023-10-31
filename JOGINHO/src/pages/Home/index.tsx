import React, { useState } from 'react';
import { Typography, Button, Box } from '@mui/material';
import BackgroundVideo from '../../components/video';


interface Room {
    id: number;
    name: string;
}

interface RoomOccupancy {
    [key: number]: number;
}

const Home: React.FC = () => {

    const [rooms, setRooms] = useState<Room[]>([
        { id: 1, name: 'Sala 1: Player vs Boot' },
        { id: 2, name: 'Sala 2: Player vs Player' },
        { id: 3, name: 'Sala 3: Experimental' },
    ]);

    const [roomOccupancy, setRoomOccupancy] = useState<RoomOccupancy>({
        1: 0,
        2: 0,
        3: 0,
    });

    const handleJoinRoom = (roomId: number) => {
        setRoomOccupancy(prevState => ({
            ...prevState,
            [roomId]: prevState[roomId] + 1,
        }));
    };

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
                                
                                key={room.id}
                                variant="contained"
                                onClick={() => handleJoinRoom(room.id)}
                            >
                                {room.name}
                            </Button>
                            <Typography variant="h6" component="h2"
                            paddingRight={"60px"}>
                                {roomOccupancy[room.id]} pessoas na sala
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default Home;
