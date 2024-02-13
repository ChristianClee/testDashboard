import { Skills_E, Position_E } from "./enums";


export interface EntryDate_I {
  name: Position_E;
  mainSkills: Skills_E[];
  otherSkills: Skills_E[];
}



export interface Position_I {
  name: Position_E;
  mainSkills: Skills_E[];
  otherSkills: Skills_E[];
  onClick: null | 1 | 2;
  id: string;
}


export interface Skills_I {
  name: Skills_E;
  mainPositions: Position_E[];
  otherPositions: Position_E[];
  onClick: null | 1 | 2;
  id: string;
}


