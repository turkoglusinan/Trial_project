Pulumi EC2 Instance Creator
This Pulumi project automates the creation of EC2 instances using AWS. You can modify the script to deploy multiple servers as needed.

Prerequisites
Install Pulumi on your computer.
An AWS account with necessary permissions.
AWS CLI configured with your credentials (aws configure).
Setup Instructions
Clone the repository:

sh
Copy
Edit
git clone <your-repo-url>
cd <your-repo-folder>
Update AWS Configuration:

AMI ID: Find it in the AWS EC2 AMI catalog and update it in the code.
Key Pair: Obtain your key pair name from AWS EC2 under Network & Security.
Modify the Instance Count (Optional):

To create multiple servers, update the for loop in the Pulumi code:
typescript
Copy
Edit
for (let i = 0; i < desiredInstanceCount; i++) {
    new aws.ec2.Instance(`server-${i}`, { ... });
}
Deploy the EC2 Instances:
Run the following command and confirm when prompted:

sh
Copy
Edit
pulumi up
This will display the created EC2 instance IDs in the terminal.
Shutting Down Instances
To delete all instances, run:

sh
Copy
Edit
pulumi destroy
Confirm the prompt to terminate all instances.

Customizing for Other Cloud Providers
If you want to use a different cloud provider (e.g., Azure, Google Cloud), update the Pulumi code accordingly. Refer to Pulumi documentation for more details.

