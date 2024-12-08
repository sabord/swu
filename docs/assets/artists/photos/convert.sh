#!/bin/bash

# Find all JPG files named "photo*.jpg"
find . -type f -name "photo*.jpg" | while read -r file; do
    # Get the directory
    dir=$(dirname "$file")

    # Rename to "image.jpg"
    mv "$file" "$dir/image.jpg"
    echo "Renamed: $file -> $dir/image.jpg"
done

# Find all PNG files named "photo*.png"
find . -type f -name "photo*.png" | while read -r file; do
    # Get the directory
    dir=$(dirname "$file")

    # Rename to "image.png"
    mv "$file" "$dir/image.png"
    echo "Renamed: $file -> $dir/image.png"
done
