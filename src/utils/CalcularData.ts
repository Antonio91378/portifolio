import moment from "moment";

export function CalcularData(data : string)
{
    const actualDate = moment().format('yyyy/MM/DD')
    var convertedDate = moment(data).format('yyyy/MM/DD')

    console.log(actualDate);
    console.log(convertedDate);

    return actualDate;
}