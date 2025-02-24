# 📌 Advanced Git Commands & When to Use Them

## 🎯 Goal
The goal here is to dive into some of Git's more advanced commands — the kind of stuff that makes troubleshooting and code management smoother, especially when things get messy. No more sweating over lost commits or figuring out who did what — these commands have got it covered.

---

## ✅ Tasks

### 📖 Research the following Git commands and give them a spin:

- **`git checkout main -- <file>`** — Grabs a specific file from the `main` branch without touching anything else. Super handy when one file is broken, but the rest of the code is fine.
  
- **`git cherry-pick <commit>`** — Imagine you made a brilliant fix in a feature branch and now want that specific commit in `main` — without merging everything else. That’s where this comes in.

- **`git log`** — Think of this as your project’s history book. It lets you trace all the changes, who made them, and when. Plus, you can customize the view to make sense of complicated commit trees.

- **`git blame <file>`** — Need to know who last touched a specific line of code? This command calls out the culprit (in the best way possible).

---

### 🧪 Time to Test:

- Modify a file, then bring it back using `checkout` (like a CTRL+Z for just that file).
- Use `cherry-pick` to pluck a single commit from one branch and drop it into another — clean and simple.
- Run `git log` and try flags like `--oneline` or `--graph` for a neat visual of your commit history.
- Use `git blame` on a file and see who last edited each line — great for when a bug pops up and you need answers.