const GLib = imports.gi.GLib;
const PATTERN = /\${?([a-z_\-]*)(:[=\-]([^}]*)})?}?/ig;

var ProcessEnvFormat = class {
    format(input) {
        let output = input;
        const matches = output.matchAll(PATTERN);

        for (const match of matches) {
            const token = GLib.getenv(match[1]) || match[3];
            output = output.replace(match[0], token);
        }

        return output;
    }
}
