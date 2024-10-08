# Contributing to Menu Mate 🍽️

We welcome contributions to **Menu Mate**! Whether you're fixing bugs, adding new features, or improving the documentation, your help is appreciated. Please follow the guidelines below to ensure a smooth collaboration.

## Table of Contents
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
  - [Reporting Issues](#reporting-issues)
  - [Suggesting Features](#suggesting-features)
  - [Code Contributions](#code-contributions)
- [Coding Guidelines](#coding-guidelines)
- [Commit Message Guidelines](#commit-message-guidelines)

## Getting Started

1. Fork the repository by clicking on the "Fork" button at the top of this page.
2. Clone your fork locally:
   ```bash
   git clone https://github.com/your-username/menu-mate.git
   cd menu-mate
   ```
3. Set up the upstream remote:
   ```bash
   git remote add upstream https://github.com/original-owner/menu-mate.git
   ```
4. Pull the latest changes from upstream:
   ```bash
   git pull upstream main
   ```
5. Create a new branch for your feature or fix:
   ```bash
   git checkout -b feature-branch-name
   ```

## How to Contribute

### Reporting Issues

If you find any bugs, glitches, or room for improvement, feel free to create an issue:

1. Check if the issue has already been reported under the **Issues** tab.
2. If it's a new issue, open one and clearly describe the problem.
3. Include screenshots or logs if relevant.

### Suggesting Features

We are always open to new feature ideas that can improve **Menu Mate**! To suggest a feature:

1. Check the existing feature requests under **Issues**.
2. Open a new issue labeled **Feature Request**.
3. Clearly explain your feature idea and why it would be useful.

### Code Contributions

To contribute code:

1. Ensure your branch is up-to-date with the upstream `main` branch.
   ```bash
   git pull upstream main
   ```
2. Make your changes on your feature branch.
3. Commit your changes with a descriptive message.
4. Push your changes to your fork:
   ```bash
   git push origin feature-branch-name
   ```
5. Open a Pull Request (PR) to the **main** branch of the original repository:
   - Go to your fork on GitHub and click "Compare & pull request".
   - Ensure your PR provides enough context about your changes.
   - Link any relevant issues.

## Coding Guidelines

1. **HTML**: Ensure semantic and valid HTML structure.
2. **CSS**: Follow consistent naming conventions (e.g., BEM methodology) and avoid inline styles.
3. **JavaScript**: Keep code modular and reusable. Ensure ES6+ syntax is used.
4. **JSON**: Ensure the data is structured cleanly, especially for the menu files.

Please ensure code consistency and readability by following these best practices:

- Indent code with 2 spaces.
- Use meaningful variable and function names.
- Keep functions short and focused on a single task.

## Commit Message Guidelines

Your commit messages should be descriptive and follow these conventions:

- Use the present tense ("Add feature" not "Added feature").
- Be concise, but explain the purpose of the commit.
- If fixing an issue, include the issue number (e.g., `Fixes #12`).

Example:
```bash
git commit -m "Add tomorrow's menu preview feature"
```


Thank you for contributing to **Menu Mate**! Your input makes this project better for everyone 🎉.
