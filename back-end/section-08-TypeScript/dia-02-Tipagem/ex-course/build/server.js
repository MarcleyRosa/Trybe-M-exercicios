"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
exports.app = require('./app');
const PORT = 3001;
exports.app.listen(PORT, () => {
    console.log(`API TrybeCash está sendo executada na porta ${PORT}`);
});
