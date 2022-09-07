#!/bin/bash

cd ../$1

docker-compose pull && docker-compose up -d
