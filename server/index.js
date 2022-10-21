"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
// const fastify = require('fastify')({ logger: true });
const server = (0, fastify_1.default)({});
const opts = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    pong: {
                        type: 'string',
                    },
                },
            },
        },
    },
};
server.get('/ping', opts, () => __awaiter(void 0, void 0, void 0, function* () {
    return { pong: 'it worked' };
}));
// const start = async () => {
//   try {
//     await server.listen({ port: 3000 });
//     // const address = server.server.address();
//     // const port = typeof address === 'string' ? address : address?.port;
//   } catch (err) {
//     server.log.error(err);
//     process.exit(1);
//   }
// };
// start();
server.listen({ port: 8080 }, (err, address) => {
    if (err) {
        console.error(err);
        console.info(address);
        process.exit(1);
    }
    console.info(`Server listening at ${address}`);
});
