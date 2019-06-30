#! /bin/bash

set -ex

git diff --exit-code --shortstat
git push --all

OLDVERSION=$(jq -r ".version" package.json | sed 's/^.*-//')
VERSION=$(date +%Y.%m.%d | sed 's/\.0/./')-$(($OLDVERSION + 1))
jq ".version = \"$VERSION\"" package.json | sponge package.json
git commit package.json -m "$VERSION"
git tag -s $VERSION -m $VERSION
git push --tags
