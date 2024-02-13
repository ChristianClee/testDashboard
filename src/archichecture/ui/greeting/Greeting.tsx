import React, { useRef } from 'react';
import style from './Greeting.module.scss'
import logo from './logo.svg';

type PropsT = {

}
const Greeting: React.FC<PropsT> = () => {

  const elemRef = useRef<HTMLDivElement>(null)


  setTimeout(() => {
    if (elemRef.current) {
      elemRef.current.style.transitionDuration = "1000ms"
      elemRef.current.style.opacity = '0'
    }
  },2000)
  setTimeout(() => {
    if (elemRef.current) {
      elemRef.current.style.display= 'none'
    }
  },3000)

  return (
    <div
      className={style.wrapper}
      ref = {elemRef}
    >
      <p>
        тестовое Мишкова Ильи
      </p>
      <img src={logo} className={style.logo} alt="logo" />


    </div>
  );
}
export default Greeting;