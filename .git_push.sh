git checkout main
git pull
echo '\x1b[36mコミットメッセージを入力しEnterキーを押してください\x1b[0m'
read -p '> ' line
git add .
git commit -m "yarn commit: ${line}"
git push origin main

cd src/ui
git pull
git add .
git commit -m "yarn commit: ${line}"
git push origin main
