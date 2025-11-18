ulumi DevOps Activity – Cloud Infrastructure Automation

Subject: DevOps
Instructor: Sir Sherjeel Gilani
Program: BSCS
Section: 6-1
Student Name: Arslan Tahir
SAP ID: 47120

📌 Project Overview

This repository contains my DevOps practical activity in which I implemented Infrastructure-as-Code (IaC) using Pulumi.
The project follows the concepts demonstrated in the video:

“Pulumi Complete Crash Course in 1 Hour | KubeKode”

The activity focuses on:

Automating cloud resource provisioning

Managing infrastructure declaratively

Applying DevOps best practices

Using Pulumi with Node.js to build infrastructure programmatically

🎯 Objectives of the Activity

The goal of this DevOps assignment was to:

Understand and implement Infrastructure-as-Code (IaC)

Use Pulumi CLI to deploy cloud infrastructure

Learn stack management (pulumi up, pulumi destroy)

Upload the completed project to GitHub

Document the entire workflow professionally

🛠️ Technologies Used

Pulumi (Infrastructure-as-Code)

Node.js / NPM

JavaScript

VS Code

Git & GitHub

Cloud Provider (AWS / GCP / Azure depending on setup)

📂 Project Structure
Pulumi-main/
│── Pulumi.yaml
│── Pulumi.dev.yaml (or other stacks)
│── index.js
│── package.json
│── node_modules/
│── README.md   (this file)

🚀 How to Run This Project
1. Install Pulumi
curl -fsSL https://get.pulumi.com | sh

2. Login to Pulumi
pulumi login

3. Install Dependencies
npm install

4. Deploy the Infrastructure
pulumi up

5. Destroy Infrastructure (Optional)
pulumi destroy

📘 What I Learned

Through this DevOps practical I learned:

How IaC works in real production workflows

How Pulumi uses JavaScript to define infrastructure

How to deploy, update, and destroy cloud resources

How to structure, commit, and manage DevOps code in GitHub

The importance of automation in modern cloud environments
