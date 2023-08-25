import { modoPaginaState } from "state/atom"
import { useRecoilValue } from 'recoil'

export function useModoPagina () {

    const modoPagina = useRecoilValue(modoPaginaState)

    return modoPagina
}