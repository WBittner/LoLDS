/**
 * Utils functions - in a class for the typings intellisense...
 * TODO: Can I get intellisense without a class?
 */

import {IOption} from "./option";

export class Utils {

    /**
     * Returns the formatted endpoint
     */
    getEndpoint(urlBase: string, region: string, version: string, key: string, endpoint: string, options?: IOption):string {
        var url = urlBase + "/" + region + "/" + version + "/" + endpoint + "?";
        for(var option in options) {
            url += option + "=" + options[option] + "&";
        }
        url += "api_key=" + key;

        return url;
    }

}


