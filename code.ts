import { question } from "readline-sync";
import { readFileSync, writeFileSync } from "fs";

const promptsJSON = readFileSync("./prompts.json", { encoding: "utf-8" });
const prompts = JSON.parse(promptsJSON) as string[];

console.log(prompts[0]);
