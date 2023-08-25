import { render } from "@testing-library/react"
import Configuracao from "."
import { RecoilRoot } from "recoil"

const mockNavegacao = jest.fn()

jest.mock('react-router-dom', () => {

    return {
        useNavigate: () => mockNavegacao
    }
})

describe('Uma pagina de configuração', () => {

    test('Deve ser renderizada corretamente', () => {

        const { container } = render(
            <RecoilRoot>
                <Configuracao/>
            </RecoilRoot>
        )

        expect(container).toMatchSnapshot()

    })

})