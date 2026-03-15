#!/usr/bin/env bash

set -euo pipefail

PORT="${PORT:-3100}"
PID_FILE="/tmp/tessart-local-${PORT}.pid"
LOG_FILE="/tmp/tessart-local-${PORT}.log"

start() {
  echo "Building project..."
  npm run build >/dev/null

  echo "Starting Next.js on http://localhost:${PORT}"
  nohup npm run start -- -p "${PORT}" >"${LOG_FILE}" 2>&1 &
  echo $! > "${PID_FILE}"
  sleep 1

  if lsof -tiTCP:"${PORT}" -sTCP:LISTEN >/dev/null; then
    echo "Started. URL: http://localhost:${PORT}"
    echo "Log: ${LOG_FILE}"
  else
    echo "Failed to start. Check log: ${LOG_FILE}"
    exit 1
  fi
}

stop() {
  if lsof -tiTCP:"${PORT}" -sTCP:LISTEN >/dev/null; then
    lsof -tiTCP:"${PORT}" -sTCP:LISTEN | xargs kill
    echo "Stopped server on port ${PORT}"
  else
    echo "No server running on port ${PORT}"
  fi
}

status() {
  if lsof -tiTCP:"${PORT}" -sTCP:LISTEN >/dev/null; then
    echo "RUNNING on http://localhost:${PORT}"
  else
    echo "STOPPED on port ${PORT}"
  fi
}

case "${1:-}" in
  start) start ;;
  stop) stop ;;
  restart) stop; start ;;
  status) status ;;
  *)
    echo "Usage: $0 {start|stop|restart|status}"
    exit 1
    ;;
esac

