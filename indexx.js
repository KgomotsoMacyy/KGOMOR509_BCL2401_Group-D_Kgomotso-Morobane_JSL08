// Define the BankBranch class
class BankBranch {
    constructor(branchInfo) {
        if (!BankBranch.bankBranchInstance) {
            // Create a new instance if it doesn't exist
            this.branchInfo = branchInfo;
            BankBranch.bankBranchInstance = this;
        }
        return BankBranch.bankBranchInstance; // Return the singleton instance
    }

    // Method to get branch information
    getBranchInfo() {
        return this.branchInfo;
    }
}

// Create a variable to store the singleton instance
BankBranch.bankBranchInstance = null;

// Usage
// Creating instances of BankBranch
const branchA = new BankBranch({ name: 'Branch A', location: 'City A' });
const branchB = new BankBranch({ name: 'Branch B', location: 'City B' });

// Retrieving branch information
const infoA = branchA.getBranchInfo();
const infoB = branchB.getBranchInfo();

console.log(infoA); // { name: 'Branch A', location: 'City A' }
console.log(infoB); // { name: 'Branch A', location: 'City A' } (Same as branchA)

// Checking if branchA and branchB refer to the same instance
console.log(branchA === branchB); // true (Both refer to the same instance)