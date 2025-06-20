import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import { defineConfig, globalIgnores } from "eslint/config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const compat = new FlatCompat({ baseDirectory: __dirname });

export default defineConfig([
  globalIgnores(["src/components/ui/"]), // ⬅️ ignora globalmente essa pasta
  ...compat.extends("next/core-web-vitals", "next/typescript"),
]);
