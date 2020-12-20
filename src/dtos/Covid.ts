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
