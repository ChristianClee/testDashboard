import React, { useRef, useState } from 'react';
import style from './Point.module.scss'
import { useCustomHook } from './customHook'
import { Coordinate_I } from "#archichecture/component/_types/types";
import { UiUtil } from '../_functions/utilits'
import { Position_I, Skills_I } from '#types/interfaces'



type PropsT = {
  element: Position_I | Skills_I
  func?: () => Coordinate_I,
  styleMode?: true
}

const Point: React.FC<PropsT> = ({element, func, styleMode }) => {

  const [state, setState] = useState<boolean>(false)

  const elemRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLDivElement>(null)
  const {
    styleOutPassive,
    styleOutActive,
    styleInnPassive,
    styleInnActive
  } = UiUtil.getStyle(style, styleMode)


  useCustomHook(func, elemRef, labelRef )


  return (
    <div
      className={style.wrapper}
      ref={elemRef}
      onClick={() => {
          setState(prev => !prev)
          console.log(element)
        }}
    >
      <div className={style.containerLabel}>
        <p
          className={style.label}
          ref = {labelRef}
        >{element.name}</p>
      </div>

      <div
        className={state ? styleOutActive : styleOutPassive}
      >
        <div className={state ? styleInnActive : styleInnPassive}>
        </div>
          
      </div>
    </div>
  );
}
export default Point;