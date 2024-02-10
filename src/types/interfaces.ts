import { Skills_E, Position_E } from "./enums";

export interface Position_I {
  name: Position_E;
  mainSkills: Skills_E[];
  otherSkills: Skills_E[];
}


export interface Skills_I {
  name: Skills_E;
  mainPositions: Position_E[];
  otherPositions: Position_E[];
}


