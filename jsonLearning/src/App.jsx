import './App.css'

function App() {

  /* ---------------------------------CONVERTENDO JSON PARA OBJETO LITERAL-------------------------------------------------------------*/

  /*O JSON é um formato de texto leve que é usado para armazenar e transmitir dados estruturados. 
  É amplamente utilizado na comunicação entre sistemas, especialmente em aplicações web. 
  O JSON é uma representação de dados que segue uma sintaxe específica, semelhante à notação de objeto em JavaScript.*/

  /*Sintaxe: JSON segue uma sintaxe mais restrita, onde as chaves e os valores devem estar entre aspas duplas,
   e os dados só podem ser tipos primitivos como strings, números, booleanos, arrays ou outros objetos JSON.*/


  /* Acesso aos dados: Em um objeto literal, 
  você pode acessar as propriedades usando a notação de ponto (por exemplo, pessoa.nome)
  ou a notação de colchetes (por exemplo, pessoa["nome"]). */


  let colabJson = '{"colaboradores": ['+                              //JSON
      '{"nome":"Bruno","salario":15000,"idaide": 28},'+
      '{"nome":"Jacksofivers","salario":5000,"idaide": 57},'+
      '{"nome":"Evergreen","salario":7000,"idaide": 17},'+
      '{"nome":"Robsonsvaldo","salario":3000,"idaide": 39},'+
      '{"nome":"Tudraverde","salario":4000,"idaide": 15}'+
      ']}'

  /* let teste = '{"Employers":                                       //(Apenas um teste extra que eu fiz.)
  [{"nome":"Brunão","salario":15000},
  {"nome":"Bruno","salario":20000}]}' */

  console.log(colabJson)                                              //Lê o JSON

  let c_obj= JSON.parse(colabJson)                                    //Converte o JSON em Objeto literal com o metodo PARSE.

  console.log(c_obj.colaboradores)                                    //Lê o array que está dentro da chave colaboradores como objeto literal.

  console.log(c_obj.colaboradores[0])                                 //Lê o objeto da linha de indice 0 que está dentro do array da chave colaboradores. como Objto literal.

  console.log(c_obj.colaboradores[0].salario)                         //Lê o valor da chave salario dentro do objeto de indice 0 dentro do array da chave colaboradores. em Objeto literal.





  /* ---------------------------------CONVERTENDO OBJETO LITRAL PARA JSON-------------------------------------------------------------*/

  /*Por outro lado, o objeto literal é uma construção específica da linguagem JavaScript.
   É uma forma de criar um objeto diretamente no código JavaScript, usando a sintaxe de chaves e valores.*/

  /* Sintaxe: objeto literal em JavaScript permite o uso de chaves e valores sem aspas e suporta qualquer tipo de dado JavaScript,
   incluindo funções e referências a outros objetos.  */

  /* Acesso aos dados: No JSON, as propriedades são acessadas apenas por meio da notação de colchetes. */
  


  let colabOBJ = [                                                    //OBJETO LITERAL
  {"nome":"Bruno","salario":15000,"idaide": 28}
  ]

  console.log(colabOBJ)                                             //Lê o OBJETO.


  let c_json = JSON.stringify(colabOBJ)                             //Converte o OBJETO LITERAL em JSON com o metodo STRINGIFY.
                                                                    
  /*OBS: Quando um objeto JavaScript é convertido em uma string JSON usando JSON.stringify(), 
  a estrutura do objeto é serializada em uma representação de string JSON. Portanto, 
  não é possível acessar diretamente um valor específico apenas usando JSON.stringify().*/


  console.log(c_json)                                               //Lê o JSON.



  return (
    <>
      <p>Anything</p>
    </>
  )
}

export default App
