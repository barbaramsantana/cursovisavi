import api from '../services/api';

import { ICovidDTO } from '../dtos/Covid';
import { IStateDTO } from '../dtos/State';

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

interface ServerResponseState {
  data: IStateDTO[];
}
interface getAPIStateResponse {
  citiesResponse: IStateDTO[];
}
export async function getAPIState(uf: string): Promise<getAPIStateResponse> {
  const response: ServerResponseState = await api.get<IStateDTO[]>(
    `/cities/${uf}`,
  );

  const citiesResponse: IStateDTO[] = response.data;

  return {
    citiesResponse,
  };
}
