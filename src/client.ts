/**
 * 
 * This file will provide the entry point into the LoL API wrapper.
 * 
 */

import {LoLStaticData} from "./api/staticData/lolStaticData";

/**
 * 
 * Your client :)
 * 
 */
export class Client {

    public staticData: LoLStaticData;

    constructor(private key: string, private region: string) {

        // API calls go here..
        this.staticData = new LoLStaticData(this.key, this.region);

    }    

}