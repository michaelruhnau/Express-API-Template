import dotenv from 'dotenv';
dotenv.config();
const var1 = process.env.TEST_ENV_VARIABLE;
console.log(var1);
console.log(process.env.TEST_ENV_VARIABLE);
export const testEnvironmentVariable = var1;