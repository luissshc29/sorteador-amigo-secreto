import { resultadoDoAmigoSecreto } from "state/atom";
import { useRecoilValue } from 'recoil'

export function useResultadoDoSorteio() {

    return useRecoilValue(resultadoDoAmigoSecreto)

}