import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3333"
});

export async function getSalas(){
    const res = await api.get("/salas");
    return res;
}

export async function getSala(id: number){
    const res = await api.get("/sala/"+id);
    return res;
}

type data = {
    participanteId: number;
}
export async function putSala(id: number, data: data ){
    const res = await api.put("/sala/"+id, data)
    return res;
}