lint:
	npx eslint .
test:
	NODE_OPTIONS=--experimental-vm-modules npx jest
test-coverage:
	npm run coverage
diff:
	node bin/gendiff.js __fixtures__/file1.json __fixtures__/file2.json
