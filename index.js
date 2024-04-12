// Create a variable to store the singleton instance of the bank branch. "bankBranchInstance"
let bankBranchInstance = null;
// Define a class called `BankBranch` for managing branch information.
class BankBranch {  // 3. In the `BankBranch` class:
    constructor(branchInfo) {  // Create a constructor that takes `branchInfo` as a parameter.
      if (!bankBranchInstance) {  // check if the `bankBranchInstance` variable is null (indicating no instance exists).
        this.branchInfo = branchInfo; // If `bankBranchInstance` is null, create a new instance with the provided `branchInfo` and assign it to `bankBranchInstance`.
        bankBranchInstance = this;
      }
      return bankBranchInstance;   //    - Return the `bankBranchInstance` whether it's newly created or existing.
    }
    getBranchInfo() {   // methods to the `BankBranch` class for managing branch-related information.
        return this.branchInfo;
      }
    
      // Other methods related to branch management
}

// Usage section:
const branchA = new BankBranch("Main Street Branch"); // Creating instances of the `BankBranch` class, such as `branchA` and `branchB`, with different branch information.
console.log(branchA.getBranchInfo()); // Used the `getBranchInfo` method to retrieve branch information from the instances.

const branchB = new BankBranch("Second Street Branch");
console.log(branchB.getBranchInfo());
console.log(branchA === branchB); // Verify that `branchA` and `branchB` are both referring to the same instance by comparing them using `===`.