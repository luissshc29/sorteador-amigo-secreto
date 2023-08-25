import { erroState, listaDeParticipantesState } from "state/atom";
import { useSetRecoilState, useRecoilValue } from 'recoil'

export default function useAdicionarPartcipante () {

    const setLista = useSetRecoilState(listaDeParticipantesState)

    const lista = useRecoilValue(listaDeParticipantesState)

    const setErro = useSetRecoilState(erroState)

    return (participante: string) => {

        if (lista.includes(participante)) {

            setErro('Nomes duplicados não podem são permitidos!')
            setTimeout(() => setErro(''), 5000)

            return
        }

        return setLista(listaAtual => [...listaAtual, participante])

    }

}