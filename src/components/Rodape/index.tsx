import { useNavigate } from "react-router-dom"
import { useListaParticipantes } from "state/hooks/useListaParticipantes"
import sacolas from 'assets/sacolas.png'
import styles from './Rodape.module.scss'
import { AiOutlinePlayCircle } from 'react-icons/ai'
import {useSorteador} from "state/hooks/useSorteador"
import Botao from "components/Botao"

const Rodape = () => {

    const participantes = useListaParticipantes()

    const navegar = useNavigate()

    const sortear = useSorteador()

    const iniciar = () => {
        sortear()
        navegar('/sorteio')
    }

    return (
        <footer className={styles.rodape}>
            <Botao 
                disabled={participantes.length < 3} 
                onClick={iniciar}
            >   
                <AiOutlinePlayCircle className={styles.rodape__botao__icone}/>
                Iniciar brincadeira
            </Botao>
            <img src={sacolas} alt="sacolas" className={styles.rodape__imagem}/>
        </footer>
    )

}

export default Rodape