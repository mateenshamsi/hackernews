import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import drizzlePlugin from "@drizzle-team/eslint-plugin-drizzle";
import eslintPrettierConfig from "eslint-plugin-prettier";
import {fixupPluginRules} from "@betternews/eslint-plugin-fixup";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,
  {languageOptions:{
    globals:globals.browser
  }},
  pluginJS.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins:{
      drizzle:fixupPluginRules(drizzlePlugin),
    }
  }
]);
