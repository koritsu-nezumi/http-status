# http-status
A framework-free TypeScript library with HTTP status codes as constants, each with descriptions and references. Ideal for consistent, dependency-free HTTP handling.

## Usage

```typescript
import * as HTTPStatus from "./http-status";
```

My personal use:

```typescript
new Response(body, {
  /* other data */
  ...HTTPStatus.CREATED // add it at the end to avoid overwritting
});
```

### Developer Experience

![0001-http-status-showcase](https://github.com/koritsu-nezumi/http-status/blob/main/0001-http-status-showcase.png?raw=true)

_The first image shows that HTTPStatus contains all the constants exported by the module._

![0002-http-status-showcase](https://github.com/koritsu-nezumi/http-status/blob/main/0002-http-status-showcase.png?raw=true)

_The second image demonstrates that the constants are well-documented, displaying their content thanks to type inference. This provides a pleasant development experience, making it easy to understand and use the available HTTP status codes._
