import { useState } from "react"
import { useListaParticipantes } from "state/hooks/useListaParticipantes"
import {useResultadoDoSorteio} from "state/hooks/useResultadoDoSorteio"
import styles from './Sorteio.module.scss'
import { GiDiceSixFacesFive } from 'react-icons/gi'
import aviao from 'assets/aviao.png'
import Botao from "components/Botao"
import classNames from "classnames"
import { useModoPagina } from "state/hooks/useModoPagina"

const Sorteio = () => {

    const participantes = useListaParticipantes()

    const [participanteDaVez, setParticipanteDaVez] = useState(participantes[0])
    const [amigoSecreto, setAmigoSecreto] = useState('')

    const resultado = useResultadoDoSorteio()

    const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

        if (resultado.has(participanteDaVez)) {
            setAmigoSecreto(resultado.get(participanteDaVez)!)
        }


    }
    
    const modoPagina = useModoPagina()

    return (
        <>
            <h2 className={styles.titulo}>Quem vai tirar o papelzinho?</h2>
            <form 
                className={classNames({
                    [styles.form]: true,
                    [styles.form__escuro]: modoPagina === 'escuro'
                })}
                onSubmit={evento => sortear(evento)}
            >
                <select 
                    className={styles.form__select}
                    required 
                    placeholder="Selecione o seu nome"
                    value={participanteDaVez}
                    onChange={evento => setParticipanteDaVez(evento.target.value)}
                >
                {participantes.map(participante => (
                    <option 
                        key={participante} 
                        className={styles.form__select__option}
                    >
                        {participante}
                    </option>
                ))}
                </select>
                <p className={styles.form__texto}>Clique em sortear para ver quem é seu amigo secreto!</p>
                <Botao 
                    type="submit" 
                >
                    <GiDiceSixFacesFive 
                        className={styles.form__botao__icone}
                    />
                    Sortear!
                </Botao>
                {amigoSecreto && 
                    <p 
                        role="alert" 
                        className={styles.form__amigoSecreto}
                    >
                        {amigoSecreto}
                    </p>
                }
            </form>
            <img src={aviao} className={styles.form__aviao}></img>
        </>
    )

}

export default Sorteio