## Makefile

> Default make command - docker-update

> Default make enviorment - production (`prod`), to change it provide ENV arg, like `make ENV=dev`

| Instruction     | Action                 | Command      |
| --------------- | ---------------------- | ------------ |
| `docker-build`  | Build project          | `build`      |
| `docker-up`     | Up builded project     | `up`         |
| `docker-down`   | Down builded project   | `down`       |
| `docker-update` | Rebuild and up project | `up --build` |

## To make the project work fine in the dev enviorment

**Either**

Create `tsconfig.json` in the root dir with following content:

```json
{
	"files": [],
	"references": [{ "path": "./configs/tsconfig.json" }],
	"compilerOptions": {
		"baseUrl": ".",
		"paths": { "@/*": ["src/*"] },
		"rootDir": "src",
		"outDir": "dist"
	}
}
```

**Or**

Uncomment these lines in `./docker/dev/docker-compose`:

```
	# volumes:
    #   - /app/node_modules/
    #   - ../../src/:/app/src/
```
