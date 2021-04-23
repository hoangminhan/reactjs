import * as Config from './../constants/Config'
import axios from 'axios'

export default function callAPI(enpoint, method = "GET", body) {
    return axios({
        method: method,
        url: `${Config.API_URL}/${enpoint}`,
        data: body
    }).catch(err => {
        console.log(err)
    })

}