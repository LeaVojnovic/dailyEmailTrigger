# dailyEmailTrigger

TypeScript-based automation for processing incoming emails and handling attachments through scheduled/serverless execution.

## Authors

- [Lea Vojnovic](https://github.com/LeaVojnovic) — Co-author
- [Karlo Lerga](https://github.com/KarloLerga) — Co-author

## Overview

`dailyEmailTrigger` is a backend automation project that covers a common document-ingestion flow:

1. detect incoming email events,
2. extract attachments,
3. normalize metadata (e.g. sender/alias/file name),
4. persist files for downstream processing,
5. trigger additional integration steps through API calls.

The project was developed as hands-on practice for cloud-based integration workflows, with emphasis on reliability and maintainability.

## Technical Background

The implementation is centered around:

- **TypeScript** as the primary language
- **Azure Functions / serverless execution model**
- **Email + attachment processing pipeline**
- **Environment-based configuration (`.env`)**
- **React Email tooling** for email-related rendering/composition utilities (where needed)

During development, the focus was on solving practical workflow problems such as:

- reliable trigger-based processing,
- handling multiple attachments per message,
- preserving attachment identity through the pipeline,
- avoiding filename collisions,
- preparing metadata for external service/API integration.

## Architecture (High-Level)

A simplified flow:

1. **Trigger layer**  
   Time/event-driven execution starts the processing run.

2. **Email processing layer**  
   Incoming message data is read and relevant fields are extracted.

3. **Attachment handling layer**  
   Attachments are parsed and prepared for storage/forwarding.

4. **Integration layer**  
   Processed data can be sent to downstream APIs/services.

5. **Operational concerns**  
   Configuration via environment variables, plus build/run scripts for local and cloud execution.

## Project Context

This repository was created as part of professional practice work focused on real-world cloud integration scenarios.

## Prerequisites

- Node.js (LTS recommended)
- npm
- Azure Functions Core Tools (for local function runtime)
- VS Code (recommended)

## Recommended VS Code Extensions

- Azurite
- Azure Tools

## Installation

```bash
npm install
```

## Dependencies

```bash
npm install @azure/communication-email
npm install @azure/functions
npm install @react-email/components
npm install @react-email/render
npm install dotenv
npm install react
npm install react-dom
```

## Dev Dependencies

```bash
npm install -D typescript
npm install -D ts-node
npm install -D esbuild
npm install -D @types/react
```

## Running the Project

### Preferred script

```bash
npm run azure
```

### Alternative manual run

```bash
npm run build
func start
```

## Environment Variables

Create a `.env` file in the project root and configure required values, for example:

```env
COMMUNICATION_SERVICES_CONNECTION_STRING=<your_connection_string>
```

Add any additional environment values required by your local/cloud setup.
