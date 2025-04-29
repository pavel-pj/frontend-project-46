lint:
	npx eslint .
test:
	NODE_OPTIONS=--experimental-vm-modules npx jest
test-coverage:
	NODE_OPTIONS=--experimental-vm-modules npm run coverage
diff:
	gendiff __fixtures__/file01.json __fixtures__/file02.json
diffy:
	gendiff __fixtures__/file01.yml __fixtures__/file02.yml
diff2:
	gendiff __fixtures__/file01.json __fixtures__/file02.json --format plain
diff3:
	gendiff __fixtures__/file01.json __fixtures__/file02.json --format json
install:
	npm ci --legacy-peer-deps