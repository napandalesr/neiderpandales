import { aboutType, masterDataEN, masterDataES, recommendationsType, resumeType } from "@/utils/masterData";

export type lenguageAction = 
    | { type: 'leng', payload: { leng: 'EN' | 'ES', about: aboutType, resume: resumeType, recommendations: recommendationsType[]; } };

export const lengAction = (leng: 'EN' | 'ES'): lenguageAction => {
  if(leng === 'ES') {
    return {
      type: 'leng',
      payload: {
        leng: 'ES',
        about: masterDataES.about,
        recommendations: masterDataES.recommendations,
        resume: masterDataES.resume
      }
    }
  }
  return {
    type: 'leng',
    payload: {
      leng: 'EN',
      about: masterDataEN.about,
      recommendations: masterDataEN.recommendations,
      resume: masterDataEN.resume
    }
  }
}