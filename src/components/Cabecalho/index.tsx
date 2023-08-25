import styles from './Cabecalho.module.scss'
import logoDesktop from 'assets/logo-branco-horizontal.png'
import logoMobile from 'assets/logo-pequeno.png'
import mulherBanner from 'assets/mulher-banner.png'
import classNames from 'classnames'
import SwitchModo from 'components/SwitchModo'
import { useState } from 'react'
import { useModoPagina } from 'state/hooks/useModoPagina'

const Cabecalho = () => {

    const [largura, setLargura] = useState(0)

    window.addEventListener('resize', () => setLargura(window.innerWidth))

    const modoPagina = useModoPagina()
    
    return (
        <>
            <SwitchModo/>
            <header className={classNames({
                [styles.cabecalho]: true,
                [styles.cabecalho__escuro]: modoPagina === 'escuro'
                })}
            >
                <div>
                    <img src={largura > 720 ? logoDesktop : logoMobile} alt="Logo" className={styles.logo}/>
                    <img src={mulherBanner} alt="Mulher" className={styles.imagem}/>
                </div>
            </header>
        </>
    )
}

export default Cabecalho