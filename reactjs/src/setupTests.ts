// Imports at the top of the file to satisfy ESLint import order
import '@testing-library/jest-dom';

// Polyfills for Node.js modules in Jest environment
import { Buffer } from 'buffer';
import crypto from 'crypto-browserify';
import stream from 'stream-browserify';
import vm from 'vm-browserify';

// Assigning polyfills to the global object
global.Buffer = Buffer;
global.crypto = crypto;
(global as any).stream = stream;
(global as any).vm = vm;
