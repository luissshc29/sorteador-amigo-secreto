import { modoPaginaState } from "state/atom"
import { useSetRecoilState } from 'recoil'

export function useAlteraModo () {

    const setModoPagina = useSetRecoilState(modoPaginaState)

    return ((modo: string) => {

        return setModoPagina(modo)

    })
 
}