import { erroState } from "state/atom"
import { useRecoilValue } from 'recoil'

export default function useMensagemDeErro () {

    const mensagemErro = useRecoilValue(erroState)

    return mensagemErro

}