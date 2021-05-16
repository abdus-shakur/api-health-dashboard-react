import {get,request} from './xhr/index'
import Constants from "../constants/configurations"

export class WidgetAdapter {

    static env = Constants.DEFAULT_ENVIRONMENT;

    static updateFunction;

    static async callWidgetDetails(updateFunction){
        var options1 = {url: '/ui-details',headers:{'env': this.env},method:'post'};
        this.updateFunction = updateFunction;
        request(options1).then(json=>updateFunction(json.data));
    }

    static async getEnvironmentList(setEnvList){
        get('/environments').then(res=>{setEnvList({data:res.data});});
    }

    static setEnvironment(environment){
        this.env = environment;
        if(this.updateFunction){
            this.callWidgetDetails(this.updateFunction);
        }
    }


}

export default WidgetAdapter;