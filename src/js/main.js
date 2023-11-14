const btnGenerate = document.querySelector("#gerar-pdf");

btnGenerate.addEventListener("click", () => {
    const conteudo = document.querySelector("#conteudo");

    const options = {
        margin: [10, 10, 10, 10],
        filename: "arquivo.pdf",
        html2canvas: {scale: 2},
        JsPDF: {unit: "mm", format: "a4", orientation: "portrait"}
    }

    html2pdf().set(options).from(conteudo).save();
})