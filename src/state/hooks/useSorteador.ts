import { useListaParticipantes } from "./useListaParticipantes"
import { resultadoDoAmigoSecreto } from "state/atom"
import { useSetRecoilState } from 'recoil'
import { realizarSorteio } from "state/helpers/realizarSorteio"

export function useSorteador () {

    const participantes = useListaParticipantes()

    const setResultado = useSetRecoilState(resultadoDoAmigoSecreto)

    return () => {

        const resultado = realizarSorteio(participantes)

        setResultado(resultado)

    }

}