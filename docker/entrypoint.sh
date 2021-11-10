#!/bin/sh

# Ensure we kill the service if migration fails
set -e

# Deploy and seed the db
npx prisma migrate deploy
npx prisma db seed

yarn start
 