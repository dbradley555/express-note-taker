// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license, username, repository) {
  if (!license) {
    return '';
  }
  return `![GitHub](https://img.shields.io/github/license/${username}/${repository}?style=for-the-badge)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license, username, repository) {
  if (!license) {
    return '';
  }
  return `https://github.com/${username}/${repository}/blob/main/LICENSE`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  return `This application is covered under the ${license}. Please use the link above for details.`;
}

function generateTableofContents() {
  return '- [Installation](#installation)\n - [Usage](#usage)\n - [Credits](#credits)\n - [License](#license)\n - [Contribution](#contribution)\n - [Tests](#tests)\n - [Questions](#questions)';
}

function generateQuestionsContent(username, email) {
  return `https://github.com/${username} \n\n If you have any questions, feel free to reach me via my GitHub account or you can reach me at \n ${email}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(
  license,
  username,
  repository,
  email,
  title,
  description,
  installation,
  usage,
  credits,
  contribution,
  testing
) {
  let licenseBadge = renderLicenseBadge(license, username, repository);
  let tableofContents = generateTableofContents();
  let questionContent = generateQuestionsContent(username, email);
  let licenseSection = renderLicenseSection(license);
  let licenseLink = renderLicenseLink(license, username, repository);
  return `# ${title}\n\n ${licenseBadge}\n\n ## Description\n\n ${description}\n\n ## Table of Contents\n\n ${tableofContents}\n\n ## Installation\n\n ${installation}\n\n ## Usage\n\n ${usage}\n\n ## Credits\n\n ${credits}\n\n ## License\n\n ${licenseLink}\n\n ${licenseSection}\n\n ## Contribution\n\n ${contribution}\n\n ## Tests\n\n ${testing}\n\n ## Questions\n\n ${questionContent}`;
}

module.exports = generateMarkdown;
