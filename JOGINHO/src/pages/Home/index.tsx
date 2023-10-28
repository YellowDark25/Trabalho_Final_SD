import React, { useState } from 'react';

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
    const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

    const handleRoomSelect = (room: Room) => {
        setSelectedRoom(room);
    };

    const handleRoomLeave = () => {
        setSelectedRoom(null);
    };

    if (selectedRoom) {
        window.location.href = `/sala-de-espera/${selectedRoom.id}`;
    }

    return (
        <div>
            <h1>Escolha uma sala</h1>
            <ul>
                {rooms.map((room) => (
                    <li key={room.id}>
                        <button onClick={() => handleRoomSelect(room)}>{room.name}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;