import { StageResource } from "./StageResource.js"
// 资源类文件加载器
export class StageResourceLoader{
  constructor(){
    this.map = new Map(StageResource);
     for(let[key,value] of this.map){
       const image = wx.createImage();
       image.src = value;
       this.map.set(key,image);
     }
  }
  onLoaded(callback) {
    let loadedCount = 0;

    for (let value of this.map.values()) {
      value.onload = () => {
        loadedCount++;
        if (loadedCount >= this.map.size) {
          callback(this.map);
        }
      }
    }

  }
  static creat(){
    return new StageResourceLoader();
  }
}
