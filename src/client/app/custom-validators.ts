import {Control, ControlGroup} from "angular2/common";

export class CustomValidators{
    static shouldBeUnique(control: Control){
        return new Promise((resolve, reject) => {
            setTimeout(function(){
                if(control.value == "mosh")
                    resolve({shouldBeUnique: true});
                else{
                    resolve(null);
                }
            },1000);
        });
    }

    static cannotContainSpace(control: Control){
        if (control.value.indexOf(' ') >=0)
            return {cannotContainSpace: true};
        return null;
    }

    static cannotContainSpaces(control: ControlGroup){
        for(var k in control.controls) {
            console.log(control.controls[k].value);
        }
        return  {cannotContainSpaces: true};
        //return null;
    }

    static isInvalidEmail(control: Control){
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regex.test(control.value) && control.value!="")
            return {isInvalidEmail: true};
        return null;
    }
}