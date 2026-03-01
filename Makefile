.PHONY: all build clean archive

all: build

build:
	mkdir -p build
	hetu compile src/plugin.ht build/plugin.out

archive:
	mkdir -p build/archive
	cp plugin.json build/plugin.out build/archive/
	cd build/archive && zip -r ../plugin.smplug .
	mv build/plugin.smplug ./plugin.smplug

clean:
	rm -f *.smplug
	rm -rf build
