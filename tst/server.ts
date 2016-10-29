import {Client} from "../src/client";
import {ChampionListOption} from "../src/api/staticData/ChampionListOption";

var client = new Client("redacted", "na");

client.staticData.championList(new ChampionListOption()).then( (data) => console.log(data) );
console.log(client);