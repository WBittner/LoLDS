/**
 * 
 * Static Data endpoint wrapper
 * 
 */

import * as rp from "request-promise";

import {Utils} from "../apiUtils";

import {IOption} from "../option";

import {ChampionListOption} from "./championListOption";


export class LoLStaticData {

    private urlBase: string;
    private version: string;
    private getEndpoint: (endpoint: string, options: IOption) => string;

    constructor(private key: string, private region: string) {
        this.urlBase = "https://global.api.pvp.net/api/lol/static-data";
        this.version = "v1.2";
        this.getEndpoint = new Utils().getEndpoint.bind(null, this.urlBase, this.region, this.version, this.key);
    }
    
    /**
     * Retrieves champion list
     * static-data/{region}/{version}/champion
     */
    championList(option: ChampionListOption): rp.RequestPromise {
        return rp(this.getEndpoint("champion", option));
    }

    /**
     * Retrieves a champion by its id
     * static-data/{region}/{version}/champion/{id}
     */
    championById() {
        console.log("cbi");
    }

}