"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const guid_typescript_1 = require("guid-typescript");
class Generator {
    static MakeGUID() {
        return guid_typescript_1.Guid.create();
    }
}
exports.Generator = Generator;
