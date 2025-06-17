## Makefile

> Default make command - docker-update

> Default make enviorment - production (`prod`), to change it provide ENV arg, like `make ENV=dev`

| Instruction     | Action                 | Command      |
| --------------- | ---------------------- | ------------ |
| `docker-build`  | Build project          | `build`      |
| `docker-up`     | Up builded project     | `up`         |
| `docker-down`   | Down builded project   | `down`       |
| `docker-update` | Rebuild and up project | `up --build` |

`.vscode/settings.json`:

```json
{
	"prettier.configPath": "configs/prettier.config.cjs",
	"eslint.options": { "overrideConfigFile": "./config/eslint.config.js" },
	"explorer.excludeGitIgnore": true
}
```
