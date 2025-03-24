# Identifying & Fixing Code Smells Reflection

## What Code Smells Did You Find in Your Code?

While working on this task, I noticed several code smells that needed addressing:
1. **Long Functions:** The original code was a single long function that handled different user types separately.
2. **Magic Numbers:** The discount rates (0.1, 0.2, 0.3) were hardcoded directly in the function.
3. **Duplicated Code:** Each user type calculation repeated the same logic with only slight variations.
4. **Inconsistent Naming:** User type names were inconsistently formatted and directly embedded into string outputs.
5. **No Reusability:** The code was rigid and didn’t support easy updates.

---

## How Did Refactoring Improve the Readability and Maintainability of the Code?

Refactoring greatly improved both readability and maintainability by:
1. **Using Constants:** Moved the discount rates to a constant object to make the code more readable and flexible.
2. **Simplifying Logic:** Reduced the code to a single calculation with a lookup for user type discounts.
3. **Improved Output Formatting:** Made the output more consistent and dynamically formatted.
4. **Error Handling:** Used `console.error` for invalid user types to make the feedback more informative.

The refactoring made the code not only shorter but also easier to understand and maintain. Now, if I need to add a new user type or change a discount rate, it’s just a single line change.

---

## How Can Avoiding Code Smells Make Future Debugging Easier?

When code is clean and free of smells, it’s way easier to spot issues or make changes without breaking things. If I had left the original smelly code as it was, it would be prone to errors if any change was needed. Plus, the repetitive nature of the original function made it easy to miss a bug or overlook an inconsistency.

By following clean code practices and eliminating smells, I made the code more resilient and future-proof. This experience taught me that spending a bit of time upfront on clean code can save a lot of headaches down the line.

---

## Final Thoughts

Going through the process of identifying and fixing code smells made me realize how easy it is to write bad code without noticing it. Even though it works, that doesn’t mean it’s good. Taking the time to refactor and clean up made a huge difference, and I now feel way more confident in my ability to write maintainable code.
