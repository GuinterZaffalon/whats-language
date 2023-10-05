var linguagens = ["Javascript", "Python", "Java", "PHP", "C", "Objective-C", "Go", "Swift", "Ruby", "Kotlin", "Perl", "Rust", "Perl", "HTML"];

function sortearLinguagens() {
    var indiceSorteado = Math.floor(Math.random() * linguagens.length);
    var linguagemSorteada = linguagens[indiceSorteado];
    document.getElementById("linguagemSorteada").textContent = linguagemSorteada;
}