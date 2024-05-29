import AxiosRequestAdapter from './axios-request-adapter';

export type HttpRequestParams = {
    path: string;
    body?: object;
    params?: object;
    withCredentials?: boolean;
};

export interface IHttpRequestPort {
    get<T>(config: HttpRequestParams): Promise<T | any | null>;
    post<T>(config: HttpRequestParams): Promise<T | any | null>;
    delete<T>(config: HttpRequestParams): Promise<T | any | null>;
}

const HttpRequestPort = AxiosRequestAdapter;

export default HttpRequestPort;
