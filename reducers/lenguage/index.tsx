import { aboutType, masterDataES, recommendationsType, resumeType } from "@/utils/masterData";
import { lenguageAction } from "./action";

type lenguageType = {
  leng: 'EN' | 'ES',
  about: aboutType,
  opinions: recommendationsType[],
  resume: resumeType
}

export const initialState: lenguageType = {
  leng: "ES",
  about: masterDataES.about,
  opinions: masterDataES.recommendations,
  resume: masterDataES.resume
}

export const LenguageReducer = (state: lenguageType, action: lenguageAction): lenguageType => {
  switch (action.type) {
    case 'leng':
      return {
        leng: action.payload.leng,
        about: action.payload.about,
        opinions: action.payload.recommendations,
        resume: action.payload.resume
      };
    default:
      return state;
  }
}