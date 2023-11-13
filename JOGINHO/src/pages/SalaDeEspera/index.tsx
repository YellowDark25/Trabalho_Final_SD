import { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { salas } from "../../constants/salas";
import { getSala, putSala } from "../../services/api";

type sala = {
  nome: string;
  capacidade: number;
  participantes: participante[];
  equipeId: number;
  _count: {participantes: number}
};

export type participante = {
  nome: string,
  vida: number,
  vidaMaxiam: number
}

export function SalaDeEspera() {
  const [pronto, setPronto] = useState(false);
  const [data, setData] = useState<sala | null>(null);
  const id = useParams();
  const Salas = salas;
  async function GetSala() {
    await getSala(Number(id?.id)).then((response) => {
      setData(response.data);
    });
  }
  const handlePlayerReady = (id: number, participanteId: number) => {
    const data = {participanteId: participanteId}
    const novaListaSalas = Salas.salas.map((sala) => {
    
      if (sala.id === id) {
        if (pronto === false) {
          if (sala.jogadores < sala.maxJogadores) {
            setPronto(true);
            putSala(id, data)
            return { ...sala, jogadores: sala.jogadores + 1 };
          }
        } else {
          setPronto(false);
          return { ...sala, jogadores: sala.jogadores - 1 };
        }
      }
      return sala;
    });
    console.log(novaListaSalas);
  };
  useEffect(() => {
    GetSala();
  }, []);
  console.log(data);
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <h1>Sala de Espera: {data?.nome}</h1>
        <h2>capacidade: {data?.capacidade}</h2>
        <h3>vagas disponiveis: {data?.capacidade === undefined ? "carregando..." : data?.capacidade - data?._count.participantes}</h3>
        {data?.equipeId !== null ? <h4>Equipe: {data?.equipeId}</h4> : "Sem Equipe Registrada"}
        <p>{data?.participantes === null ? "Sem participantes" : "partcipantes: "+data?.participantes.map((e) => e.nome)}</p>
        <Button
          variant={"contained"}
          onClick={() => {
            handlePlayerReady(Number(id.id), 3);
          }}
          color={pronto === false ? "error" : "success"}
        >
          {pronto === false ? "Não estou pronto" : "Estou pronto"}
        </Button>
      </Box>
    </>
  );
}
