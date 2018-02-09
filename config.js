export const GITHUB_USERNAME = process.env.USERNAME;//'username'; // Your bot's Github username
export const GITHUB_PASSWORD = process.env.PASSWORD;//'password'; // Your bot's Github password

export const REPOSITORY_OWNER = process.env.ORG; //   // The owner of the repository you want to run the bot on.
export const REPOSITORY_NAME = process.env.REPO; //   // The name of the repository you want to run the bot on.

export const FILE_FILTER = /.*(.js|.jsx)$/; // By default, lint every single .js or .jsx file
