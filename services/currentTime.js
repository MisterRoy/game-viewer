
export function getCurrentTime(){
  const today = new Date();
  return today.getHours() + ':' +
    today.getMinutes() + ':' +
    today.getSeconds() + ' ';
}
