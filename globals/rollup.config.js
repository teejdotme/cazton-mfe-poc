import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default {
    input: 'src/index.ts',
    output: {
        format: 'system',
        dir: 'dist',
        sourcemap: true
    },
    external: [],
    plugins: [
        nodeResolve(),
        commonjs(),
        typescript(),
    ]
}