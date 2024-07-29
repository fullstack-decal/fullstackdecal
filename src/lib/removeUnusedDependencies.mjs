/* eslint-disable no-console */
import { exec } from "child_process";
import depcheck from "depcheck";

const options = {
  ignoreDirs: [
    // list of directories to ignore
    "node_modules",
    "dist",
    "build",
  ],
  ignoreMatches: ["core-js", "prettier", "autoprefixer", "husky", "@docusaurus/module-type-aliases", "@mdx-js/react", "clsx"],
};

depcheck(process.cwd(), options, (unused) => {
  const unusedDependencies = unused.dependencies;
  const unusedDevDependencies = unused.devDependencies;

  if (unusedDependencies.length === 0 && unusedDevDependencies.length === 0) {
    console.log("No unused dependencies found.");
    return;
  }

  const allUnused = [...unusedDependencies, ...unusedDevDependencies];
  console.log(`Unused dependencies: ${allUnused.join(", ")}`);

  const uninstallCmd = `npm remove ${allUnused.join(" ")}`;
  console.log(`Running: ${uninstallCmd}`);

  exec(uninstallCmd, (err, stdout, stderr) => {
    if (err) {
      console.error(`Error uninstalling packages: ${stderr}`);
    } else {
      console.log(`Successfully uninstalled unused packages:\n${stdout}`);
    }
  });
});
