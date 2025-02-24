# 🛠️ Creating & Reviewing Pull Requests

## 📌 Why are Pull Requests (PRs) Important in a Team Workflow?
Pull Requests are crucial for team collaboration in Git. They allow developers to:
- Review code before merging it into the main branch.
- Discuss and provide feedback on new features or fixes.
- Maintain code quality and avoid breaking changes.

## ✅ What Makes a Well-Structured PR?
A well-structured Pull Request should:
- Have a clear and descriptive title.
- Include a summary of changes made.
- Reference any related issues (if applicable).
- Pass all tests and checks before requesting a review.

## 👀 What Did I Learn From Reviewing an Open-Source PR?
While reviewing an open-source PR, I learned to:
- Focus on code readability and maintainability.
- Check for logical errors and edge cases.
- Communicate feedback politely and constructively.

## 💡 Key Takeaways
- PRs improve collaboration and code quality.
- Reviewing others' PRs is a great way to learn best practices.
- Constructive feedback is essential for growth.

---

# ✏️ Writing Meaningful Commit Messages:

**💡 Reflections**
📌 What makes a good message?
➡️ Short, clear, and action-oriented.

📌 Why does it matter?
➡️ It helps team members understand changes quickly and makes debugging easier.

📌 What happens if it’s bad?
➡️ Confusing commit histories, making collaboration and troubleshooting harder.

---

# 🐞 Debugging with `git bisect` # 🧠 Git Understanding

## 🔍 What does `git bisect` do?
`git bisect` is a command-line tool that helps identify the commit that introduced a bug by using a binary search. It’s like playing detective, but with fewer donuts.

## 🏆 When would you use it in a real-world debugging situation?
Whenever a bug shows up out of nowhere and you have **no clue** which commit caused it. Instead of manually checking each one (ugh), `git bisect` narrows it down like a pro.

## 🤔 How does it compare to manually reviewing commits?
`git bisect` is faster and less painful. Manually reviewing dozens of commits is like searching for a needle in a haystack — `git bisect` gives you a metal detector.
