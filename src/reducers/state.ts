import { Skills_I, Position_I } from "#reducers/_types/interfaces";
import { employees, skills } from "#reducers/_datas/_datas";


export interface Items_T {
  employees: Position_I[];
  skills: Skills_I[];
}

export const initialItems: Items_T = {
  employees: employees,
  skills: skills,
};
