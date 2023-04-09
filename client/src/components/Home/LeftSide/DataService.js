import {Data} from "./Data";

export function getData() {
    const dataList = data;
    return dataList;
}

export function filterData(dataType) {
    let filterData = getData().filter(catagories => catagories.catagory === dataType);
    return filterData;
}