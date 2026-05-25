# AI Chatbot Contact Center Suite Backend

This folder exposes the backend surface for the merged suite.

The current runtime is a Next.js full-stack app, so API handlers execute from `frontend/src/app/api` and server libraries execute from `frontend/src/lib`. To avoid duplicate backend code drifting out of sync, this folder maps those backend sources into a dedicated backend location:

- `backend/src/api` -> `../frontend/src/app/api`
- `backend/src/lib` -> `../frontend/src/lib`

Operationally, `../start.sh` starts the working full-stack app on port 5203. This backend folder is the stable backend ownership boundary for future extraction to a standalone API service.
