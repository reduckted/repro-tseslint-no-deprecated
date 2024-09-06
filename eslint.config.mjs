import tseslint from 'typescript-eslint';

export default tseslint.config({
    files: ['*.ts'],
    plugins: { 'typescript-eslint': tseslint.plugin },
    rules: {
        'typescript-eslint/no-deprecated': 'error',
    },
    languageOptions: {
        parser: tseslint.parser,
        parserOptions: {
            projectService: true,
            tsconfigRootDir: import.meta.dirname,
        },
    },
});
