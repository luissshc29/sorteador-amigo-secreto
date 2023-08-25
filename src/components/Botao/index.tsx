import React from 'react'
import styles from './Botao.module.scss'
import classNames from 'classnames'

export default function Botao({children, disabled = false, onClick, type='button'}: {children: any, disabled?: boolean, onClick?:() => void, type?: "button" | "submit" | "reset" | undefined}) {
  return (
    <button 
        className={classNames({
            [styles.botao__ativo]: !disabled,
            [styles.botao__inativo]: disabled
        })}
        onClick={onClick}
        type={type}
        disabled={disabled}
    >
        {children}
    </button>
  )
}
