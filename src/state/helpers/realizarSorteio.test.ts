import { realizarSorteio } from "./realizarSorteio"

describe ('Em um sorteio', () => {

    test('nenhum participante soretia o próprio nome', () => {

        const participantes = ['Luis', 'Lia', 'Ana', 'Isaac', 'Dedé', 'Elineide']

        const sorteio = realizarSorteio(participantes)

        participantes.forEach(participante => {

            const amigoSecreto = sorteio.get(participante)
            expect(amigoSecreto).not.toEqual(participante)

        })

    })

})