# AI Context Packs for @n3wth/kit

Structured context files that help AI coding assistants understand the @n3wth/kit component registry.

## Files

| File | Purpose | Target |
|---|---|---|
| `.cursorrules` | Natural language instructions and component catalog | Cursor AI |
| `CLAUDE.md` | Component API reference with props and patterns | Claude Code |
| `mcp.json` | MCP server config for shadcn registry access | Any MCP client |
| `components.json` | Structured JSON with every component's props, usage, and a11y notes | Programmatic / any AI |

## Setup

### Cursor
Copy `.cursorrules` to your project root:
```bash
cp ai/.cursorrules .cursorrules
```

### Claude Code
Copy `CLAUDE.md` to your project root:
```bash
cp ai/CLAUDE.md CLAUDE.md
```

### MCP (Cursor or Claude Code)
Copy `mcp.json` to your editor config directory:
```bash
# Cursor
cp ai/mcp.json .cursor/mcp.json

# Claude Code
cp ai/mcp.json .claude/mcp.json
```

The MCP server provides direct registry access, letting the AI install and inspect components from the registry.

### Programmatic
Use `components.json` directly for custom tooling or AI pipelines. It contains structured prop types, usage examples, and accessibility notes for every component.
