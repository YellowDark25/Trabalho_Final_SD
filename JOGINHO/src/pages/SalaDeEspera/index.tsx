import { useState } from "react";
import { Box, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { salas } from "../../constants/salas";

export function SalaDeEspera() {
  const [pronto, setPronto] = useState(false);
  const id = useParams();
  const Salas = salas;
  const handlePlayerReady = (id: number) => {
    const novaListaSalas = Salas.salas.map((sala) => {
      if (sala.id === id) {
        if(pronto === false){
            if (sala.jogadores < sala.maxJogadores) {
                setPronto(true);
                return { ...sala, jogadores: sala.jogadores + 1 };
              }
        }
        else{
            setPronto(false);
            return { ...sala, jogadores: sala.jogadores - 1 };
        }
      }
      return sala;
    });
    console.log(novaListaSalas);
  };
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <h1>Sala de Espera: {id.id}</h1>
        <Button
          variant={"contained"}
          onClick={() => {
            handlePlayerReady(2);
          }}
          color={pronto === false ? "warning" : "success"}
        >
          Iniciar Jogo
        </Button>
      </Box>
    </>
  );
}
