export const DATA_GET = 'DATA:GET';
export const DATA_SAVE = 'DATA:SAVE';

export function getData(data){
  return {
    type: DATA_GET,
    dataload: {
      data,
    }
  }
}

export function saveData(data){
  return {
    type: DATA_SAVE,
    dataload: {
      data,
    }
  }
}