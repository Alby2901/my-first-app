export class LoggingService {
  logStatusChange(account:{name: string, status: string}) {
  //   console.log('The server \"' + account.name + '\" change, new status: \"' + status + '\"');
  // logStatusChange(status: string) {
    console.log('The server \"' + account.name + '\" change, new status: \"' + account.status + '\"');
  }
}
