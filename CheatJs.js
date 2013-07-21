/*!
 * CheatJs v1.0.0
 *
 * Released under the MIT license
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2013 Simon Grimshaw
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * Date: 2013-07-21
 */
(function (window, undefined) {
    'use strict';

    var 
        Cheat,
        core_name = "CheatJs",
        core_version = "1.0.0";

    Cheat = (function () {
        var keyCatcher,
            codes,
            uid;

        function Cheat() {
            this.name = core_name;
            this.version = core_version;
        };

        codes = {};
        uid = -1; // Unique Id incase name not provided when adding codes.

        // Konami Code
        codes["konami"] = {code: [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]};

        // TODO : Need internal list of keys and match as it goes
        keyCatcher = function (e) {
            e = e || window.event;

            console.log(e.keyCode);
        }

        // TODO : Needs to be better
        window.document.onkeydown = keyCatcher;

        Cheat.prototype.addCode = function (name, code) {
            // TODO : Need to chech argument count etc....

            codes[name] = code;
        };

        Cheat.prototype.removeCode = function (name) {
            // TODO : Look at list and remove....
        };

        // TODO : HAve short hand for this???
        Cheat.prototype.addFunc = function (name, func) {

        };

        Cheat.prototype.removeFunc = function (name) {

        };

        return Cheat;
    })();

    if (typeof window === "object" && typeof window.document === "object") {
        window.cheat = window._c = new Cheat();
    }
})(window);

// TODO : Have a logging option/flag...