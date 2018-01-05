import {EMPLOYEE_UPDATE} from './types'

export const EmployeeUpdatwe = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload:  { prop, value}
    };
};