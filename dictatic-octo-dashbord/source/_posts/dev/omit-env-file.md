---
title: How to Omit .env File from Being Uploaded to Git
date: 2024-05-23
tags: [git, .env, gitignore, security]
category: Version Control
---

## Omit `.env` File from Git

To omit a `.env` file from being uploaded to Git, you need to add it to your `.gitignore` file. Here are the steps:

### Step 1: Add `.env` to `.gitignore`

1. Open your project's root directory.
2. Find the `.gitignore` file. If it doesn't exist, create one.
3. Add `.env` to the `.gitignore` file. Your `.gitignore` file should look something like this:

```plaintext
# .gitignore
.env
```

### Step 2: Remove `.env` from Git Tracking if Already Uploaded

If the `.env` file has already been uploaded, follow these steps to remove it from the repository:

1. Remove the `.env` file from the index (staging area) but keep it on your local file system:

```bash
git rm --cached .env
```

2. Commit this change:

```bash
git commit -m "Remove .env file from tracking"
```

3. Push the changes to the remote repository:

```bash
git push origin <your-branch-name>
```

### Fixing Sensitive Data Exposure

If the `.env` file contained sensitive information that was exposed, consider the following steps:

1. **Change Credentials**: Immediately change any credentials (API keys, passwords, etc.) that were in the `.env` file.
2. **Invalidate Tokens**: Invalidate any exposed tokens or keys and generate new ones.
3. **Revoke Access**: Revoke any compromised access as necessary.

### Example `.gitignore` file

```plaintext
# Ignore .env file
.env

# Other common files to ignore
node_modules/
dist/
build/
.DS_Store
.idea/
*.log
```

### Summary

By adding the `.env` file to `.gitignore` and removing it from tracking, you can ensure it won't be uploaded to Git. If it was uploaded, follow the steps to remove it and change any exposed credentials.

:::note
Ensure your `.gitignore` file is correctly configured to prevent sensitive files from being committed to your repository.
:::
