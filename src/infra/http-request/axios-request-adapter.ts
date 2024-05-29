import Axios, { AxiosInstance, AxiosRequestHeaders } from 'axios';

import { HttpRequestParams, IHttpRequestPort } from './http-request-port';

const API_BASE_URL = 'http://10.60.93.192:3000';

type CreateClientProps = {
    withCredentials?: boolean;
    headers?: AxiosRequestHeaders;
};

class AxiosHttpRequest implements IHttpRequestPort {
    axiosInstance: AxiosInstance | null = null;

    async get<T>({
        path,
        params,
        withCredentials = true
    }: HttpRequestParams): Promise<T> {
        const { axiosInstance, url } = this._buildRequestConfig({
            path,
            params
        });

        const response = await axiosInstance.get(url, { withCredentials });

        return response.data;
    }

    async post<T>({
        path,
        params,
        body,
        withCredentials = true
    }: HttpRequestParams): Promise<T> {
        const { axiosInstance, url } = this._buildRequestConfig({
            path,
            params
        });

        const response = await axiosInstance.post(url, body, {
            withCredentials
        });

        return response.data;
    }

    async delete<T>({
        path,
        params,
        withCredentials = true
    }: HttpRequestParams): Promise<T> {
        const { axiosInstance, url } = this._buildRequestConfig({
            path,
            params
        });

        const response = await axiosInstance.delete(url, { withCredentials });

        return response.data;
    }

    _createClient({ headers }: CreateClientProps): AxiosInstance {
        const client = Axios.create({
            baseURL: API_BASE_URL
        });

        return client;
    }

    _getInstance(): AxiosInstance {
        if (!this.axiosInstance) {
            this.axiosInstance = this._createClient({});
        }

        return this.axiosInstance;
    }

    _buildQueryString(params?: object) {
        if (!params) return null;

        const queryString = Object.keys(params)
            // @ts-ignore
            .map((key) => key + '=' + params[key])
            .join('&');

        return `?${queryString}`;
    }

    _buildRequestConfig({ params, path }: HttpRequestParams) {
        const queryString = this._buildQueryString(params);
        const axiosInstance = this._getInstance();

        const url = `${path}${queryString ? queryString : ''}`;

        return {
            url,
            axiosInstance
        };
    }
}

const AxiosRequestAdapter = new AxiosHttpRequest();

export default AxiosRequestAdapter;
