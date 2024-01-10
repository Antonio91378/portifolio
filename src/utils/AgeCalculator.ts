import moment from "moment";

export function AgeCalculator(data : string): number
{
    var age = moment().diff(data, 'years');

    return age;
}