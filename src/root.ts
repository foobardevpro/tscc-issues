import * as React from 'react'

/*

0. Run npm install


two issues (these two issues might be related to each other)
------------------------------------------------------------
1. Run watch.js
2. Notice nothing was bundled (was supposed to create multiple bundles inside /dist) (react external seems to be causing this issue)
3. Comment out the react import above, and save -- now the watch does bundle, BUT, it bundles all modules into a single file! (names it bundle2.js)


last issue
------------------------------------------------------------
1. Run build.js -- results in ImportMeta error:
	".... ERROR - [JSC_UNDEFINED_VARIABLE] variable ImportMeta is undeclared .... ClosureCompiler: Exited with code 1 ..."
2. Delete node_modules/@types/node which was put there after 'rollup' package installation
3. Run build.js again -- should compile successfully.

I'm not sure how you should deal with the last issue but it deserves mentioning, especially because you're bound to receive it if you use rollup.

*/