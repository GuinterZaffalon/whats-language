var linguagens = [
    "Python", "JavaScript", "HTML/CSS", "SQL", "Bash/Shell", "Java",
    "C++", "C", "C#", "TypeScript", "PHP", "Rust", "PowerShell",
    "Go", "Lua", "Assembly", "R", "Kotlin", "VBA", "MATLAB",
    "Dart", "Visual Basic (.Net)", "Swift", "Ruby", "Delphi",
    "Perl", "GDScript", "Haskell", "Julia", "Groovy", "Lisp",
    "Fortran", "Objective-C", "Scala", "Elixir", "Zig", "Prolog",
    "Solidity", "Cobol", "Ada", "Clojure", "OCaml", "Apex",
    "Erlang", "SAS", "F#", "Nim", "APL", "Crystal", "Raku", "Flow"
];

var linksDocumentacao = {
    "Python": "https://docs.python.org/3/",
    "JavaScript": "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    "HTML/CSS": "https://developer.mozilla.org/en-US/docs/Web/HTML",
    "SQL": "https://dev.mysql.com/doc/",
    "Bash/Shell": "https://www.gnu.org/software/bash/manual/bash.html",
    "Java": "https://docs.oracle.com/en/java/",
    "C++": "https://en.cppreference.com/w/",
    "C": "https://devdocs.io/c/",
    "C#": "https://docs.microsoft.com/en-us/dotnet/csharp/",
    "TypeScript": "https://www.typescriptlang.org/docs/",
    "PHP": "https://www.php.net/docs.php",
    "Rust": "https://doc.rust-lang.org/",
    "PowerShell": "https://docs.microsoft.com/en-us/powershell/",
    "Go": "https://golang.org/doc/",
    "Lua": "https://www.lua.org/manual/5.4/",
    "Assembly": "https://cs.stanford.edu/people/eroberts/courses/soco/projects/2008-09/computer-organization/assembly.html",
    "R": "https://cran.r-project.org/manuals.html",
    "Kotlin": "https://kotlinlang.org/docs/",
    "VBA": "https://docs.microsoft.com/en-us/office/vba/api/overview/excel",
    "MATLAB": "https://www.mathworks.com/help/matlab/",
    "Dart": "https://dart.dev/guides",
    "Visual Basic (.Net)": "https://docs.microsoft.com/en-us/dotnet/visual-basic/",
    "Swift": "https://developer.apple.com/documentation/swift",
    "Ruby": "https://www.ruby-lang.org/en/documentation/",
    "Delphi": "https://docwiki.embarcadero.com/RADStudio/en/Main_Page",
    "Perl": "https://perldoc.perl.org/",
    "GDScript": "https://docs.godotengine.org/en/stable/getting_started/scripting/gdscript/index.html",
    "Haskell": "https://www.haskell.org/documentation/",
    "Julia": "https://docs.julialang.org/en/v1/",
    "Groovy": "https://groovy-lang.org/documentation.html",
    "Lisp": "http://www.gigamonkeys.com/book/",
    "Fortran": "https://gcc.gnu.org/onlinedocs/gfortran/",
    "Objective-C": "https://developer.apple.com/documentation/objectivec",
    "Scala": "https://docs.scala-lang.org/",
    "Elixir": "https://elixir-lang.org/docs.html",
    "Zig": "https://ziglang.org/documentation/master/",
    "Prolog": "https://www.swi-prolog.org/pldoc/index.html",
    "Solidity": "https://soliditylang.org/docs/",
    "Cobol": "https://www.ibm.com/docs/en/cobol/6.3?topic=ssw2hj3fc0",
    "Ada": "https://learn.adacore.com/courses/intro-to-ada/index.html",
    "Clojure": "https://clojure.org/guides/getting_started",
    "OCaml": "https://ocaml.org/learn/documentation.html",
    "Apex": "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/",
    "Erlang": "https://www.erlang.org/docs",
    "SAS": "https://documentation.sas.com/doc/en/casml/8.3/casml_intro_overview.htm",
    "F#": "https://docs.microsoft.com/en-us/dotnet/fsharp/",
    "Nim": "https://nim-lang.org/docs.html",
    "APL": "https://www.jsoftware.com/help/",
    "Crystal": "https://crystal-lang.org/reference/",
    "Raku": "https://docs.raku.org/",
    "Flow": "https://flow.org/en/docs/"
};

function sortearLinguagens() {
    var indiceSorteado = Math.floor(Math.random() * linguagens.length);
    var linguagemSorteada = linguagens[indiceSorteado];
    document.getElementById("linguagemSorteada").textContent = linguagemSorteada;

    var link = document.getElementById("linkDocumentacao");
    link.href = linkDocumentacao;
    link.style.display = "inline";

}