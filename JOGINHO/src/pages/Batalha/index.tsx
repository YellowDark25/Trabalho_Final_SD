import { Avatar, Box, Button } from "@mui/material";
import { useState } from "react";

function Batalha() {
    const [currentHealth, setCurrentHealth] = useState(100);

    const playerHit = () => {
        if (currentHealth > 0) {
            setCurrentHealth((prevHealth: number) => prevHealth - 10); // Reduzindo a vida em 10 (valor de exemplo)
        }
    };
    const playerHit2 = () => {
        if (currentHealth > 0) {
            setCurrentHealth((prevHealth: number) => prevHealth - 50); // Reduzindo a vida em 10 (valor de exemplo)
        }
    };
    const playerHeal = () => {
        if (currentHealth < 100) {
            setCurrentHealth((prevHealth: number) => prevHealth + 30); // Reduzindo a vida em 10 (valor de exemplo)
        }
    };
    return (
        <Box>
            <Box>
                <Box>
                    <Avatar alt="Remy Sharp" src="/src/assets/background.png" sx={{ width: 200, height: 200 }} />
                </Box>
                <Box>
                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" sx={{ width: 200, height: 200 }} />
                </Box>
                <Box>
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" sx={{ width: 200, height: 200 }} />
                </Box>
            </Box>
            <Box>
                <Box>
                    <Box
                    width={"300px"}
                    height={"30px"}
                    sx={{backgroundColor: "#ccc"}}
                    margin={"20px"}
                    >
                        <Box sx={{ width: `${currentHealth}%` , backgroundColor: "#4CAF50", transition: "width 0.5s"}}
                        width={"100%"}
                        height={"100%"}
                        textAlign={"center"}
                        lineHeight={"30px"}
                        color={"white"}
                        
                        >
                            {currentHealth}%
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box
            display={"flex"}
            gap={2}>
                <Button onClick={playerHit}
                sx={{backgroundColor: "#4CAF50", border: "none", padding: "10px 20px", cursor: 'pointer', ":hover": "#45a049"}}>Ataque</Button>
                <Button onClick={playerHeal}
                sx={{backgroundColor: "#4CAF50", border: "none", padding: "10px 20px", cursor: 'pointer', ":hover": "#45a049"}}>Defesa</Button>
                <Button onClick={playerHit2}
                sx={{backgroundColor: "#4CAF50", border: "none", padding: "10px 20px", cursor: 'pointer', ":hover": "#45a049"}}>Ataque Especial</Button>
            </Box>
        </Box>
    );
}

export default Batalha;
