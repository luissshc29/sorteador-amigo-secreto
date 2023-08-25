import {BsSun, BsSunFill, BsMoon, BsMoonFill} from 'react-icons/bs'
import styles from './SwitchModo.module.scss'
import { useModoPagina } from 'state/hooks/useModoPagina'
import { useAlteraModo } from 'state/hooks/useAlteraModo'
import classNames from 'classnames'

export default function SwitchModo() {

    const modoPagina = useModoPagina()
    const setModoPagina = useAlteraModo()
  return (
    <div className={styles.container}>
          {modoPagina === 'claro' ?  
            <BsSunFill
                className={classNames({
                    [styles.sol]: true,
                    [styles.sol__ativo]: modoPagina === 'claro'
                })}
                onClick={() => setModoPagina('claro')}
            /> :
            <BsSun
                className={classNames({
                    [styles.sol]: true,
                    [styles.sol__ativo]: modoPagina === 'claro'
                })}
                onClick={() => setModoPagina('claro')}
            />
            }
        {modoPagina === 'escuro' ?
            <BsMoonFill 
                className={classNames({
                    [styles.lua]: true,
                    [styles.lua__ativo]: modoPagina === 'escuro'
                })} 
                onClick={() => setModoPagina('escuro')}
            /> : 
            <BsMoon 
                className={classNames({
                    [styles.lua]: true,
                    [styles.lua__ativo]: modoPagina === 'escuro'
                })} 
                onClick={() => setModoPagina('escuro')}
            />
        }
    </div>
  )
}
