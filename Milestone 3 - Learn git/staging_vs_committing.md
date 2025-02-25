# 🎯 Goal

Understand the core difference between **staging** and **committing** in Git and why both steps are essential for maintaining clean and organized project history. Staging allows developers to selectively prepare changes for a commit, providing an opportunity to review and group related updates before making them part of the project’s history. Committing, on the other hand, finalizes those staged changes, recording them in the repository. 

By mastering the distinction between these two steps, developers can:
- Prevent accidental commits of incomplete or unrelated changes.
- Structure commits logically, making the project’s history easier to follow.
- Enhance collaboration by ensuring that only reviewed and intentional updates make it into the shared codebase.

This task will help in building a deeper understanding of Git’s workflow, enabling better control over version management and promoting best practices in team collaboration.

---

# ✅ Tasks

### 1️⃣ Research the difference between staging and committing.
- Staging is like placing files on a “to-do list” for Git — the changes are noted but not yet permanent.
- Committing takes the staged changes and officially records them in the repository history.

### 2️⃣ Experiment with adding and committing files in your repo using either:
- **The terminal commands:**
  ```bash
  git add <file>      # Stage the file
  git commit -m "Your commit message"   # Commit the staged file
  