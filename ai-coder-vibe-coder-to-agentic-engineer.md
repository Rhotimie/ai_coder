# AI Coder: Vibe Coder to Agentic Engineer

**Source:** [edwarddonner.com](https://edwarddonner.com/2026/02/17/ai-coder-vibe-coder-to-agentic-engineer/)  
**Author:** Edward Donner  
**Published:** 2026-02-17

---

*This page contains detailed resources for my AI Coder course. Please keep this to hand as you take the course, as it’s packed with useful info. If anything is missing or needs to be updated, please message me right away on Udemy or at ed@edwarddonner.com.*

#### The course

Legendary AI Scientist Andrej Karpathy, the inventor of the term Vibe Coding, recently made an [infamous tweet about AI Coding](https://x.com/karpathy/status/2004607146781278521). He said that these Coding Agents feel like tools we got from Aliens that come with no manual.

This course is the missing manual!

We go deepest with Claude Code. But we also spend healthy time with Copilot, Cursor, Codex, Antigravity, OpenCode and Amp. Along the way, we cover Skills, MCP, Plugins, Hooks, Subagents, Sandboxes, Swarms and Orchestrators.

And we look at all the stars of the show: Ralph Loops, GSD, Gas Town, OpenClaw, Claude Agent Teams, Claude Agent SDK, sprites.dev and so more.

No matter your background: this course has something for you.

**Never written a line of code?** Prepare to deliver complete products with confidence, learning how to “be the boss” while your Coding Agent does the work.

**You’re a developer?** All levels from junior engineer to architect will love this journey. I’ll show you how to have a legion of coders working tirelessly for you. I’ll show you how to stop LLM slop. Most importantly, I’ll show you how to keep the enjoyment of coding. It’s a new way of working, but it can still be just as fun – if not more so.

#### Major Links

- My [complete curriculum](https://edwarddonner.com/curriculum/) including a link to this course
- The [slides for the course](https://drive.google.com/drive/folders/1vvp15mK3ZXDfY8HE4g-tlF2CTfBfSDQ8?usp=sharing)
- The [Directory of Proficient AI Engineers](https://edwarddonner.com/proficient/)
- My [digital twin](https://edwarddonner.com/avatar/) that can answer questions on the courses

#### Detailed course resources – please keep to hand

##### A note on costs and quotas: paying for models gives a better experience but is not required

For more on quotas and using free models, please see Q52 and Q53 at the FAQ here: [https://edwarddonner.com/faq](https://edwarddonner.com/faq)

##### Week 1 – and see important note on the new Cursor splash screen

**Week 1 Day 1**

The seminal tweet that started it all. [“There’s a new kind of coding I call Vibe Coding”](https://x.com/karpathy/status/1886192184808149383) from Andrej Karpathy.

Here’s the [link to Cursor](https://cursor.com/) – click Download on the top right.
**IMPORTANT:** Cursor has decided to bring up their new ‘Agents’ splash screen as the default screen for new installations because they’re trying to promote it. I hope they stop doing this! To bring up the usual Cursor screen, do Ctrl+Shift+N (Windows) or Command+Shift+N (Mac). [More in the FAQ here](https://edwarddonner.com/avatar?q=54).

The first instructions could be something like this:

```

Please build a website for a simple 3D 1st person shooter game in an arena against 1 computer opponent controlled by arrow keys and space bar to shoot
```

If Cursor struggles with this, you could try adding a hint “using three.js” to the end of that prompt, which makes the task easier. If Cursor still struggles, try simplifying to a basic request for this first example:

```

Please build a website for a simple retro pong game against 1 computer opponent controlled by arrow keys.
```

**Week 1 Day 3First up – installing Git**

First things first: when you first open up a terminal in Cursor, try running this command: `git --version` and you should see a version number. If not, you’d need to install git.

If you’re not familiar with Git — it’s a tool that organizes versions of code on your computer, written by Linus Torvalds, the creator of Linux. You can install it by following the instructions here:
[https://git-scm.com/install/](https://git-scm.com/install/)
For Windows people, I recommend the ‘standalone installer’ unless you’re familiar with the other approaches.
You might need to restart your computer after installing git.

If you’re not familiar with the difference between Git and GitHub, please see [this guide](https://chatgpt.com/share/68061486-08b8-8012-97bc-3264ad5ebcd4). For instructions on everyday Git activities, just ask your Coding Agent! If you’d like a comprehensive briefing on git, then here is an incredible online [Git book by the entertaining and engaging writer Beej](https://beej.us/guide/bggit/).

**And now – installing Node**

From the Terminal, if you do `node --version` you should get a number like v22 or later. If not, then you’d need to install node. You can install it here:
[https://nodejs.org/en/download](https://nodejs.org/en/download)
On Windows, I recommend using the Windows Installer (listed further down on the screen) unless you’re familiar with the other approaches.
You might need to restart your computer after installing node.

**Finally – cloning the repo**

Once you have git and node installed, then from a terminal, navigate to your projects directory. If you run the command `pwd` then you should see something like **C:\Users\username\projects** on a PC or **/Users/username/projects **on a Mac. Then run this command to clone the repo (copy everything on to your computer):

`git clone https://github.com/ed-donner/kanban.git`

If you run out of quota in Cursor, please check out Q53 [here](https://edwarddonner.com/faq). If you have difficulties getting smaller models to perform, then simplify the task: start with a todo list. Then put it in columns. Then add drag and drop. Try taking it a small step at a time.

**Links to the Coding Agent IDEs we will use**

Here they are:
[VS Code](https://code.visualstudio.com/)
[Github Copilot in VS Code](https://github.com/features/copilot/ai-code-editor) (NOTE: the extension has been renamed to Github Copilot Chat)
OpenAI Codex is via the Extensions marketplace in VS Code
[Google Antigravity](https://antigravity.google/)

Like Cursor, Antigravity has added a new Splash Screen in front of their IDE code environment. To go into the IDE, click the button “Open IDE” which for me is on the top right. Let me know if that doesn’t work for you.

![](https://i0.wp.com/edwarddonner.com/wp-content/uploads/2026/02/antigravity_openide.jpg?resize=1024%2C641&ssl=1)
Screenshot

**Week 1 Day 4**
[How AI Assistance impacts the performance of Coding Skills](https://www.anthropic.com/research/AI-assistance-coding-skills) – an honest and important take from Anthropic

[LLM Development Policy from Jellyfin](https://jellyfin.org/docs/general/contributing/llm-policies/) – a well-written rules-of-the-road

**Week 1 Day 5**
Here is the installation for Docker Desktop:
[https://docs.docker.com/get-started/get-docker/](https://docs.docker.com/get-started/get-docker/)
For Windows, be sure to pick “WSL2 backend” rather than “Hyper-V backend”
For the git clone command:
`git clone https://github.com/ed-donner/pm.git`
This will give you the original code at the start of the project. If you’d then like to switch to the version of the code before I kick off YOLO, then run this from the project root (the “pm” folder):
`git checkout before_yolo`
And now you will have the same version of code as me before I kick it all off!

##### Week 2

The post [coining the term Vibe Engineering](https://simonwillison.net/2025/Oct/7/vibe-engineering/) from the always-brilliant Simon Willison.

To install Ollama for local models, click the Download on the top right here: [https://ollama.com/](https://ollama.com/)

**Using free and cheap models with Claude Code**

This demonstrates an easier way to use Claude Code with free and cheap models:

But here are instructions for the more detailed ways that we do it on the course:

(a) How to configure Claude Code for Kimi K2.5 via OpenRouter on a Mac. A pro-tip to keep in mind: if you get rate limits using free models on OpenRouter, you can pick the model `"openrouter/free"` as described [here](https://openrouter.ai/openrouter/free) to be automatically routed to a working free model.

```
export ANTHROPIC_DEFAULT_HAIKU_MODEL="moonshotai/kimi-k2.5"
export ANTHROPIC_DEFAULT_SONNET_MODEL="moonshotai/kimi-k2.5"
export ANTHROPIC_DEFAULT_OPUS_MODEL="moonshotai/kimi-k2.5"
export ANTHROPIC_BASE_URL="https://openrouter.ai/api"
export ANTHROPIC_AUTH_TOKEN="PUT YOUR OPENROUTER KEY HERE"
export ANTHROPIC_API_KEY=""
claude --model moonshotai/kimi-k2.5
```

```
export ANTHROPIC_DEFAULT_HAIKU_MODEL="moonshotai/kimi-k2.5"
export ANTHROPIC_DEFAULT_SONNET_MODEL="moonshotai/kimi-k2.5"
export ANTHROPIC_DEFAULT_OPUS_MODEL="moonshotai/kimi-k2.5"
export ANTHROPIC_BASE_URL="https://openrouter.ai/api"
export ANTHROPIC_AUTH_TOKEN="PUT YOUR OPENROUTER KEY HERE"
export ANTHROPIC_API_KEY=""
claude --model moonshotai/kimi-k2.5
```

(b) How to configure Claude Code for GPT-OSS 20B via Ollama on a Mac:

```
export ANTHROPIC_DEFAULT_HAIKU_MODEL="gpt-oss"
export ANTHROPIC_DEFAULT_SONNET_MODEL="gpt-oss"
export ANTHROPIC_DEFAULT_OPUS_MODEL="gpt-oss"
export ANTHROPIC_BASE_URL="http://localhost:11434"
export ANTHROPIC_AUTH_TOKEN="ollama"
export ANTHROPIC_API_KEY=""
ollama pull gpt-oss
claude --model gpt-oss
```

```
export ANTHROPIC_DEFAULT_HAIKU_MODEL="gpt-oss"
export ANTHROPIC_DEFAULT_SONNET_MODEL="gpt-oss"
export ANTHROPIC_DEFAULT_OPUS_MODEL="gpt-oss"
export ANTHROPIC_BASE_URL="http://localhost:11434"
export ANTHROPIC_AUTH_TOKEN="ollama"
export ANTHROPIC_API_KEY=""
ollama pull gpt-oss
claude --model gpt-oss
```

(c) How to configure Claude Code for Kimi K2.5 via OpenRouter on a Windows PC:

```
$env:ANTHROPIC_DEFAULT_HAIKU_MODEL="moonshotai/kimi-k2.5"
$env:ANTHROPIC_DEFAULT_SONNET_MODEL="moonshotai/kimi-k2.5"
$env:ANTHROPIC_DEFAULT_OPUS_MODEL="moonshotai/kimi-k2.5"
$env:ANTHROPIC_BASE_URL="https://openrouter.ai/api"
$env:ANTHROPIC_AUTH_TOKEN="PUT YOUR OPENROUTER KEY HERE"
$env:ANTHROPIC_API_KEY=""
claude --model moonshotai/kimi-k2.5
```

```
$env:ANTHROPIC_DEFAULT_HAIKU_MODEL="moonshotai/kimi-k2.5"
$env:ANTHROPIC_DEFAULT_SONNET_MODEL="moonshotai/kimi-k2.5"
$env:ANTHROPIC_DEFAULT_OPUS_MODEL="moonshotai/kimi-k2.5"
$env:ANTHROPIC_BASE_URL="https://openrouter.ai/api"
$env:ANTHROPIC_AUTH_TOKEN="PUT YOUR OPENROUTER KEY HERE"
$env:ANTHROPIC_API_KEY=""
claude --model moonshotai/kimi-k2.5
```

(d) How to configure Claude Code for GPT-OSS 20B via Ollama on a Windows PC:

```
$env:ANTHROPIC_DEFAULT_HAIKU_MODEL="gpt-oss"
$env:ANTHROPIC_DEFAULT_SONNET_MODEL="gpt-oss"
$env:ANTHROPIC_DEFAULT_OPUS_MODEL="gpt-oss"
$env:ANTHROPIC_BASE_URL="http://localhost:11434"
$env:ANTHROPIC_AUTH_TOKEN="ollama"
$env:ANTHROPIC_API_KEY=""
ollama pull gpt-oss
claude --model gpt-oss
```

```
$env:ANTHROPIC_DEFAULT_HAIKU_MODEL="gpt-oss"
$env:ANTHROPIC_DEFAULT_SONNET_MODEL="gpt-oss"
$env:ANTHROPIC_DEFAULT_OPUS_MODEL="gpt-oss"
$env:ANTHROPIC_BASE_URL="http://localhost:11434"
$env:ANTHROPIC_AUTH_TOKEN="ollama"
$env:ANTHROPIC_API_KEY=""
ollama pull gpt-oss
claude --model gpt-oss
```

A link to OpenCode: [https://opencode.ai/](https://opencode.ai/)
A link to Amp: [https://ampcode.com/](https://ampcode.com/)
(unfortunately as of March 2026 Amp have paused their free daily allowance.. hopefully they will bring this back).
Instead of Amp Code, consider using Pi, a very popular and lightweight coding agent. Here I demonstrate it with GLM-5.2 and DeepSeek V4 Pro.

**Week 2 Day 2**

The best way to get a list of Slash Commands is to type “/” in Claude Code and read the instant instructions!

Keyboard shortcuts:
Shift+tab: alternate between the modes
Ctrl+o: detailed outputs
Ctrl+c twice: exit
Esc twice: rewind

For Ralph Loops, one Windows user mentioned that you might need to install this package for the Ralph Loop plugin to work `winget install jqlang.jq` otherwise Ralph Loops on Windows sometimes only does 1 iteration and then stops.. which defeats the purpose a bit!

**Week 2 Day 3**

Link to the mcp marketplaces:
[https://glama.ai](https://glama.ai)
[https://mcp.so](https://mcp.so)
[https://smithery.ai](https://smithery.ai)

To add the context7 MCP Server:
`claude mcp add context7 -- npx -y @upstash/context7-mcp`

Then, to add the Massive (formerly Polygon.io) MCP Server, remembering to use your API key:
`claude mcp add massive -e MASSIVE_API_KEY=your_api_key_here -- uvx --from git+https://github.com/massive-com/mcp_massive@v0.6.0 mcp_massive`

To remove an MCP server, use the slash command /mcp, or:
`claude mcp remove context7`

For the Skills marketplace: [https://skills.sh](https://skills.sh)

To install the brilliant Agent Browser skill:

```
npm install -g agent-browser
agent-browser install
npx skills add https://github.com/vercel-labs/agent-browser --skill agent-browser
```

```
npm install -g agent-browser
agent-browser install
npx skills add https://github.com/vercel-labs/agent-browser --skill agent-browser
```

**Week 2 Day 4**

Adding the Github Remote MCP Server, substituting in your Access Token where it says YOUR_GITHUB_PAT:
**`
claude mcp add --transport http github https://api.githubcopilot.com/mcp --header "Authorization: Bearer YOUR_GITHUB_PAT`"``**

Adding the Atlassian Jira Remote MCP Server:
`claude mcp add --transport http atlassian [https://mcp.atlassian.com/v1/mcp](https://mcp.atlassian.com/v1/mcp)`

Link to Jira to set up your account: [https://www.atlassian.com/software/jira](https://www.atlassian.com/software/jira)

**Week 2 Days 4 and 5:**

Link to the Jira Tickets that we will use this week (this is also within the Slides folder linked at the top of this doc):
[https://docs.google.com/document/d/1KlQvrpffoLe6wynfA3WhqnMdjMQdT0B6Y3_awlAnazQ/edit?usp=sharing](https://docs.google.com/document/d/1KlQvrpffoLe6wynfA3WhqnMdjMQdT0B6Y3_awlAnazQ/edit?usp=sharing)

Note that my CLAUDE.md hard codes the names of the jira tickets (like PL-1); if you use different ticket names, you may need to edit CLAUDE.md or ask Claude to.

Here is the repo with my full solution. You can take the Cerebras Skill from the .claude directory here, and anything else you’d like, otherwise start from scratch! If you come up with great instructions or skills, I’d love it if you submitted a PR in the community_contributions folder with your suggestions.

Repo: [https://github.com/ed-donner/prelegal.git](https://github.com/ed-donner/prelegal.git)
To clone: `git clone https://github.com/ed-donner/prelegal.git`

##### Week 3

**Week 3 Day 1**

Install Codex CLI here: [https://developers.openai.com/codex/cli/](https://developers.openai.com/codex/cli/)

Claude Code advanced features docs are here: [https://code.claude.com/docs/en/sub-agents](https://code.claude.com/docs/en/sub-agents)

The FinAlly project is here: [https://github.com/ed-donner/finally](https://github.com/ed-donner/finally)
Clone it with this: `git clone https://github.com/ed-donner/finally`
And after you’ve cloned it, you can use the command “git checkout” to switch between different versions, based on how much you’d like to try yourself.

To switch to the version of code with PLAN.md written, and hooks and sub-agents defined but Market Data not yet created: `git checkout start`

To switch to the version of code with Market Data components created at the end of Week 3 Day 1: **`git checkout main`Week 3 Day 2**

Important note: when you get to Approach 4 (GitHub app) I missed a step in the video. See my note in Bold below, and thank you student K. for pointing this out!

The 5 approaches to running Claude Code remotely:
Approach 1: Use & before a prompt in Claude Code
Approach 2: Use claude –remote
Approach 3: Use Claude Code on the web: [https://claude.ai/code](https://claude.ai/code) and on your mobile using the Claude app
Approach 4: Install the Github app, go through the very strange authentication flow and add the GitHub Actions, and then tag Claude with @claude in a Github issue. **But to use GitHub App, you do first need to “fork the repo” and work with your fork instead – I may have missed this in the video! Instructionsin the next section.**
Approach 5: use a third party sandbox: the wonderful [https://sprites.dev/](https://sprites.dev/) from fly.io

If you’re doing Approach 4, here are instructions to “fork the repo”. To use the GitHub app, you need to have your own version of finally in your repo, rather than be using mine:

1. Go to: [https://github.com/ed-donner/finally](https://github.com/ed-donner/finally)
2. Click “Fork” near the top right; this gives you your own version of the repo
3. Visit your version of the repo at: [https://github.com/](https://github.com/)**your-username**/finally
4. Go to “Settings” in the main navigation menu at the top – this is the repo settings. Note: this is not the same as the Settings in your Avatar menu – that’s your overall Github Settings, which is different
5. Scroll down the Settings and under “Features” ensure that “Issues” is checked
6. Also enable GitHub Actions / the Claude workflow (Actions -> Enable workflows)
7. And now in your local finally directory, tell git to use your fork instead of my repo by running this:
`git remote set-url origin https://github.com/your-username/finally.git`

This will now give you a separate repo to push and pull from, so you can install your own Github apps on it and use it independently of my repo. Thanks and sorry to miss this on the video..

**Week 3 Day 3**

If you’d like to go deeper on applying Claude Code to large codebases:

Link to Claude Agent SDK: [https://platform.claude.com/docs/en/agent-sdk/overview](https://platform.claude.com/docs/en/agent-sdk/overview)
Link to Cowork: [https://claude.com/product/cowork](https://claude.com/product/cowork)
Link to OpenClaw: [https://openclaw.ai/](https://openclaw.ai/)

**Week 3 Days 4 and 5**

Link to Claude Agent Teams: [https://code.claude.com/docs/en/agent-teams](https://code.claude.com/docs/en/agent-teams)
Link to GSD: IMPORTANT this has moved to a new location after some fallout with the original author; the community supported version is here: [https://github.com/open-gsd/gsd-core](https://github.com/open-gsd/gsd-core)
If you decide to run GSD in YOLO mode, consider using sprites.dev from Week 3 Day 2.

The FinAlly project is here: [https://github.com/ed-donner/finally](https://github.com/ed-donner/finally)
Clone it with this: `git clone https://github.com/ed-donner/finally`
And after you’ve cloned it you can switch to different versions:

| **COMMAND** | **WHAT YOU GET** |
|---|---|
| `git checkout start` | The PLAN.md, the sub-agent and hook definitions, but no Market Data code; start of Week 3 Day 1 |
| `git checkout main` | The Market Data components built but nothing else; start of Week 3 Day 4 |
| `git checkout agent-teams` | The version built by Claude Code Agent-Teams |
| `git checkout finally-gsd` | The version built by Claude Code + GSD (in 5 hours!) |
| `git checkout codex` | In Week 3 Day 5: the version built by Codex –yolo with subagents, with assistance from Claude Code, and deployed to fly.io, live market data |

**VERY OPTIONAL EXTRA if you don’t mind some chaos: Gas Town!**

Here are the instructions for Gas Town setup: [https://github.com/steveyegge/gastown](https://github.com/steveyegge/gastown)

And I put this in a separate repo:
The fin repo is here: [https://github.com/ed-donner/fin](https://github.com/ed-donner/fin)

In this repo:

| **COMMAND** | **WHAT YOU GET** |
|---|---|
| `git checkout start` | The initial setup before unleashing |
| `git checkout main` | The final product from my run |

**ANOTHER OPTIONAL EXTRA – using tmux**

If you want to try the tmux way of using Claude Agent Teams, you need to be either on a Mac, or on WSL2, or Linux (perhaps through the amazing sprites.dev). Be sure that tmux is installed: [https://github.com/tmux/tmux/wiki/Installing](https://github.com/tmux/tmux/wiki/Installing)

And then to create a new tmux session called quad: `tmux new -s "quad"`

To list all tmux sessions: `tmux ls`

To reattach to an existing session: `tmux attach -t "quad"`

To move around: Ctrl+b and then an arrow key.

Here’s a cool view of Claude Agent Teams in action with the screen automatically split into tmux sessions, with the manager on the left, and a Backend Engineer, Devops Engineer and Frontend Engineer on the right.

![](https://i0.wp.com/edwarddonner.com/wp-content/uploads/2026/02/tmux_agent_teams.png?resize=1024%2C469&ssl=1)

##### The latest features from Claude Code and other Coding Agents

Here’s my ongoing playlist with more features from Claude Code and the others; please take a look here. If you enjoy the videos, please like and subscribe – that’s how I know you’d like more of them!
