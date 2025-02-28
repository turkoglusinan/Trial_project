Kubernetes

1-There are 2 script shell one common and one master shell script. 

2-Need to download common script for all nodes. Need to download master shell only for first master node.

3-For adding second control plane you need to get join token from first master node and then add first control plane. And for worker node again need to get join token and add nodes as worker node to your cluster.


Pulumi Files

Setting Up EC2 Instances
Follow these steps to set up and manage EC2 instances using Pulumi:

1. Install Pulumi
If you haven't installed Pulumi yet, you can do so by following the installation guide for your platform: Install Pulumi.

2. Login to AWS
Ensure you have authenticated Pulumi with your AWS account using the AWS CLI:


3. Update AMI ID and Key Pair
Update the AMI ID in the Pulumi code. You can find the AMI ID in the EC2 AMI catalog.
Update the key pair in the code to match the key pair you've created in your AWS account. You can find this in the Network & Security section of the EC2 dashboard.
4. Modify the Number of Instances
You can modify the number of instances you'd like to create by adjusting the numInstances variable in the Pulumi code.

5. Create the EC2 Instances
To create the specified number of EC2 instances, run the following command:

```shellscript
pulumi up
```
This command will ask for confirmation before proceeding. Once you confirm, Pulumi will create the EC2 instances, and the instance IDs will be displayed in the terminal.

6. Destroy the EC2 Instances
To shut down and terminate all of the created EC2 instances, run the following command:

```shellscript
pulumi destroy
```
This will automatically terminate all the EC2 instances that were created.
