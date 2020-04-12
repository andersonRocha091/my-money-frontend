import Axios from 'axios';
import { toastr } from 'react-redux-toastr'
const BASE_URL = 'http://localhost:3003/api';

export function getList() {
    const request = Axios.get(`${BASE_URL}/billingCycles`);
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values) {
    Axios.post(`${BASE_URL}/billingCycles`, values)
        .then(resp => {
            toastr.success('Sucesso', 'Operação realizada com sucesso.')
        })
        .catch(e => {
            e.response.data.errors.forEach(error => toastr.error('Erro', error));
        })
    return {
        type: 'TEMP'
    }
}