import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config({
    ignores: [
        ".docusaurus",
        "babel.config.js",
    ],
    extends: [
        eslint.configs.recommended,
        ...tseslint.configs.strict,
        ...tseslint.configs.stylistic,
    ],
    env: {
        browser: true,
        node: true,
    },
});