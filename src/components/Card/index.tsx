import classNames from 'classnames'
import styles from './Card.module.scss'
import { Outlet } from 'react-router-dom'
import { useModoPagina } from 'state/hooks/useModoPagina'

const Card = () => {
    
    const modoPagina = useModoPagina()

    return (
        <div className={classNames({
            [styles.card]: true,
            [styles.card__escuro]: modoPagina === 'escuro'
        })}>
            <Outlet/>
        </div>
    )

}

export default Card