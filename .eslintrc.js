module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 9,
        sourceType: "module",
    },
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    plugins: ["react-hooks", "@typescript-eslint"],
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "prettier",
    ],
};
