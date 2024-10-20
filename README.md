# SST PostgreSQL Sample

This is a sample for easily building a simple app (infrastructure) using Next.js and PostgreSQL on AWS with SST.

## Overview

- sst
- Next.js
- PostgreSQL
- Drizzle ORM

## Requirements

- AWS
  - https://sst.dev/docs/aws-accounts
- Node.js (npm)
- sst
  - Automatically installed with `npx sst ...` command

## Setup

```
npm i
sudo npx sst tunnel install
```

`npx sst tunnel install` is a script that installs the network interface needed to tunnel to an RDS within a VPC. Therefore, `sudo` is required.

## Start dev mode

```
npm run sst:dev
```

## Deploy

```
npm run sst:deploy
```

You can view the output at http://localhost:3000.
Additionally, you can use Drizzle Studio at https://local.drizzle.studio.

## See more

https://sst.dev/docs/start/aws/drizzle
