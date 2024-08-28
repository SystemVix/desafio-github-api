import axios from "axios";
import { BASE_URL } from "../utils/system";

export function procurar(usuario: string)
{
   return axios.get(`${BASE_URL}${usuario}`);
}