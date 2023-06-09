"use strict";
const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  async prompting() {
    this.answers = await this.prompt([
      {
        type: "input",
        name: "folderName",
        message: "Your desired folder name",
        default: "day-00"
      }
    ]);
  }

  writing() {
    this.fs.copy(
      this.templatePath("input.txt"),
      this.destinationPath(`${this.answers.folderName}/input.txt`)
    );
    this.fs.copy(
      this.templatePath("partOne.spec.ts"),
      this.destinationPath(`${this.answers.folderName}/partOne.spec.ts`)
    );
    this.fs.copy(
      this.templatePath("partOne.ts"),
      this.destinationPath(`${this.answers.folderName}/partOne.ts`)
    );
    this.fs.copy(
      this.templatePath("partTwo.spec.ts"),
      this.destinationPath(`${this.answers.folderName}/partTwo.spec.ts`)
    );
    this.fs.copy(
      this.templatePath("partTwo.ts"),
      this.destinationPath(`${this.answers.folderName}/partTwo.ts`)
    );
    this.fs.copy(
      this.templatePath("README.md"),
      this.destinationPath(`${this.answers.folderName}/README.md`)
    );
    this.fs.copy(
      this.templatePath("solution.ts"),
      this.destinationPath(`${this.answers.folderName}/solution.ts`)
    );
  }
};
