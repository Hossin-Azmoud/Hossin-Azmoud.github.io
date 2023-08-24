set -ex
npm run gh-pages
mv ./build ..
git checkout gh-pages
mv ../build/* .
git add .
git commit -m "Deploying Site. (build.sh)"
echo "BUILD WAS COMMITTED"
git push origin gh-pages
echo "BUILD WAS PUSHED"
git checkout main
