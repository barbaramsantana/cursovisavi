import api from '../services/api';

import { ICovidDTO, ICovidInfoResponseDTO } from '../dtos/Covid';
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
  //console.log(response.data);

  return {
    citiesCovidResponse,
  };
}

interface ServerResponseMaxMin {
  data: ICovidInfoResponseDTO;
}
interface getAPIMaxMinResponse {
  citiesCovidInfoResponse: ICovidInfoResponseDTO;
}

export async function getAPICovidInfo(): Promise<getAPIMaxMinResponse> {
  const response: ServerResponseMaxMin = await api.get<ICovidInfoResponseDTO>(
    '/covid/maxMin',
  );

  const citiesCovidInfoResponse: ICovidInfoResponseDTO = response.data;

  return {
    citiesCovidInfoResponse,
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
