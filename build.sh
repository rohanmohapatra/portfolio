#!/bin/bash

# A simple build script to version static assets.
#
# Usage:
# ./build.sh <version_name>
# Example: ./build.sh v1

# --- Configuration ---
# The main HTML file to process.
SOURCE_HTML="index.html"
# The base directory for all build output.
BUILD_ROOT="build"

# --- Script Logic ---

# 1. Validate Input
# Check if the version name argument is provided. If not, print usage and exit.
if [ -z "$1" ]; then
  echo "Error: No version name supplied."
  echo "Usage: $0 <version_name>"
  exit 1
fi

# 2. Set up variables
VERSION_NAME=$1
TARGET_DIR="$BUILD_ROOT/$VERSION_NAME"
echo "------------------------------------"
echo "Starting build for version: $VERSION_NAME"
echo "Target directory: $TARGET_DIR"
echo "------------------------------------"

# 3. Clean up previous build if it exists
if [ -d "$TARGET_DIR" ]; then
  echo "=> Removing previous build directory: $TARGET_DIR"
  rm -rf "$TARGET_DIR"
fi

# 4. Create the target directory
# The '-p' flag creates parent directories as needed (e.g., 'build').
echo "=> Creating target directory..."
mkdir -p "$TARGET_DIR"


# 5. Rewrite paths in index.html and save to the target directory
echo "=> Rewriting paths in $SOURCE_HTML..."
# This sed command finds specific filenames and prefixes them with the version name.
# -E enables extended regular expressions for the `|` (OR) operator.
# The replacement string `\1/$VERSION_NAME/\2\3` uses backreferences to the captured groups:
# \1 = The opening quote (' or ")
# \2 = The matched filename
# \3 = The closing quote
sed -E "s@([\"'])(service-worker\.js|blog\.json|index\.css)([\"'])@\1/versions/$VERSION_NAME/\2\3@g" "$SOURCE_HTML" > "$TARGET_DIR/index.html"


# 6. Copy all other root asset files to the target directory
echo "=> Copying root asset files..."
for file in *; do
  # We only want to copy files from the root, not directories.
  # Also exclude the source HTML (handled in step 5) and the build script itself.
  if [ -f "$file" ] && [ "$file" != "$SOURCE_HTML" ] && [ "$file" != "build.sh" ]; then
    echo "   - Copying $file"
    cp "$file" "$TARGET_DIR/"
  fi
done


# 7. Copy all asset directories
echo "=> Copying asset directories..."
for item in *; do
  # Check if the item is a directory and not the build output directory itself.
  if [ -d "$item" ] && [ "$item" != "$BUILD_ROOT" ]; then
    echo "   - Copying directory '$item/'"
    cp -r "$item" "$TARGET_DIR/"
  fi
done

echo "------------------------------------"
echo "Build complete!"
echo "Check the output in the '$TARGET_DIR' directory."
echo "------------------------------------"
