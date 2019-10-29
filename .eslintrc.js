module.exports = {
    parser: "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
    },
    root: true,
    env: {
        node: true
    },
    'extends': [
        'standard'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'indent': ['error', 4, { SwitchCase: 1 }],
        'comma-dangle': [
            'error', {
                'arrays': 'only-multiline',
                'objects': 'only-multiline'
            }
        ],
        'padded-blocks': 'off'
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)'
            ],
            env: {
                jest: true
            }
        }
    ]
}
