# TypeScript UnitTest
## Setting up the Project
Initialize a new TypeScript project
```
npm init -y
```

Install TypeScript and Jest
```
npm install typescript jest ts-jest @types/jest --save-dev
```

Create a tsconfig.json file
```
npx tsc --init
```

## Start Implementating
- Create a folder named 'src' for source code and 'test' for testing
- Create a file named 'mergeSort.ts' in '/src' with merge function
- Create a file named 'test.ts' in '/test' for the unit tests
- Update 'tsconfig.json' to include the following settings
    ```
    {
    "compilerOptions": {
        "target": "es2016",
        "module": "commonjs", 
        "resolveJsonModule": true,
        "esModuleInterop": true,
        "strict": true,
        }
    }
    ```

- Update package.json to include scripts for testing
    ```
    {
        "scripts": {
        "test": "jest"
        }
    }
    ```
## Changing Test Case in 'test.ts'
Changing Collection arrays
```
const collection_1 = [1, 3, 5];
const collection_2 = [2, 4, 6, 8];
const collection_3 = [13, 12, 11, 10, 9, 7];
```

Changing the manually input Test Case array

```
// Test Case manually sorted
const test1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// Testing the result
expect(result).toEqual(test1);
```

## Running Test Case
```
npm test
```