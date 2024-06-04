---
title: How to Omit a File from Being Uploaded to Git
date: 23/05/2024
tags: [git, gitignore]
category: Version Control
---

## Omit the File from Git

To omit a  file from being uploaded to Git, you need to add it to your `.gitignore` file. Here are the steps

TODO: reference oo another guide

### Step 2: Remove the file from Git Tracking if Already Uploaded

If the file has already been uploaded, follow these steps to remove it from the repository:

1. Remove the file from the index (staging area) but keep it on your local file system:

```bash
git rm --cached {{file_name}}
```

2. Commit this change:

```bash
git commit -m "Remove {{file_name}} file from tracking"
```

3. Push the changes to the remote repository:

```bash
git push origin <your-branch-name>
```

VIOLA 