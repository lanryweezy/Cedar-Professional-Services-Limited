import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const extensions = ['.ts', '.tsx', '.js', '.jsx'];
const dirsToCheck = ['.', 'components', 'pages', 'data'];

function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath, { withFileTypes: true });

    arrayOfFiles = arrayOfFiles || [];

    files.forEach((file) => {
        if (file.isDirectory()) {
            if (file.name !== 'node_modules' && file.name !== '.git' && file.name !== 'dist') {
                arrayOfFiles = getAllFiles(path.join(dirPath, file.name), arrayOfFiles);
            }
        } else {
            if (extensions.includes(path.extname(file.name))) {
                arrayOfFiles.push(path.join(dirPath, file.name));
            }
        }
    });

    return arrayOfFiles;
}

function getActualFilename(filePath) {
    const dir = path.dirname(filePath);
    const file = path.basename(filePath);

    try {
        const files = fs.readdirSync(dir);
        const found = files.find(f => f.toLowerCase() === file.toLowerCase());
        return found ? path.join(dir, found) : null;
    } catch (e) {
        return null;
    }
}

function checkImports() {
    const allFiles = getAllFiles(rootDir, []);
    let issuesFound = false;

    console.log(`Scanning ${allFiles.length} files...`);

    allFiles.forEach((filePath) => {
        const content = fs.readFileSync(filePath, 'utf-8');
        const importRegex = /from\s+['"]([^'"]+)['"]/g;
        let match;

        while ((match = importRegex.exec(content)) !== null) {
            const importPath = match[1];

            if (importPath.startsWith('.')) {
                const absoluteImportPath = path.resolve(path.dirname(filePath), importPath);

                // Try with extensions
                let resolvedPath = null;
                for (const ext of ['', ...extensions]) {
                    const tryPath = absoluteImportPath + ext;
                    if (fs.existsSync(tryPath)) {
                        resolvedPath = tryPath;
                        break;
                    }
                }

                // Try as directory index
                if (!resolvedPath) {
                    for (const ext of extensions) {
                        const tryPath = path.join(absoluteImportPath, 'index' + ext);
                        if (fs.existsSync(tryPath)) {
                            resolvedPath = tryPath;
                            break;
                        }
                    }
                }

                if (resolvedPath) {
                    const actualPath = getActualFilename(resolvedPath);
                    // We need to verify each segment of the path, but checking the filename is a good start. 
                    // Better: Compare resolvedPath (which uses OS casing) with what's on disk. 
                    // Wait, fs.existsSync and path.resolve follow input casing mostly or normalize?
                    // Windows preserves case but is case insensitive.

                    // To be sure, let's just check the basename of the file matches exactly.
                    // A full path walking check would be better but this catches most import "File" from "./file" errors.

                    const contentBaseName = path.basename(resolvedPath);
                    const actualBaseName = path.basename(actualPath);

                    if (contentBaseName !== actualBaseName) {
                        console.error(`[CASE MISMATCH] In ${path.relative(rootDir, filePath)}:`);
                        console.error(`  Imported: ${importPath}`);
                        console.error(`  Expected: ...${path.sep}${contentBaseName}`);
                        console.error(`  Actual:   ...${path.sep}${actualBaseName}`);
                        issuesFound = true;
                    }
                }
            }
        }
    });

    if (!issuesFound) {
        console.log("No casing issues found in relative imports.");
    } else {
        console.log("Casing issues found. These will break Linux builds.");
    }
}

checkImports();
