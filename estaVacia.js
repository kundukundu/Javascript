/**
* Verifica si la variable está vaci
*/

function estaVacia(variable) {
        let type = typeof variable;
        if(type === 'undefined') {
            return true;
        }
        if(variable === null) {
            return true;
        }
        if(type=== 'boolean') {
            return !variable;
        }
        if(variable === undefined) {
            return true;
        }
        if(variable instanceof Array) {
            if(variable.length < 1) {
                return true;
            }
        }
        else if(type === 'string') {
            if(variable.length < 1) {
                return true;
            }
            if(variable==='0') {
                return true;
            }
        }
        else if(type === 'object') {
            if(Object.keys(variable).length < 1) {
                return true;
            }
        }
        else if(type === 'number') {
            if(variable===0) {
                return true;
            }
        }
        return false;
    }
