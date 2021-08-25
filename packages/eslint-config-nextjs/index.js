module.exports = {
    "parserOptions": {
        "ecmaVersion": 2020,
        "sourceType": "module",
        "project": "./tsconfig.json",
        "ecmaFeatures": {
            "impliedStrict": true,
            "legacyDecorators": true,
            "jsx": true
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
        "plugin:node/recommended",
        "plugin:react/recommended",
        "next",
        "prettier"
    ],
    "parser": "@typescript-eslint/parser",
    "plugins": [
        "@typescript-eslint",
        "no-use-extend-native",
        "promise",
        "react"
    ],
    "settings": {
        "react": {
            "pragma": "React",
            "version": "detect"
        },
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
        "react/prop-types": "off",
        "import/extensions": [
            1,
            "ignorePackages",
            {
                "js": "never",
                "jsx": "never",
                "ts": "never",
                "tsx": "never"
            }
        ],
        "promise/always-return": 2,
        "promise/no-return-wrap": 2,
        "promise/param-names": 2,
        "promise/catch-or-return": 2,
        "promise/no-native": 0,
        "promise/no-nesting": 1,
        "promise/no-promise-in-callback": 1,
        "promise/no-callback-in-promise": 1,
        "promise/avoid-new": 1,
        "promise/no-new-statics": 2,
        "promise/no-return-in-finally": 1,
        "promise/valid-params": 0,
        "no-use-extend-native/no-use-extend-native": 0,
        "node/file-extension-in-import": 0,
        "node/no-missing-import": [
            "error",
            {
                "allowModules": [],
                "resolvePaths": [
                    "./src"
                ],
                "tryExtensions": [
                    ".js",
                    ".ts",
                    ".tsx"
                ]
            }
        ],
        "node/prefer-global/buffer": [
            1,
            "always"
        ],
        "node/prefer-global/console": [
            1,
            "always"
        ],
        "node/prefer-global/process": [
            1,
            "always"
        ],
        "node/prefer-global/url-search-params": [
            1,
            "always"
        ],
        "node/prefer-global/url": [
            1,
            "always"
        ],
        "node/prefer-promises/dns": 1,
        "node/prefer-promises/fs": 1,
        "node/no-unsupported-features/es-syntax": 0,
        "import/no-unresolved": [
            2,
            {
                "commonjs": true,
                "amd": true
            }
        ],
        "import/named": 2,
        "import/namespace": 2,
        "import/default": 2,
        "import/export": 2,
        "import/prefer-default-export": 0,
        "import/no-extraneous-dependencies": 0,
        "quotes": [
            2,
            "single"
        ],
        "consistent-return": 0,
        "no-unused-vars": 0,
        "class-methods-use-this": 0,
        "no-useless-constructor": 0,
        "no-multi-spaces": 0,
        "no-underscore-dangle": 0,
        "computed-property-spacing": [
            2,
            "always"
        ],
        "no-whitespace-before-property": 2,
        "func-call-spacing": 0,
        "comma-dangle": [
            2,
            {
                "arrays": "always-multiline",
                "objects": "always-multiline",
                "functions": "always-multiline",
                "imports": "always-multiline",
                "exports": "always-multiline"
            }
        ],
        "for-direction": 2,
        "getter-return": [
            2,
            {
                "allowImplicit": false
            }
        ],
        "no-await-in-loop": 1,
        "no-compare-neg-zero": 2,
        "no-cond-assign": [
            2,
            "always"
        ],
        "no-console": 2,
        "no-constant-condition": 2,
        "no-control-regex": 2,
        "no-debugger": 2,
        "no-dupe-keys": 2,
        "no-duplicate-case": 2,
        "no-empty": 2,
        "no-empty-character-class": 2,
        "no-ex-assign": 2,
        "no-extra-boolean-cast": 2,
        "no-extra-parens": [
            2,
            "all",
            {
                "ignoreJSX": "all"
            }
        ],
        "no-extra-semi": 2,
        "no-func-assign": 2,
        "no-invalid-regexp": 2,
        "no-irregular-whitespace": 2,
        "no-sparse-arrays": 2,
        "no-template-curly-in-string": 2,
        "no-unexpected-multiline": 2,
        "no-unreachable": 2,
        "no-unsafe-finally": 2,
        "no-unsafe-negation": 2,
        "use-isnan": 2,
        "valid-jsdoc": 2,
        "valid-typeof": 2,
        "accessor-pairs": 2,
        "array-callback-return": 2,
        "block-scoped-var": 2,
        "complexity": 0,
        "curly": 2,
        "default-case": 2,
        "dot-location": [
            2,
            "property"
        ],
        "dot-notation": 0,
        "eqeqeq": 2,
        "guard-for-in": 2,
        "no-alert": 2,
        "no-caller": 2,
        "no-case-declarations": 2,
        "no-div-regex": 2,
        "no-else-return": 2,
        "no-empty-function": 1,
        "no-empty-pattern": 2,
        "no-eq-null": 2,
        "no-eval": 2,
        "no-extend-native": 2,
        "no-extra-bind": 2,
        "no-extra-label": 2,
        "no-fallthrough": 2,
        "no-floating-decimal": 2,
        "no-global-assign": 2,
        "no-implicit-coercion": [
            2,
            {
                "allow": [
                    "!!"
                ]
            }
        ],
        "no-implicit-globals": 2,
        "no-restricted-globals": 0,
        "no-implied-eval": 2,
        "no-iterator": 2,
        "no-labels": 2,
        "no-lone-blocks": 2,
        "no-loop-func": 2,
        "no-multi-str": 2,
        "no-new": 2,
        "no-new-func": 2,
        "no-new-wrappers": 2,
        "no-octal": 2,
        "no-octal-escape": 2,
        "no-param-reassign": 2,
        "no-proto": 2,
        "no-redeclare": [
            2,
            {
                "builtinGlobals": true
            }
        ],
        "no-restricted-properties": 2,
        "no-return-assign": [
            2,
            "except-parens"
        ],
        "no-return-await": 2,
        "no-script-url": 2,
        "no-self-assign": [
            2,
            {
                "props": true
            }
        ],
        "no-self-compare": 2,
        "no-sequences": 2,
        "no-throw-literal": 2,
        "no-unmodified-loop-condition": 2,
        "no-unused-labels": 2,
        "no-useless-call": 2,
        "no-useless-concat": 2,
        "no-useless-return": 2,
        "no-with": 2,
        "prefer-promise-reject-errors": 2,
        "radix": 2,
        "require-await": 2,
        "vars-on-top": 2,
        "wrap-iife": 2,
        "yoda": 2,
        "global-require": 2,
        "handle-callback-err": [
            2,
            "error"
        ],
        "no-buffer-constructor": 2,
        "no-mixed-requires": 2,
        "no-new-require": 2,
        "no-path-concat": 2,
        "no-process-exit": 2,
        "no-restricted-modules": 2,
        "no-sync": 0,
        "array-bracket-newline": [
            2,
            {
                "multiline": true
            }
        ],
        "block-spacing": 2,
        "brace-style": [
            2,
            "1tbs",
            {
                "allowSingleLine": true
            }
        ],
        "camelcase": 0,
        "comma-spacing": [
            2,
            {
                "before": false,
                "after": true
            }
        ],
        "comma-style": [
            2,
            "last"
        ],
        "consistent-this": [
            2,
            "self"
        ],
        "eol-last": 2,
        "func-name-matching": 2,
        "func-names": 0,
        "func-style": [
            2,
            "declaration",
            {
                "allowArrowFunctions": true
            }
        ],
        "function-paren-newline": [
            2,
            "consistent"
        ],
        "id-blacklist": [
            2,
            "e",
            "err",
            "evt",
            "cb"
        ],
        "id-length": 0,
        "implicit-arrow-linebreak": 1,
        "indent": [
            2,
            4,
            {
                "SwitchCase": 1
            }
        ],
        "key-spacing": [
            2,
            {
                "beforeColon": false,
                "afterColon": true,
                "align": "value"
            }
        ],
        "keyword-spacing": 2,
        "linebreak-style": [
            2,
            "unix"
        ],
        "lines-between-class-members": [
            1,
            "always",
            {
                "exceptAfterSingleLine": true
            }
        ],
        "max-depth": 0,
        "max-len": [
            2,
            100,
            {
                "ignoreTemplateLiterals": true,
                "ignoreStrings": true,
                "ignoreUrls": true,
                "ignoreComments": true,
                "ignoreRegExpLiterals": true
            }
        ],
        "max-nested-callbacks": [
            2,
            4
        ],
        "max-params": [
            2,
            4
        ],
        "max-statements": 0,
        "max-statements-per-line": [
            2,
            {
                "max": 1
            }
        ],
        "new-parens": 2,
        "newline-per-chained-call": 2,
        "no-bitwise": 2,
        "no-lonely-if": 2,
        "no-mixed-operators": 2,
        "no-mixed-spaces-and-tabs": 2,
        "no-multi-assign": 2,
        "no-multiple-empty-lines": [
            2,
            {
                "max": 2,
                "maxEOF": 1
            }
        ],
        "no-nested-ternary": 2,
        "no-new-object": 2,
        "no-plusplus": [
            2,
            {
                "allowForLoopAfterthoughts": true
            }
        ],
        "no-restricted-syntax": [
            2,
            "WithStatement"
        ],
        "no-tabs": 2,
        "no-trailing-spaces": 2,
        "no-unneeded-ternary": 2,
        "nonblock-statement-body-position": 2,
        "one-var": [
            2,
            "never"
        ],
        "operator-assignment": 2,
        "operator-linebreak": [
            2,
            "before"
        ],
        "padded-blocks": [
            2,
            "never"
        ],
        "padding-line-between-statements": [
            2,
            {
                "blankLine": "always",
                "prev": "*",
                "next": "return"
            }
        ],
        "quote-props": [
            2,
            "as-needed"
        ],
        "semi": 2,
        "semi-spacing": [
            2,
            {
                "before": false,
                "after": true
            }
        ],
        "semi-style": [
            2,
            "last"
        ],
        "space-in-parens": [
            2,
            "never"
        ],
        "space-infix-ops": 2,
        "space-unary-ops": 2,
        "switch-colon-spacing": 2,
        "template-tag-spacing": [
            2,
            "never"
        ],
        "space-before-blocks": 2,
        "arrow-body-style": 0,
        "arrow-parens": [
            2,
            "always"
        ],
        "@typescript-eslint/indent": [
            2,
            4
        ],
        "@typescript-eslint/naming-convention": [
            2,
            {
                "selector": "interface",
                "format": [
                    "PascalCase"
                ],
                "custom": {
                    "regex": "^I[A-Z]",
                    "match": true
                }
            }
        ],
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/no-floating-promises": 1,
        "@typescript-eslint/no-for-in-array": 1,
        "@typescript-eslint/no-misused-promises": 1,
        "@typescript-eslint/no-misused-new": 1,
        "@typescript-eslint/no-non-null-assertion": 1,
        "@typescript-eslint/no-require-imports": 1,
        "@typescript-eslint/no-this-alias": 1,
        "@typescript-eslint/no-unused-vars": 1,
        "@typescript-eslint/no-unused-expressions": 1,
        "@typescript-eslint/no-useless-constructor": 1,
        "@typescript-eslint/prefer-for-of": 1,
        "@typescript-eslint/dot-notation": 2,
        "jsx-quotes": [
            2,
            "prefer-single"
        ],
        "react/jsx-equals-spacing": [
            2,
            "always"
        ],
        "react/jsx-curly-spacing": [
            2,
            {
                "when": "always"
            }
        ],
        "react/jsx-max-props-per-line": [
            2,
            {
                "maximum": 2,
                "when": "always"
            }
        ],
        "react/jsx-first-prop-new-line": [
            2,
            "multiline-multiprop"
        ],
        "react/jsx-closing-bracket-location": [
            2,
            "tag-aligned"
        ],
        "react/react-in-jsx-scope": 0,
        "@typescript-eslint/lines-between-class-members": [
            "error",
            "always",
            {
                "exceptAfterSingleLine": true
            }
        ]
    }
};
