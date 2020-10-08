import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';

export default {
    input: 'src/index.tsx',
    output: {
        format: 'system',
        dir: 'dist',
        sourcemap: true
    },
    external: [
        "react",
        "react-dom",
        "react-router",
        "react-router-dom",
        "@poc-mfe/globals",
    ],
    plugins: [
        postcss({
            modules: true,
        }),
        nodeResolve(),
        commonjs(),
        typescript(),
    ]
}