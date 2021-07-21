module.exports = {
    "parserOptions": {
        "ecmaVersion": 2020,
        "sourceType": "module",
        "project": "./tsconfig.json",
        "ecmaFeatures": {
            "impliedStrict": true,
            "legacyDecorators": true
        }
    },
    "env": {
        "node": true,
        "jest": true,
        "es6": true
    },
    "extends": [
        "airbnb-typescript/base",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "plugin:node/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "plugins": [
        "@typescript-eslint",
        "no-loops",
        "no-use-extend-native",
        "promise"
    ],
    "settings": {
        "import/resolver": {
            "node": {
                "extensions": [
                    ".js",
                    ".jsx",
                    ".ts",
                    ".tsx"
                ],
                "paths": [
                    "src"
                ]
            }
        },
        "import/extensions": [
            ".js",
            ".jsx",
            ".ts",
            ".tsx"
        ],
        "import/parsers": {
            "@typescript-eslint/parser": [
                ".js",
                ".jsx",
                ".ts",
                ".tsx"
            ]
        }
    },
    "rules": {
        "promise/always-return": "error"
    }
};
