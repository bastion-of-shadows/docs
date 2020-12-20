# Bastion of Shadows game documentation

This repo represents the gameplay guide and technical documentation for the game mechanics.

## Contributing

Contributions are welcome from anyone who wants to participate in making Bastion of Shadows. Outside contributors should fork the repository, while Bastion of Shadows team members can clone the repository directly.

### Requirements

To contribute to the docs, you should have experience working with Markdown. (If you've ever used Reddit's post editor syntax, that's Markdown.) You will also need to build the docs locally on your machine.

To build the docs locally, you will need to have [NodeJS](https://nodejs.org/en/download/) installed on your computer.

### Setting up your cloned repository

If you're a member of the `@bastion-of-shadows/docs-team`, clone this repository. If you're not a team member, you'll have to fork the repository and clone your fork. Clone with:

```bash
# SSH
git clone git@github.com:/<your-fork-repo>/docs.git
# or HTTPS
git clone https://github.com/<your-fork-repo>/docs.git
```

Once you've downloaded the code, you need to install the NPM packages. Navigate to the repository directory and run:

```bash
npm i # or npm install
```

After that runs, create a new branch for your changes and write your code.

### Testing your changes

To make sure you didn't break anything and your code looks/works like you want, you should run the app locally. To do that, open a console and navigate to the repo directory and run:

```bash
npm run serve
```

### Contributing your code to the repo

Once you have your changes made, commit them with a descriptive Git commit message, then push the changes back to your **feature branch** on GitHub. Submit a pull request to this repository explaining your changes (reference an issue number if this resolves an issue, with `closes #xxx` in the pull request message). Your pull request should merge your fork's feature branch onto the `next` branch, **not** `master`. `next` is used for staging purposes.