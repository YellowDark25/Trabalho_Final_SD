import React, { useState } from 'react';
import { Typography, Button, Box } from '@mui/material';

interface Room {
    id: number;
    name: string;
}

const Home: React.FC = () => {
    const [rooms, setRooms] = useState<Room[]>([
        { id: 1, name: 'Sala 1' },
        { id: 2, name: 'Sala 2' },
        { id: 3, name: 'Sala 3' },
    ]);

    return (

        <Box
            height={"100vh"}
            width={"100vw"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            bgcolor={"gray"}
        >

            <Typography variant="h3" component="h1">Escolha uma sala</Typography>
            <Box
                display={"flex"} flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                width={"100%"}

            >
                {rooms.map((room) => (
                    <Box
                        display={"flex"} justifyContent={"center"} alignItems={"center"}
                        textAlign={"center"}
                        margin={"10px"}
                    >
                        <Button key={room.id} variant="contained">
                            {room.name}
                        </Button>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default Home;
