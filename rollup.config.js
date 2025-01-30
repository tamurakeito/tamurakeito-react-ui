import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";
import dts from "rollup-plugin-dts";
import alias from "@rollup/plugin-alias";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/cjs/index.js",
        format: "cjs",
        exports: "auto",
      },
      {
        file: "dist/esm/index.js",
        format: "esm",
        exports: "auto",
      },
    ],
    plugins: [
      commonjs({ include: ["node_modules/**"] }),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss({
        plugins: [autoprefixer()],
        sourceMap: true,
        minimize: true,
        modules: true,
        use: [
          [
            "sass",
            {
              includePaths: ["./src"],
            },
          ],
        ],
      }),
      terser(),
      alias({
        entries: [
          { find: "src", replacement: path.resolve(__dirname, "src") }, // "src"を絶対パスにマッピング
          {
            find: "assets",
            replacement: path.resolve(__dirname, "src/assets"),
          },
        ],
      }),
    ],
    external: ["react", "react-dom", "classnames"],
  },
  {
    input: "dist/cjs/types/index.d.ts",
    output: [{ file: "dist/cjs/index.d.ts", format: "cjs" }],
    plugins: [dts()],
    external: [/\.css$/u],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/esm/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/u],
  },
];
