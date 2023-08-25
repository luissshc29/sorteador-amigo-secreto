import { RecoilRoot } from "recoil"
import Sorteio from "."
import { fireEvent, render, screen } from "@testing-library/react"
import { useListaParticipantes } from "state/hooks/useListaParticipantes"
import {useResultadoDoSorteio} from "state/hooks/useResultadoDoSorteio"

jest.mock('state/hooks/useListaParticipantes', () => {
    return {
        useListaParticipantes: jest.fn() 
    }
})

jest.mock('state/hooks/useResultadoDoSorteio', () => {
    return {
        useResultadoDoSorteio: jest.fn() 
    }
})


describe('Na pagina de sorteio', () => {

    const participantes = ['Luis', 'Ana', 'Lia']
    
    const resultado = new Map([
        ['Luis', 'Ana'], 
        ['Ana', 'Lia'],
        ['Lia', 'Luis']
    ])

    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue(participantes)
    })

    beforeEach(() => {
        (useResultadoDoSorteio as jest.Mock).mockReturnValue(resultado)
    })

    test('Todos os participantes podem exibir o seu amigo secreto', () => {

        render (
            <RecoilRoot>
                <Sorteio/>
            </RecoilRoot>
        )

        const opcoes = screen.queryAllByRole('option')
        expect(opcoes).toHaveLength(participantes.length)
    }) 

    test ('O amigo secreto é exibido quando solicitado', () => {


        render (
            <RecoilRoot>
                <Sorteio/>
            </RecoilRoot>
        )

        const select = screen.getByPlaceholderText('Selecione o seu nome')

        fireEvent.change(select, {
            target: {
                value: participantes[0]
            }
        })

        const botao = screen.getByRole('button')

        fireEvent.click(botao)

        const amigoSecreto = screen.getByRole('alert')

        expect(amigoSecreto).toBeInTheDocument()

    })

})