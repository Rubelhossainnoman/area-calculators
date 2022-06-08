/**
 * Alert Function...
*/

const set_alert = (data,type='danger') => {
    return `<p class="alert alert-${type} d-flex justify-content-between">${data} <button class="btn-close" data-bs-dismiss="alert"></button></p>`
}

/**
 * Number validations....
*/

const nu = (number) => {
    nu_p = /^[0-9]{1,3}$/;
    return nu_p.test(number);
}

const arecal = (type = `Don't select any Area`,val1 = null,val2 = null,alert_type='danger') => {
    
    if (type == 'Rectangle') {
        return set_alert(`This Rectangle area is ${(val1 * val2).toFixed(2)}`,'success');
    } else if(type == 'Square') {
        return set_alert(`This Square area is ${(val1 * val1).toFixed(2)}`,'success');
    } else if(type == 'Tringle') {
        return set_alert(`This Tringle area is ${(.5 * (val1 * val2)).toFixed(2)}`,'success');
    } else if(type == 'Circle') {

        /**
         * Another Waye....
         * let val = Math.round(3.1416 * val1 * val1);
        */

        return set_alert(`This Circle area is ${(3.1416 * (val1 * val1)).toFixed(4)}`,'success');
    }
}