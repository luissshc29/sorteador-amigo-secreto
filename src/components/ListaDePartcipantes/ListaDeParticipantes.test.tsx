import { render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import ListaParticipantes from "./index"
import {useListaParticipantes} from "state/hooks/useListaParticipantes"

jest.mock('state/hooks/useListaParticipantes', () => {
    return {
        useListaParticipantes: jest.fn() 
    }
})

describe('Uma lista vazia', () => {

    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue([])
    })

    test ('Não existem participantes cadastrados', () => {

        render(
            <RecoilRoot>
                <ListaParticipantes/>
            </RecoilRoot>
        )
    
        const itens = screen.queryAllByRole('listItem')
    
        expect(itens).toHaveLength(0)
    
    })

})

describe('Uma lista preenchida', () => {

    const participantes = ['Luis', 'Ana']

    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue(participantes)
    })

    test ('Não existem participantes cadastrados', () => {

        render(
            <RecoilRoot>
                <ListaParticipantes/>
            </RecoilRoot>
        )
    
        const itens = screen.queryAllByRole('listItem')
    
        expect(itens).toHaveLength(participantes.length)
    
    })

})