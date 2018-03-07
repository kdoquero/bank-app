"use strict"
import moment from 'moment';
import axios from 'axios';

const url = "http://localhost:3000/expenses";

export class Dao {
   

    static getAll(){
        return axios({
            method: "get",
            url: url
        })
    }

    static add(expense){
        return axios({
            method: "POST",
            url: url,
            data: expense
        }).then((response)=> {
            console.log(response.data)
        })
    }

}