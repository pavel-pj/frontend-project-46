lint:
	npx eslint .
test:
	NODE_OPTIONS=--experimental-vm-modules npx jest
test-coverage:
	npm run coverage
diff:
	node bin/gendiff.js __fixtures__/file1.json __fixtures__/file2.json
diff2:
	node bin/gendiff.js __fixtures__/file1.yml __fixtures__/file2.yml
install:
	npm ci --legacy-peer-deps