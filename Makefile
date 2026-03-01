.PHONY: all build clean archive

all: build

build:
	hetu build

archive:
	mkdir -p build
	cp *.smplug build/plugin.smplug

clean:
	rm -f *.smplug
	rm -rf build
