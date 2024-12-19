# Node.js Missing Content-Length Header Bug

This repository demonstrates a common bug in Node.js HTTP servers where the `Content-Length` header is missing from the response.  This can cause issues when sending large files, leading to incomplete downloads or connection errors.

## Bug Description

The bug is caused by not setting the `Content-Length` header in the HTTP response.  When sending large files, the client might not know when to expect the entire response, resulting in incomplete downloads or connection timeouts.

## How to Reproduce

1. Clone this repository.
2. Run `node bug.js`.
3. Use a tool like `curl` or a browser to make a request to `http://localhost:3000/`.  You might observe incomplete responses for large payloads.

## Solution

The solution is to explicitly set the `Content-Length` header in the response.  This tells the client the exact size of the response body, enabling it to handle the download correctly.  See `bugSolution.js` for the corrected code.