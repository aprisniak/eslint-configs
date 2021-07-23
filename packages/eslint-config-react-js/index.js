module.exports = {
    "parserOptions": {
        "ecmaVersion": 2020,
        "sourceType": "module",
        "ecmaFeatures": {
            "impliedStrict": true,
            "legacyDecorators": true,
            "jsx": true
        }
    },
    "env": {
        "browser": true,
        "node": true,
        "jest": true,
        "es6": true
    },
    "extends": [
        "airbnb-base",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:node/recommended",
        "plugin:react/recommended"
    ],
    "plugins": [
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
                    ".jsx"
                ],
                "paths": [
                    "src"
                ]
            }
        },
        "import/extensions": [
            ".js",
            ".jsx"
        ],
    },
    "rules": {
        "react/prop-types": "off",
        "import/extensions": [
            "warn",
            "ignorePackages",
            {
                "js": "never",
                "jsx": "never",
                "ts": "never",
                "tsx": "never"
            }
        ],
        "promise/always-return": "error",
        "promise/no-return-wrap": "error",
        "promise/param-names": "error",
        "promise/catch-or-return": "error",
        "promise/no-native": 0,
        "promise/no-nesting": "warn",
        "promise/no-promise-in-callback": "warn",
        "promise/no-callback-in-promise": "warn",
        "promise/avoid-new": "warn",
        "promise/no-new-statics": "error",
        "promise/no-return-in-finally": "warn",
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
            "warn",
            "always"
        ],
        "node/prefer-global/console": [
            "warn",
            "always"
        ],
        "node/prefer-global/process": [
            "warn",
            "always"
        ],
        "node/prefer-global/url-search-params": [
            "warn",
            "always"
        ],
        "node/prefer-global/url": [
            "warn",
            "always"
        ],
        "node/prefer-promises/dns": "warn",
        "node/prefer-promises/fs": "warn",
        "node/no-unsupported-features/es-syntax": 0,
        "import/no-unresolved": [
            "error",
            {
                "commonjs": true,
                "amd": true
            }
        ],
        "import/named": "error",
        "import/namespace": "error",
        "import/default": "error",
        "import/export": "error",
        "import/prefer-default-export": 0,
        "quotes": [
            "error",
            "single"
        ],
        "consistent-return": 0,
        "no-unused-vars": 0,
        "class-methods-use-this": 0,
        "no-useless-constructor": 0,
        "no-multi-spaces": 0,
        "no-underscore-dangle": 0,
        "computed-property-spacing": [
            "error",
            "always"
        ],
        "no-whitespace-before-property": "error",
        "func-call-spacing": 0,
        "comma-dangle": [
            "error",
            {
                "arrays": "always-multiline",
                "objects": "always-multiline",
                "functions": "always-multiline",
                "imports": "always-multiline",
                "exports": "always-multiline"
            }
        ],
        "for-direction": "error",
        "getter-return": [
            "error",
            {
                "allowImplicit": false
            }
        ],
        "no-await-in-loop": "warn",
        "no-compare-neg-zero": "error",
        "no-cond-assign": [
            "error",
            "always"
        ],
        "no-console": "warn",
        "no-constant-condition": "error",
        "no-control-regex": "error",
        "no-debugger": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-empty": "error",
        "no-empty-character-class": "error",
        "no-ex-assign": "error",
        "no-extra-boolean-cast": "error",
        "no-extra-parens": [
            "error",
            "all",
            {
                "ignoreJSX": "all"
            }
        ],
        "no-extra-semi": "error",
        "no-func-assign": "error",
        "no-invalid-regexp": "error",
        "no-irregular-whitespace": "error",
        "no-sparse-arrays": "error",
        "no-template-curly-in-string": "error",
        "no-unexpected-multiline": "error",
        "no-unreachable": "error",
        "no-unsafe-finally": "error",
        "no-unsafe-negation": "error",
        "use-isnan": "error",
        "valid-jsdoc": "error",
        "valid-typeof": "error",
        "accessor-pairs": "error",
        "array-callback-return": "error",
        "block-scoped-var": "error",
        "complexity": 0,
        "curly": "error",
        "default-case": "error",
        "dot-location": [
            "error",
            "property"
        ],
        "dot-notation": 0,
        "eqeqeq": "error",
        "guard-for-in": "error",
        "no-alert": "error",
        "no-caller": "error",
        "no-case-declarations": "error",
        "no-div-regex": "error",
        "no-else-return": "error",
        "no-empty-function": "warn",
        "no-empty-pattern": "error",
        "no-eq-null": "error",
        "no-eval": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-extra-label": "error",
        "no-fallthrough": "error",
        "no-floating-decimal": "error",
        "no-global-assign": "error",
        "no-implicit-coercion": [
            "error",
            {
                "allow": [
                    "!!"
                ]
            }
        ],
        "no-implicit-globals": "error",
        "no-restricted-globals": 0,
        "no-implied-eval": "error",
        "no-iterator": "error",
        "no-labels": "error",
        "no-lone-blocks": "error",
        "no-loop-func": "error",
        "no-multi-str": "error",
        "no-new": "error",
        "no-new-func": "error",
        "no-new-wrappers": "error",
        "no-octal": "error",
        "no-octal-escape": "error",
        "no-param-reassign": "error",
        "no-proto": "error",
        "no-redeclare": [
            "error",
            {
                "builtinGlobals": true
            }
        ],
        "no-restricted-properties": "error",
        "no-return-assign": [
            "error",
            "except-parens"
        ],
        "no-return-await": "error",
        "no-script-url": "error",
        "no-self-assign": [
            "error",
            {
                "props": true
            }
        ],
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-throw-literal": "error",
        "no-unmodified-loop-condition": "error",
        "no-unused-labels": "error",
        "no-useless-call": "error",
        "no-useless-concat": "error",
        "no-useless-return": "error",
        "no-with": "error",
        "prefer-promise-reject-errors": "error",
        "radix": "error",
        "require-await": "error",
        "vars-on-top": "error",
        "wrap-iife": "error",
        "yoda": "error",
        "global-require": "error",
        "handle-callback-err": [
            "error",
            "error"
        ],
        "no-buffer-constructor": "error",
        "no-mixed-requires": "error",
        "no-new-require": "error",
        "no-path-concat": "error",
        "no-process-exit": "error",
        "no-restricted-modules": "error",
        "no-sync": 0,
        "array-bracket-newline": [
            "error",
            {
                "multiline": true
            }
        ],
        "block-spacing": "error",
        "brace-style": [
            "error",
            "1tbs",
            {
                "allowSingleLine": true
            }
        ],
        "camelcase": 0,
        "comma-spacing": [
            "error",
            {
                "before": false,
                "after": true
            }
        ],
        "comma-style": [
            "error",
            "last"
        ],
        "consistent-this": [
            "error",
            "self"
        ],
        "eol-last": "error",
        "func-name-matching": "error",
        "func-names": 0,
        "func-style": [
            "error",
            "declaration",
            {
                "allowArrowFunctions": true
            }
        ],
        "function-paren-newline": [
            "error",
            "consistent"
        ],
        "id-blacklist": [
            "error",
            "e",
            "err",
            "evt",
            "cb"
        ],
        "id-length": 0,
        "implicit-arrow-linebreak": "warn",
        "indent": ["error", 4],
        "key-spacing": [
            "error",
            {
                "beforeColon": false,
                "afterColon": true,
                "align": "value"
            }
        ],
        "keyword-spacing": "error",
        "linebreak-style": [
            "error",
            "unix"
        ],
        "lines-between-class-members": [
            "warn",
            "always",
            {
                "exceptAfterSingleLine": true
            }
        ],
        "max-depth": 0,
        "max-len": [
            "error",
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
            "error",
            4
        ],
        "max-params": [
            "error",
            4
        ],
        "max-statements": 0,
        "max-statements-per-line": [
            "warn",
            {
                "max": 2
            }
        ],
        "new-parens": "error",
        "newline-per-chained-call": "error",
        "no-bitwise": "error",
        "no-lonely-if": "error",
        "no-mixed-operators": "error",
        "no-mixed-spaces-and-tabs": "error",
        "no-multi-assign": "error",
        "no-multiple-empty-lines": [
            "error",
            {
                "max": 2,
                "maxEOF": 1
            }
        ],
        "no-nested-ternary": "error",
        "no-new-object": "error",
        "no-plusplus": [
            "error",
            {
                "allowForLoopAfterthoughts": true
            }
        ],
        "no-restricted-syntax": [
            "error",
            "WithStatement"
        ],
        "no-tabs": "error",
        "no-trailing-spaces": "error",
        "no-unneeded-ternary": "error",
        "nonblock-statement-body-position": "error",
        "one-var": [
            "error",
            "never"
        ],
        "operator-assignment": "error",
        "operator-linebreak": [
            "error",
            "before"
        ],
        "padded-blocks": [
            "error",
            "never"
        ],
        "padding-line-between-statements": [
            "error",
            {
                "blankLine": "always",
                "prev": "*",
                "next": "return"
            }
        ],
        "quote-props": [
            "error",
            "as-needed"
        ],
        "semi": "error",
        "semi-spacing": [
            "error",
            {
                "before": false,
                "after": true
            }
        ],
        "semi-style": [
            "error",
            "last"
        ],
        "space-in-parens": [
            "error",
            "never"
        ],
        "space-infix-ops": "error",
        "space-unary-ops": "error",
        "switch-colon-spacing": "error",
        "template-tag-spacing": [
            "error",
            "never"
        ],
        "space-before-blocks": "error",
        "arrow-body-style": 0,
        "arrow-parens": [
            "error",
            "always"
        ],
        "jsx-quotes": [
            "error",
            "prefer-single"
        ],
        "react/jsx-equals-spacing": [
            "error",
            "always"
        ],
        "react/jsx-curly-spacing": [
            "error",
            {
                "when": "always",
                "children": true
            }
        ],
        "react/jsx-max-props-per-line": [
            "error",
            {
                "maximum": 2,
                "when": "always"
            }
        ],
        "react/jsx-first-prop-new-line": [
            "error",
            "multiline-multiprop"
        ],
        "react/jsx-closing-bracket-location": [
            "error",
            "after-props"
        ],
        "react/react-in-jsx-scope": 0,
        "react/jsx-tag-spacing": ["warn", {
            "beforeSelfClosing": "always"
        }]
    }
};
