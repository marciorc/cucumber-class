Feature: Login

    Scenario Outline: Login com sucesso
        Given que eu acesse a página de login
        When informo as credenciais válidas
            | usuario | <usuario> |
            | senha   | <senha>   |
        Then eu devo ser redirecionado para a página de transferência

    Examples:
        | usuario     | senha  | 
        | julio.lima  | 123456 |
        | junior.lima | 123456 |