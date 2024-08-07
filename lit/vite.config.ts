import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
    plugins: [nodePolyfills()],
    resolve: {
        alias: {
            buffer: "buffer/",
            crypto: "crypto-browserify",
            stream: "stream-browserify",
            vm: "vm-browserify",
        },
    },
    define: {
        "process.env": {},
        global: "window",
    },
});
