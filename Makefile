.PHONY: all build clean archive

all: build

build:
	dart pub global run hetu_script_dev_tools:hetu build

archive:
	mkdir -p build
	cp *.smplug build/plugin.smplug

clean:
	rm -f *.smplug
	rm -rf build
