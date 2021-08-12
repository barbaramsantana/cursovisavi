import api from '../services/api';

import { ICovidDTO, ICovidInfoResponseDTO, ILeitoDTO, IVacineDTO } from '../dtos/Covid';
import { IStateDTO } from '../dtos/State';

interface ServerResponseCovid {
  data: ICovidDTO[];
}
interface getAPICovidResponse {
  citiesCovidResponse: ICovidDTO[];
}
export async function getAPICovid(): Promise<getAPICovidResponse> {
  const response: ServerResponseCovid = await api.get<ICovidDTO[]>('/dadoscovid');

  const citiesCovidResponse: ICovidDTO[] = response.data;
  console.log(response.data);

  return {
    citiesCovidResponse,
  };
}

interface ServerResponseVacine {
  data: IVacineDTO[];
}
interface getAPIVacineResponse {
  citiesVacineResponse: IVacineDTO[];
}
export async function getAPIVacine(): Promise<getAPIVacineResponse> {
  const response: ServerResponseVacine = await api.get<IVacineDTO[]>('/dadosVacina');

  const citiesVacineResponse: IVacineDTO[] = response.data;
  console.log(response.data);

  return {
    citiesVacineResponse,
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
    '/dadoscovid/Maxmin',
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
    `/dadosCidadeMapas/${uf}`,
  );

  const citiesResponse: IStateDTO[] = response.data;

  return {
    citiesResponse,
  };
}

interface ServerResponseLeito {
  data: ILeitoDTO[];
}
interface getAPILeitoResponse {
  citiesLeitoResponse: ILeitoDTO[];
}
export async function getAPILeito(): Promise<getAPILeitoResponse> {
  const response: ServerResponseLeito = await api.get<ILeitoDTO[]>('/dadosLeitosHop');

  const citiesLeitoResponse: ILeitoDTO[] = response.data;
  console.log(response.data);

  return {
    citiesLeitoResponse,
  };
}
