export interface ICovidDTO {
  _id: string;
  id_city: string;
  residencia: string;
  confirmed: number;
  death: number;
  lethality: number;
  incidence: number;
  mortality: number;
  isolation: number;
  date: string;
}

export interface ICovidInfoDTO {
  max: number;
  min: number;
  med: number;
}

export interface ICovidInfoResponseDTO {
  max_confirm: number;
  max_death: number;
  max_incidence: number;
  max_isolation: number;
  max_lethality: number;
  max_mortality: number;
  med_confirm: number;
  med_death: number;
  med_incidence: number;
  med_isolation: number;
  med_lethality: number;
  med_mortality: number;
  min_confirm: number;
  min_death: number;
  min_incidence: number;
  min_isolation: number;
  min_lethality: number;
  min_mortality: number;
}

export interface IVacineDTO{
  _id: string;
  id_city: string;
  populationTot: number;
  totDosesSent_1: number;
  totDosesSent_2: number;
  totDosesApply_1: number;
  totDosesApply_2: number;
  date: string,
  __v: number;
}

export interface IVacineGrap{
  populationTot: number;
  totDosesSent_1: number;
  totDosesSent_2: number;
  totDosesApply_1: number;
  totDosesApply_2: number;
  date: string,
}

export interface ILeitoDTO{
  _id: string;
  UF: string;
  totAdmittedPrivate_UTI: number;
  totAdmittedPrivate_infirmary: number;
  totAdmittedSUS_UTI: number;
  totAdmittedSUS_infirmary: number;
  totHospitalBeds_available: number;
  totHospitalBeds_occupied: number;
  date: string,
  __v: number;
}

export interface ISentimentoDTO{
  sentimentFeliz:{
    count: number;
    sentiment:[string];
  };
  sentimentMedo:{
    count: number;
    sentiment:[string];
  };
  sentimentNeutro:{
    count: number;
    sentiment:[string];
  };
  sentimentNojo:{
    count: number;
    sentiment:[string];
  };
  sentimentRaiva:{
    count: number;
    sentiment:[string];
  };
  sentimentTriste:{
    count: number;
    sentiment:[string];
  };
}