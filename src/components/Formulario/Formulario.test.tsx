import { fireEvent, render, screen } from "@testing-library/react";
import Formulario from "./index";
import { RecoilRoot } from "recoil";
import { act } from "react-dom/test-utils";

describe('Comportamento do Formulario', () => {

    test('Verificando se o input está vazio', () => {

        render (
            <RecoilRoot>
                <Formulario/>
            </RecoilRoot>        
        )
    
        // Encontrar o input no DOM
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
    
        // Encontrar o botao no DOM
        const botao = screen.getByRole('button')  
    
        // Garantir que o input esteja no documento
        expect(input).toBeInTheDocument()
    
        // Garantir que o botao esteja desabilitado
        expect(botao).toBeDisabled()
    
    })
    
    test('Adicionar um participante', () => {
    
        render (
            <RecoilRoot>
                <Formulario/>
            </RecoilRoot>        
        )
    
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
    
        const botao = screen.getByRole('button')  
    
        //Inserir um valor no input
        fireEvent.change(input, {
            target: {
                value: 'Luis Henrique'
            }
        })
    
        //Clicar no botão de submeter
        fireEvent.click(botao)
    
        //Garantir que o inputesteja com o foco ativo
        expect(input).toHaveFocus()
    
        //Grantir que o input não tenha valor
        expect(input).toHaveValue('')
    
    })
    
    test('Nomes duplicados não podem ser adicionados', () => { 
    
        render (
            <RecoilRoot>
                <Formulario/>
            </RecoilRoot>        
        )
    
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
    
        const botao = screen.getByRole('button')  
    
        fireEvent.change(input, {
            target: {
                value: 'Luis Henrique'
            }
        })
    
        fireEvent.click(botao)
    
        fireEvent.change(input, {
            target: {
                value: 'Luis Henrique'
            }
        })
    
        fireEvent.click(botao)
    
        const mensagemDeErro = screen.getByRole("alert")
    
        expect(mensagemDeErro.textContent).toBe('Nomes duplicados não podem são permitidos!')
    
    })
    
    test('A mensagen de erro some em algum tempo', () => { 
    
        jest.useFakeTimers()
    
        render (
            <RecoilRoot>
                <Formulario/>
            </RecoilRoot>        
        )
    
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
    
        const botao = screen.getByRole('button')  
    
        fireEvent.change(input, {
            target: {
                value: 'Luis Henrique'
            }
        })
        
        fireEvent.click(botao)
    
        fireEvent.change(input, {
            target: {
                value: 'Luis Henrique'
            }
        })
    
        fireEvent.click(botao)
    
        let mensagemDeErro = screen.queryByRole("alert")
        expect(mensagemDeErro).toBeInTheDocument()
    
        act(() => {
            jest.runAllTimers()
          })
    
        mensagemDeErro = screen.queryByRole("alert")
        expect(mensagemDeErro).toBeNull()
    
    })
})
