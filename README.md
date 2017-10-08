# node.sh
Node JS Shell

REPL Interface with npm bin configuration. Install via npm i -g node.sh and enjoy.

Commands and Keys

.break - When in the process of inputting a multi-line expression, entering the .break command (or pressing the <ctrl>-C key combination) will abort further input or processing of that expression.

.clear - Resets the REPL context to an empty object and clears any multi-line expression currently being input.

.exit - Close the I/O stream, causing the REPL to exit.

.help - Show this list of special commands.

.save - Save the current REPL session to a file: > .save ./file/to/save.js

.load - Load a file into the current REPL session. > .load ./file/to/load.js

.editor - Enter editor mode (<ctrl>-D to finish, <ctrl>-C to cancel)

<ctrl>-C - When pressed once, has the same effect as the .break command. When pressed twice on a blank line, has the same effect as the .exit command.

<ctrl>-D - Has the same effect as the .exit command.

<tab> - When pressed on a blank line, displays global and local(scope) variables. When pressed while entering other input, displays relevant autocompletion options.

## Example

    npm i -g node.sh
    node.sh
    ...

    // enter a location
    cd('root');

    // create file from internet
    mk('http://man7.org/linux/man-pages/man3/mkfifo.3.html');

    // list files
    ls();

    // open file from internet
    cat('mkfifo.3.html');

One line example:

    cd('root'); mk('https://raw.githubusercontent.com/fantasyui-com/poems/master/samples/kosmos.yaml'); ls(); cat('kosmos.yaml');

