import React, { useRef, useState } from 'react';
import style from './Point.module.scss'
import { useCustomHook } from './customHook'
import { Coordinate_I } from "#archichecture/component/_types/types";
import { UiUtil } from '../_functions/utilits'
import { Position_I, Skills_I } from '#reducers/_types/interfaces'



type PropsT = {
  element: Position_I | Skills_I
  func?: () => Coordinate_I,
  styleMode?: true
  func_2?: () => void
  func_3?: () => void
}

const Point: React.FC<PropsT> = ({func, func_2,func_3, element, styleMode }) => {

  let state = element.onClick

  
  const elemRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLDivElement>(null)

  const {
    outActive,
    outPassive,
    innActive,
    innPassive,
  } = UiUtil.getStyle(style, styleMode)

  useCustomHook(func, elemRef, labelRef, element )

  return (
    <div
      className={style.wrapper}
      ref={elemRef}
      onClick={() => {
        if (func_2) {
          func_2()
        }
        if (func_3) {
          setTimeout(() => {
            func_3()
          },50)
        }
        }}
    >
      <div className={style.containerLabel}>
        <p
          className={
            state === 1 ?  [style.label, style.labelAct].join(" ")
              : state === 2 ? [style.label, style.labelAct2].join(" ")
                : style.label}
          ref = {labelRef}
        >{element.name}</p>
      </div>

      <div
        className={
          state === 1 ? outActive : (state === 2) ? outPassive : outPassive
        }
      >
        <div className={
          state === 1 ? innActive : (state === 2) ? innActive : innPassive
        }>
        </div>
          
      </div>
    </div>
    // <></>
  );
}
export default Point;