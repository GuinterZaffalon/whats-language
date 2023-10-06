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

function sortearLinguagens() {
    var indiceSorteado = Math.floor(Math.random() * linguagens.length);
    var linguagemSorteada = linguagens[indiceSorteado];
    document.getElementById("linguagemSorteada").textContent = linguagemSorteada;
}