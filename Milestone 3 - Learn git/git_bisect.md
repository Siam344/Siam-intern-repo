# 🐞 Debugging with `git bisect`

## 🎯 Goal
`git bisect` is a tool designed to identify the specific commit that introduced a bug in a project. By using a binary search approach, it quickly narrows down the range of commits, saving time and effort during the debugging process.

---

## ✅ Tasks

- **Understand `git bisect`:**  
  Acts as a guided detective, splitting the commit history to efficiently find where things went wrong.

- **Create a Test Scenario:**  
  1. Make several commits in the test repository.  
  2. Introduce a bug in one of the commits — on purpose this time.  
  3. Use `git bisect` to locate the problematic commit.

- **Experiment with Git:**  
  Test `git bisect` using either the terminal or a Git client to observe how it streamlines the debugging process.

---

## 🧠 Reflections

### ❓ **What Does `git bisect` Do?**  
It uses binary search to track down the exact commit that introduced a bug. By marking one commit as "good" and another as "bad," it efficiently narrows down the range until the culprit is found.

### 📅 **When Is It Useful?**  
- When the exact cause of a bug isn’t clear.  
- In situations where manually reviewing every commit isn’t practical.  
- For projects with long commit histories where pinpointing issues is time-consuming.

### ⚖️ **Why Use `git bisect` Over Manual Review?**  
While manually reviewing commits is an option, `git bisect` significantly reduces the workload by automating the search process, leading to faster resolutions.

---

## 📤 How to Push This to GitHub

1. **Stage the File:**  
   ```powershell
   git add "Milestone 3 - Learn git/git_bisect.md"
