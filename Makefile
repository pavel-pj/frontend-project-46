lint:
	npx eslint .
test:
	NODE_OPTIONS=--experimental-vm-modules npx jest
test-coverage:
	npm run coverage
diff:
	node bin/gendiff.js __fixtures__/file01.json __fixtures__/file02.json
diff2:
	node bin/gendiff.js __fixtures__/file01.json __fixtures__/file02.json --format plain
diff3:
	node bin/gendiff.js __fixtures__/file01.json __fixtures__/file02.json --format json
install:
	npm ci --legacy-peer-deps