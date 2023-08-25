import { listaDeParticipantesState } from "state/atom";
import { useRecoilValue } from 'recoil'

export function useListaParticipantes () {

    const ListaParticipantes = useRecoilValue(listaDeParticipantesState)

    return ListaParticipantes

}