#!/usr/bin/env bash

# switch to 'main' branch
echo ""
echo "Switching to main-branch (teppichmesser)"
git checkout teppichmesser

echo ""
echo "Fetching and merging upstream"
git fetch upstream
git merge upstream/master

echo ""
echo "--------------------------------------------------------------------"
echo "GIT STATUS:"
git status
echo "--------------------------------------------------------------------"
echo "You'll probably need to fix conflicts and then commit these changes."
echo "After commiting, commit to origin: git push -u origin teppichmesser"
echo "Good luck!"
echo "--------------------------------------------------------------------"

