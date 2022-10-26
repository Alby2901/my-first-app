export class AccountService {

  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Test Account',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  getAccounts(){
    return this.accounts;
  }

  addAccount(account:{name: string, status: string}){
    this.accounts.push(account);
  }

  changeStatus(updateInfo: {id: number, newStatus: string}){
    this.accounts[updateInfo.id].status = updateInfo.newStatus;

  }

}
