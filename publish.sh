#! /bin/bash

OLDVERSION=$(jq -r ".version" package.json | sed 's/^.*-//')
VERSION=$(date +%Y.%m.%d)-$(($OLDVERSION + 1))
jq ".version = \"$VERSION\"" package.json | sponge package.json
git commit package.json -m "$VERSION"
git tag -s -a $VERSION
git push -a
