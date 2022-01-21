import {APIService} from "../config/config";


export class UploadImage {
    constructor(){}
    uploadImage(image, size){
        return new Promise(function (resolve, reject) {
            APIService.post(`/convert?board_width=${size.width}&board_height=${size.height}` , image, {
                responseType: "blob"
            })
                .then(res=>{
                    resolve(res);
                })
                .catch(err=>{
                    reject(err);
                })
        })
    }
}