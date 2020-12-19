#!/usr/bin/env bash

printf "Building website...\n"
npm run build
printf "...website built.\n"

printf "Creating archive for deployment...\n"
find ./build -name *.map -prune -o -type f -print0 | xargs -0 tar -rf docs.tar
tar -rf docs.tar copydocs.sh
printf "...archive created.\n"

printf "Deploying archive to server...\n"
scp docs.tar $BOS_DEPLOY_CREDENTIAL:
printf "...archive deployed.\n"

printf "Extracting archive on server...\n"
ssh $BOS_DEPLOY_CREDENTIAL "tar -xf docs.tar"
ssh $BOS_DEPLOY_CREDENTIAL "/usr/bin/env bash copydocs.sh"
printf "...archive extracted.\n"

printf "Cleaning up deployment...\n"
ssh $BOS_DEPLOY_CREDENTIAL "rm docs.tar"
ssh $BOS_DEPLOY_CREDENTIAL "rm -r build"
ssh $BOS_DEPLOY_CREDENTIAL "rm copydocs.sh"
rm docs.tar
printf "...deployment cleaned.\n"