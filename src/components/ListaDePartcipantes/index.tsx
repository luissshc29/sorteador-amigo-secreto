import {useListaParticipantes} from "state/hooks/useListaParticipantes"
import styles from './ListaDeParticipantes.module.scss'
import classNames from "classnames"
import { useModoPagina } from "state/hooks/useModoPagina"

const ListaParticipantes = () => {

    const listaParticipantes = useListaParticipantes()
    
    const modoPagina = useModoPagina()

    return (
        <ul 
            className={classNames({
                [styles.lista]: true,
                [styles.lista__escuro]: modoPagina === 'escuro'
            })}
        >
            {listaParticipantes.map(participante => (
                <li role='listItem' key={participante} className={styles.lista__item}>{participante}</li>
            ))}
        </ul>
    )

}

export default ListaParticipantes