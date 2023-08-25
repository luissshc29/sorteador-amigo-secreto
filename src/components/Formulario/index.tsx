import { useRef, useState } from "react"
import useAdicionarPartcipante from "state/hooks/useAdicionarPartcipante"
import useMensagemDeErro from "state/hooks/useMensagemDeErro"
import styles from './Formulario.module.scss'
import { BsFillPersonPlusFill } from 'react-icons/bs'
import classNames from "classnames"
import { useModoPagina } from "state/hooks/useModoPagina"

const Formulario = () => {

    const [nome, setNome] = useState('')

    const inputRef = useRef<HTMLInputElement>(null)

    const adicionarNaLista = useAdicionarPartcipante()

    const mensagemErro = useMensagemDeErro()
    
    const modoPagina = useModoPagina()

    const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

        
        adicionarNaLista(nome)
        setNome('')
        inputRef.current?.focus()
    }

    return (
        <>
            <h1 className={styles.titulo}>Vamos começar!</h1>
            <form 
                onSubmit={(e) => 
                    adicionarParticipante(e)
                } 
                className={classNames({
                    [styles.formulario]: true,
                    [styles.formulario__escuro]: modoPagina === 'escuro'
                })}
            >
                <BsFillPersonPlusFill className={styles.formulario__icone}/>
                <input 
                    ref={inputRef} 
                    onChange={evento => setNome(evento.target.value)} 
                    value={nome} 
                    type='text' 
                    placeholder="Insira os nomes dos participantes"
                    className={styles.formulario__input}
                />
                <button 
                    type="submit" 
                    disabled={!nome}
                    className={styles.formulario__botao}
                >
                    Adicionar
                </button>
            </form>
            {mensagemErro && <p role="alert" className={styles.mensagem__erro}>{mensagemErro}</p>}
        </>
    )

}

export default Formulario
