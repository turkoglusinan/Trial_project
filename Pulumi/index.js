import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

const instanceNumber = 3;

const instances = [];

// Create an AWS resource (EC2)
// need to update your ami ID and key pair
for (let i = 0; i < instanceNumber; i++){
    const instance = new aws.ec2.Instance(`new-instance-${i}`,{
        ami: "ami-04b4f1a9cf54c11d0",
        instanceType: "t2.micro",
        keyName: "sinan-ec2-keypair",
        tags: {
            Name: `new-ec2-instance-${i}`
        }
    }
    );
    instances.push(instance)
}

// Export the EC2 instances IDs
export const instancesIds = instances.map(instance => instance.id);

