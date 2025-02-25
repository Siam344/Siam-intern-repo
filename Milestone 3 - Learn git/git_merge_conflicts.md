# 🔀 Merge Conflicts & Conflict Resolution

## 🎯 Goal
Understanding what merge conflicts are, why they happen, and how to resolve them — without losing your mind. 😅

---

## ✅ Tasks Completed

### 🔍 1. Researched What Causes Merge Conflicts
Merge conflicts occur when two branches make changes to the same part of a file or when one branch deletes a file that another branch is modifying. Imagine two people editing the same Google Doc at the same time — chaos!

---
### 🛠️ **2. Created a Merge Conflict in My Test Repo**

```bash
# Create a new branch
git checkout -b conflict-branch

# Make changes and commit in conflict-branch
echo "This is the conflict branch change." >> example.txt
git add example.txt
git commit -m "Updated example.txt in conflict-branch"

# Switch back to main and make conflicting change
git checkout main
echo "This is the main branch change." >> example.txt
git add example.txt
git commit -m "Updated example.txt in main branch"

# Merge conflict-branch into main (this triggers the conflict)
git merge conflict-branch

#❗ 3. Resolved the Conflict Using Git Desktop Client
Opened Git Desktop → Conflict flagged.
Manually chose which changes to keep.
Marked as resolved → Committed the final version.
