import { Items_T } from './state'
import { Position_I, Skills_I } from './_types/interfaces'

export enum Action_E {
  EnablePoints,
  EnableSkills,
}


export interface EnablePoints_I {
  type: Action_E.EnablePoints;
  payload: Position_I;
}

export interface EnableSkills_I {
  type: Action_E.EnableSkills;
  payload: Skills_I;
}





export type Action_T = EnablePoints_I | EnableSkills_I;
