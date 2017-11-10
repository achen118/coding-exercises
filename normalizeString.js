/*
Please write a method to normalize a string which represents a file path.


For the purposes of this question, normalizing means:
- All single dot components of the path must be removed. For example, "foo/./bar" should be normalized to "foo/bar".
- All double dot components of the path must be removed, along with their parent directory. For example, "foo/bar/../baz" should be normalized to "foo/baz".
- For any paths starting with ".." string, assume you are in the root directory. For example, "../foo/bar" normalizes to "/foo/bar".
*/

// -------------------------------------------

// 1. Single dot: remove dot, remove one of the slashes
//        single at start of path: remove dot, keep the slash
// 2. Double dot within a path: remove two dots, remove one of the slashes and previous directory
// 3. Double dot at start of path: remove two dots, keep the slash


// Ex:
// "foo/bar/../baz"



function normalizeString(path) {
    
    let directories = path.split("/");
    // ["foo", "bar", "..", "baz"]
    let i = directories.length;
    while (i--) {
        if (directories[i] === ".") {
            directories.splice(i, 1);
        }
        else if (directories[i] === "..") {
            if (i === 0) {
                directories.splice(i, 1);
            } else {
                directories.splice(i-1, 2);
            }
        }
    }
    return directories.join("/");
}


// console.log(normalizeString("foo/./bar/../baz/.."));
// console.log(normalizeString("foo/bar/../baz"));
// console.log(normalizeString("../foo/bar"));
// console.log(normalizeString("foo/./bar"));