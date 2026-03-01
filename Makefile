.PHONY: all build clean archive

all: build

build:
	zip -r plugin.smplug src plugin.json LICENSE README.md

archive:
	mkdir -p build
	cp plugin.smplug build/plugin.smplug

clean:
	rm -f *.smplug
	rm -rf build
