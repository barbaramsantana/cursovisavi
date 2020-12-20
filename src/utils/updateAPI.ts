import api from '../services/api';

import { ICovidDTO } from '../dtos/Covid';
import { IStateDTO } from '../dtos/State';
import {IMaxMinDTO} from '../dtos/MaxMin';

interface ServerResponseCovid {
  data: ICovidDTO[];
}
interface getAPICovidResponse {
  citiesCovidResponse: ICovidDTO[];
}
export async function getAPICovid(): Promise<getAPICovidResponse> {
  const response: ServerResponseCovid = await api.get<ICovidDTO[]>('/covid');

  const citiesCovidResponse: ICovidDTO[] = response.data;

  return {
    citiesCovidResponse,
  };
}

interface ServerResponseMaxMin {
  data: IMaxMinDTO[];
}
interface getAPIMaxMinResponse {
  citiesMaxMinResponse: IMaxMinDTO[];
}

export async function getAPIMaxMin(): Promise<getAPIMaxMinResponse> {
  const response: ServerResponseMaxMin = await api.get<IMaxMinDTO[]>('/covid/maxMin');

  const citiesMaxMinResponse: IMaxMinDTO[] = response.data;
  console.log(response);
  
  return {
    citiesMaxMinResponse,
  };
}

interface ServerResponseState {
  data: IStateDTO[];
}
interface getAPIStateResponse {
  citiesResponse: IStateDTO[];
}
export async function getAPIState(uf: string): Promise<getAPIStateResponse> {
  const response: ServerResponseState = await api.get<IStateDTO[]>(
    `/city/${uf}`,
  );

  const citiesResponse: IStateDTO[] = response.data;

  return {
    citiesResponse,
  };
}
