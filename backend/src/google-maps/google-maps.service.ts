import { Injectable } from '@nestjs/common';
import {Client} from '@googlemaps/google-maps-services-js'
import * as dotenv from 'dotenv'
dotenv.config();


@Injectable()
export class GoolgleMapsService {
    private client: Client;
    constructor(){
        this.client = new Client({})
    }


}
