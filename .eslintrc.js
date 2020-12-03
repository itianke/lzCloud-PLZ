// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
        parser: "babel-eslint"
    },
    env: {
        browser: true,
    },
    extends: [
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        "plugin:vue/essential",
        // https://github.com/standard/standard/blob/master/docs/RULES-en.md
        "standard"
    ],
    // required to lint *.vue files
    plugins: [
        "vue"
    ],
    // add your custom rules here
    rules: {
        //生成器函数*的前后空格
        'generator-star-spacing': 'off',
        //缩进风格
        indent: [2, 4, { SwitchCase: 1 }],
        //函数定义时括号前面要不要有空格
        'space-before-function-paren': [0, 'always'],
        //中缀操作符周围要不要有空格
        'space-infix-ops': [
            2,
            {
                int32Hint: false,
            },
        ],
        //不能用多余的空格
        'no-multi-spaces': [0],
        //不能有声明后未被使用的变量或参数
        'no-unused-vars': [
            2,
            {
                vars: 'all',
                args: 'none',
            },
        ],
        'no-unused-expressions': 2, //禁止无用的表达式
        //空行最多不能超过2行
        'no-multiple-empty-lines': [
            1,
            {
                max: 2,
            },
        ],
        // if else while for do后面的代码块是否需要{ }包围，参数：
        //    multi  只有块中有多行语句时才需要{ }包围
        //    multi-line  只有块中有多行语句时才需要{ }包围, 但是块中的执行语句只有一行时，
        //                   块中的语句只能跟和if语句在同一行。if (foo) foo++; else doSomething();
        //    multi-or-nest 只有块中有多行语句时才需要{ }包围, 如果块中的执行语句只有一行，执行语句可以零另起一行也可以跟在if语句后面
        //    [2, "multi", "consistent"] 保持前后语句的{ }一致
        //    default: [2, "all"] 全都需要{ }包围
        curly: 2,
        // if while function 后面的{必须与if在同一行，java风格。
        'brace-style': [
            2,
            '1tbs',
            {
                allowSingleLine: true,
            },
        ],
        // 双峰驼命名格式
        camelcase: 2,
        // 数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号，
        // always-multiline：多行模式必须带逗号，单行模式不能带逗号
        'comma-dangle': [2, 'never'],
        // 控制逗号前后的空格
        'comma-spacing': [
            2,
            {
                before: false,
                after: true,
            },
        ],
        // 控制逗号在行尾出现还是在行首出现
        'comma-style': [2, 'last'],
        // switch语句强制default分支，也可添加 // no default 注释取消此次警告
        'default-case': 2,
        // 强制object.key 中 . 的位置，参数:
        //      property，'.'号应与属性在同一行
        //      object, '.' 号应与对象名在同一行
        // "dot-location": [2, "property"],
        // 使用 === 替代 ==
        eqeqeq: [2, 'allow-null'],
        //禁止使用alert confirm prompt
        'no-alert': 0,
        //禁止使用arguments.caller或arguments.callee
        'no-caller': 1,
        //禁止catch子句参数与外部作用域变量同名
        'no-catch-shadow': 2,
        //禁止修改const声明的变量
        'no-const-assign': 2,
        //不能对var声明的变量使用delete操作符
        'no-delete-var': 2,
        //在创建对象字面量时不允许键重复 {a:1,a:1}
        'no-dupe-keys': 2,
        //函数参数不能重复
        'no-dupe-args': 2,
        //不能有不规则的空格
        'no-irregular-whitespace': 2,
        //一行结束后面不要有空格
        'no-trailing-spaces': 0,
        //禁用var，用let和const代替
        'no-var': 0,
        //switch语句最后必须有default
        'default-case': 2,
        //命名检测
        'id-match': 0,
        //使用严格模式
        strict: 2,
        //禁止比较时使用NaN，只能用isNaN()
        'use-isnan': 2,
        'object-curly-even-spacing': 'always',
        'arrow-parens': 0, //箭头函数用小括号括起来
        'no-eval': ["error", { "allowIndirect": true }],
        //禁止使用debugger
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        //禁止无用的表达式
        'no-unused-expressions': 0,
        // 不转译字符
        "no-useless-escape": 0,
    },
}
