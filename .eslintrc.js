// https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules
// https://eslint.org/docs/rules/
// for vscode people, i recommend the extension "ghmcadams.lintlens"

// to make easier to type and stuff
const off = "off";
const warn = "warn";
const error = "error";

const always = "always";
const never = "never";
const all = "all";

const noodle = "^_?[a-z0-9]{1,}$";
const noodleorupper = "^_?([0-9a-z]{1,}|[0-9A-Z]{1,})$";
const T = "^[A-Z]$";
const ignoreunused = "^_";

module.exports = {
   parser: "@typescript-eslint/parser",
   parserOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      ecmaFeatures: {
         globalReturn: false,
         impliedStrict: true,
         jsx: false
      },
      tsconfigRootDir: __dirname,
      project: "./tsconfig.json"
   },
   extends: "plugin:@typescript-eslint/recommended",
   env: {
      node: true,
      es2021: true
   },
   rules: {
      // disable base eslint rules in favour of typescript-eslint rules
      "brace-style": off,
      "comma-dangle": off,
      "comma-spacing": off,
      "dot-notation": off,
      "func-call-spacing": off,
      "indent": off,
      "init-declarations": off,
      "keyword-spacing": off,
      "lines-between-class-members": off,
      "no-array-constructor": off,
      "no-empty-function": off,
      "no-extra-semi": off,
      "no-dupe-class-members": off,
      "no-invalid-this": off,
      "no-loop-func": off,
      "no-loss-of-precision": off,
      "no-magic-numbers": off,
      "no-redeclare": off,
      "no-shadow": off,
      "no-throw-literal": off,
      "no-unused-expressions": off,
      "no-use-before-define": off,
      "quotes": off,
      "require-await": off,
      "no-return-await": off,
      "semi": off,
      "space-before-function-paren": off,

      // regular eslint rules
      "no-trailing-spaces": [error],
      "spaced-comment": [error, always],

      // typescript-eslint rules
      "@typescript-eslint/adjacent-overload-signatures": error,
      "@typescript-eslint/array-type": [error, {
         default: "generic",
         readonly: "generic"
      }],
      // "@typescript-eslint/await-thenable": "error",
      "@typescript-eslint/ban-ts-comment": [error, {
         "ts-expect-error": false,
         "ts-ignore": true,
         "ts-nocheck": true,
         "ts-check": true
      }],
      "@typescript-eslint/ban-tslint-comment": error,
      "@typescript-eslint/ban-types": [error, {
         extendDefaults: false,
         types: {
            String: {
               message: "use string (lowercase s) instead, because String bad bad",
               fixWith: "string"
            },
            Number: {
               message: "use number (lowercase n) instead, because Number bad bad",
               fixWith: "number"
            },
            Boolean: {
               message: "use boolean (lowercase b) instead, because Boolean bad bad",
               fixWith: "boolean"
            },
            Symbol: {
               message: "use symbol (lowercase s) instead, because Symbol bad bad",
               fixWith: "symbol"
            },
            Object: {
               message: "use object (lowercase o) instead, because Object bad bad",
               fixWith: "object"
            },
            Function: {
               message: "don't use Function, use a real function type lol"
            },
            "{}": {
               message: "use object instead, because {} ugly ugly",
               fixWith: "object"
            },
            object: {
               message: "don't use object, it means \"any non-nullish value\" and its not very type safe"
            }
         }
      }],
      "@typescript-eslint/brace-style": [error, "1tbs", {
         allowSingleLine: true
      }],
      "@typescript-eslint/class-literal-property-style": [error, "fields"],
      "@typescript-eslint/comma-dangle": [error, {
         arrays: "never",
         objects: "never",
         imports: "never",
         exports: "never",
         functions: "never",
         enums: "never",
         generics: "never",
         tuples: "never"
      }],
      "@typescript-eslint/comma-spacing": [error, {
         before: false,
         after: true
      }],
      "@typescript-eslint/consistent-type-assertions": [error, {
         assertionStyle: "as",
         objectLiteralTypeAssertions: "never"
      }],
      "@typescript-eslint/consistent-type-definitions": [error, "interface"],
      "@typescript-eslint/consistent-type-imports": [error, {
         prefer: "no-type-imports",
         disallowTypeAnnotations: true
      }],
      "@typescript-eslint/default-param-last": error,
      "@typescript-eslint/dot-notation": ["error", {
         allowKeywords: true,
         // allowPattern: "h",
         allowPrivateClassPropertyAccess: false
      }],
      "@typescript-eslint/explicit-function-return-type": [error, {
         allowExpressions: false,
         allowTypedFunctionExpressions: true,
         allowHigherOrderFunctions: true,
         allowConciseArrowFunctionExpressionsStartingWithVoid: false
      }],
      "@typescript-eslint/explicit-member-accessibility": [error, {
         accessibility: "explicit"
      }],
      "@typescript-eslint/explicit-module-boundary-types": [error, {
         allowArgumentsExplicitlyTypedAsAny: true,
         allowDirectConstAssertionInArrowFunctions: false,
         // allowedNames: [],
         allowHigherOrderFunctions: false,
         allowTypedFunctionExpressions: false
      }],
      "@typescript-eslint/func-call-spacing": [error, never],
      // indent: might want to read this issue https://github.com/typescript-eslint/typescript-eslint/issues/1824
      "@typescript-eslint/indent": [error, 3, {
         SwitchCase: 0,
         VariableDeclarator: 1,
         // not clear what this ohteriife thing does
         outerIIFEBody: 0,
         MemberExpression: 1,
         FunctionDeclaration: {
            parameters: 1,
            body: 1
         },
         FunctionExpression: {
            parameters: 1,
            body: 1
         },
         CallExpression: {
            arguments: 1,
         },
         ArrayExpression: 1,
         ObjectExpression: 1,
         ImportDeclaration: 1,
         flatTernaryExpressions: false,
         offsetTernaryExpressions: true,
         // ignoredNodes: [],
         ignoreComments: false
      }],
      "@typescript-eslint/init-declarations": ["error", always],
      "@typescript-eslint/keyword-spacing": ["error", {
         before: true,
         after: true
      }],
      "@typescript-eslint/lines-between-class-members": off,
      "@typescript-eslint/member-delimiter-style": [error, {
         multiline: {
            delimiter: "semi",
            requireLast: true
         },
         singleline: {
            delimiter: "comma",
            requireLast: false
         }
      }],
      "@typescript-eslint/member-ordering": off,
      "@typescript-eslint/method-signature-style": [error, "method"],
      "@typescript-eslint/naming-convention": [error, {
         // for vars and lets
         // noodle
         format: null,
         custom: {
            regex: noodle,
            match: true
         },
         trailingUnderscore: "forbid",
         selector: ["variable"]
      }, {
         // const
         // noodle or upper
         format: null,
         custom: {
            regex: noodleorupper,
            match: true
         },
         trailingUnderscore: "forbid",
         selector: ["variable"],
         modifiers: ["const"]
      }, {
         // function
         // noodle
         format: null,
         custom: {
            regex: noodle,
            match: true
         },
         trailingUnderscore: "forbid",
         selector: ["function"]
      }, {
         // parameters
         // noodle
         format: null,
         custom: {
            regex: noodle,
            match: true
         },
         trailingUnderscore: "forbid",
         selector: ["parameter"]
      }, {
         // properties
         // noodle
         format: null,
         custom: {
            regex: noodle,
            match: true
         },
         trailingUnderscore: "forbid",
         selector: ["property"]
      }, {
         // readonly properties
         // noodle
         format: null,
         custom: {
            regex: noodleorupper,
            match: true
         },
         trailingUnderscore: "forbid",
         selector: ["property"],
         modifiers: ["readonly"]
      }
      // parameter properties go here but idk what that is
      , {
         // method
         // noodle
         format: null,
         custom: {
            regex: noodle,
            match: true
         },
         trailingUnderscore: "forbid",
         selector: ["method"]
      }, {
         // accessor
         // noodle
         format: null,
         custom: {
            regex: noodle,
            match: true
         },
         trailingUnderscore: "forbid",
         selector: ["accessor"]
      }, {
         // readonly accessor
         // noodle
         format: null,
         custom: {
            regex: noodle,
            match: true
         },
         trailingUnderscore: "forbid",
         selector: ["accessor"],
         modifiers: ["readonly"]
      }, {
         // enummember
         // noodle
         format: null,
         custom: {
            regex: noodleorupper,
            match: true
         },
         trailingUnderscore: "forbid",
         selector: ["enumMember"]
      }, {
         // class, interface, typealias, enum
         // noodle
         format: ["PascalCase"],
         trailingUnderscore: "forbid",
         selector: ["class", "interface", "typeAlias", "enum"]
      }, {
         // typeparameter
         format: null,
         custom: {
            regex: T,
            match: true
         },
         trailingUnderscore: "forbid",
         selector: ["typeParameter"]
      }],
      "@typescript-eslint/no-array-constructor": error,
      "@typescript-eslint/no-base-to-string": warn,
      "@typescript-eslint/no-confusing-non-null-assertion": error,
      "@typescript-eslint/no-dupe-class-members": error,
      "@typescript-eslint/no-dynamic-delete": error,
      "@typescript-eslint/no-empty-function": warn,
      "@typescript-eslint/no-empty-interface": error,
      "@typescript-eslint/no-explicit-any": off,
      "@typescript-eslint/no-extra-non-null-assertion": error,
      "@typescript-eslint/no-extra-parens": [error, all],
      "@typescript-eslint/no-extra-semi": off,
      "@typescript-eslint/no-extraneous-class": error,
      "@typescript-eslint/no-floating-promises": error,
      "@typescript-eslint/no-for-in-array": error,
      "@typescript-eslint/no-implicit-any-catch": [error, {
         allowExplicitAny: true
      }],
      "@typescript-eslint/no-implied-eval": error,
      "@typescript-eslint/no-inferrable-types": off,
      "@typescript-eslint/no-invalid-this": error,
      "@typescript-eslint/no-invalid-void-type": [error, {
         allowInGenericTypeArguments: true
      }],
      "@typescript-eslint/no-loop-func": error,
      "@typescript-eslint/no-loss-of-precision": error,
      "@typescript-eslint/no-magic-numbers": [warn, {
         ignore: [-1, 0, 1],
         ignoreArrayIndexes: true,
         ignoreDefaultValues: true,
         enforceConst: false,
         detectObjects: false,
         ignoreEnums: true,
         ignoreNumericLiteralTypes: true,
         ignoreReadonlyClassProperties: true
      }],
      "@typescript-eslint/no-misused-new": error,
      "@typescript-eslint/no-misused-promises": error,
      "@typescript-eslint/no-namespace": error,
      "@typescript-eslint/no-non-null-asserted-optional-chain": error,
      "@typescript-eslint/no-non-null-assertion": error,
      "@typescript-eslint/no-parameter-properties": error,
      "@typescript-eslint/no-redeclare": [error, {
         ignoreDeclarationMerge: false
      }],
      "@typescript-eslint/no-require-imports": error,
      "@typescript-eslint/no-shadow": warn,
      "@typescript-eslint/no-this-alias": error,
      "@typescript-eslint/no-throw-literal": error,
      "@typescript-eslint/no-type-alias": [error, {
         allowAliases: "in-unions-and-intersections"
      }],
      "@typescript-eslint/no-unnecessary-boolean-literal-compare": error,
      "@typescript-eslint/no-unnecessary-condition": error,
      "@typescript-eslint/no-unnecessary-qualifier": error,
      "@typescript-eslint/no-unnecessary-type-arguments": off,
      "@typescript-eslint/no-unnecessary-type-assertion": error,
      "@typescript-eslint/no-unsafe-assignment": error,
      "@typescript-eslint/no-unsafe-call": error,
      "@typescript-eslint/no-unsafe-member-access": error,
      "@typescript-eslint/no-unsafe-return": error,
      "@typescript-eslint/no-unused-expressions": error,
      "@typescript-eslint/no-unused-vars-experimental": [warn, {
         ignoreArgsIfArgsAfterAreUsed: true,
         ignoredNamesRegex: ignoreunused
      }],
      "@typescript-eslint/no-unused-vars": [warn, {
         vars: all,
         varsIgnorePattern: ignoreunused
      }],
      // no-use-before-define: might want to read this issue https://github.com/typescript-eslint/typescript-eslint/issues/1856
      "@typescript-eslint/no-use-before-define": warn,
      "@typescript-eslint/no-useless-constructor": error,
      "@typescript-eslint/no-var-requires": error,
      "@typescript-eslint/prefer-as-const": off,
      "@typescript-eslint/prefer-enum-initializers": warn,
      "@typescript-eslint/prefer-for-of": error,
      "@typescript-eslint/prefer-function-type": warn,
      "@typescript-eslint/prefer-includes": error,
      "@typescript-eslint/prefer-literal-enum-member": error,
      "@typescript-eslint/prefer-namespace-keyword": error,
      "@typescript-eslint/prefer-nullish-coalescing": [error, {
         ignoreConditionalTests: true,
         ignoreMixedLogicalExpressions: true
      }],
      "@typescript-eslint/prefer-optional-chain": error,
      "@typescript-eslint/prefer-readonly-parameter-types": off,
      "@typescript-eslint/prefer-readonly": error,
      "@typescript-eslint/prefer-reduce-type-parameter": error,
      "@typescript-eslint/prefer-regexp-exec": error,
      "@typescript-eslint/prefer-string-starts-ends-with": error,
      "@typescript-eslint/prefer-ts-expect-error": error,
      "@typescript-eslint/promise-function-async": error,
      "@typescript-eslint/quotes": [error, "double", {
         avoidEscape: false,
         allowTemplateLiterals: false
      }],
      "@typescript-eslint/require-array-sort-compare": warn,
      "@typescript-eslint/require-await": off,
      "@typescript-eslint/restrict-plus-operands": [warn, {
         checkCompoundAssignments: true
      }],
      "@typescript-eslint/restrict-template-expressions": off,
      "@typescript-eslint/return-await": off,
      "@typescript-eslint/semi": error,
      "@typescript-eslint/space-before-function-paren": [error, never],
      "@typescript-eslint/strict-boolean-expressions": off,
      "@typescript-eslint/switch-exhaustiveness-check": error,
      "@typescript-eslint/triple-slash-reference": [error, {
         path: never,
         types: never,
         lib: never
      }],
      "@typescript-eslint/type-annotation-spacing": [error, {
         before: false,
         after: true,
         overrides: {
            arrow: {
               before: true,
               after: true
            }
         }
      }],
      "@typescript-eslint/typedef": [error, {
         arrayDestructing: true,
         arrowParameter: false,
         memberVariableDeclaration: true,
         objectDestructuring: true,
         parameter: true,
         propertyDeclaration: true,
         variableDeclaration: true,
         variableDeclarationIgnoreFunction: true
      }],
      "@typescript-eslint/unbound-method": [error, {
         ignoreStatic: false
      }],
      "@typescript-eslint/unified-signatures": error
   }
};
