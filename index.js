import { Account } from '@provablehq/sdk';

const account = new Account();

// Individual keys can then be accessed through the following methods
const privateKey = account.privateKey();
const viewKey = account.viewKey();
const address = account.address();