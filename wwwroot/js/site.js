var uri = {

    buscarRanking: function (parametro) {
        $('#tableRanking').DataTable({
            "destroy": true,
            "bPaginate": false,
            "bLengthChange": false,
            "bFilter": true,
            "bInfo": false,
            "autoWidth": false,
            ajax: {
                cache: false,
                type: "GET",
                url: "https://uri-webapi.herokuapp.com/api/uri/get",
                data: { nome: parametro },
                dataType: "json"
            },
            columns: [
                { data: 'posicao' },
                { data: 'rankingUri' },
                { data: 'nome' },
                { data: 'resolvidos' },
                { data: 'tentativas' },
                { data: 'submissoes' },
                { data: 'pontos' }
            ],
            language: {
                "sEmptyTable": "Nenhum registro encontrado",
                "sLoadingRecords": "Carregando...",
                "sProcessing": "Processando...",
                "sZeroRecords": "Nenhum registro encontrado",
                "sSearch": "Pesquisar"
            },
            columnDefs: [
                {
                    targets: "_all",
                    className: 'dt-center'
                }
            ]
        });
    }
};

$(document).ready(function () {

    $("#txtPesquisa").on('keyup', function (e) {
        if (e.keyCode === 13 && $("#txtPesquisa").val().trim() != '') {
            uri.buscarRanking($("#txtPesquisa").val().trim());
        }
    });

});