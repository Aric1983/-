import { DataStore } from "../js/base/DataStore.js"
import { StageResourceLoader } from "./js/base/StageResourceLoader.js"
const dataStore = DataStore.getInstance();
export class Test {
  constructor() {
    let loader = StageResourceLoader.creat();
    loader.onLoaded(map => this.onResourceFirstLoader(map));
  }
  onResourceFirstLoader(map) {
    console.log("map集合的大小" + map.size);
    console.log("dataStore.res.size集合的大小" + dataStore.res.size);
    for (var [key, value] of map) {
      dataStore.res.set(key,value);
    }
    console.log("dataStore.res.size集合的大小" + dataStore.res.size);
  }

 
  static getInstance() {
    if (!Test.instance) {
      Test.instance = new Test();
    }
    return Test.instance;
  }

}