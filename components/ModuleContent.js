import * as React from "react";
import { Text, View, StyleSheet, Image, Button, Alert } from "react-native";

const trans = {
  module: {
    1: {
      page: {
        1: {
          text: {
            lang: {
              en:
                "Almost all programmers start programming simple programs. No program is more infamous than “Hello world”. Before we look at our first hello world program, let’s look at the main components of a c++ program, from top to bottom.",
              pt:
                "Quase todos os programadores começar a programar com programas básicos. Nenhum programa é mais popular para aprender que o chamado “Hello, World”, ou “Olá, Mundo”. Antes de começar a programar, vamos olhar nas ingredientes essenciais de um programa de C++.",
              es:
                "Casi todos los programadores empiezan a programar cosas básicas. Ningún programa tiene más fama que el que es llamada “Bienvenido al mundo.” Antes de empezar con este programa, aprendamos sobre los ingredientes más esenciales de un programa en C++."
            }
          },
          word: {
            lang: {
              en: "",
              pt: "",
              es: ""
            }
          },
          definition: {
            lang: {
              en: "",
              pt: "",
              es: ""
            }
          },
          imgpath: "../assets/caffeina.png"
        },
        2: {
          text: {
            lang: {
              en:
                "Since c++ is an english based programming language, it is useful to learn some english words. At the very top of c++ programs, we will see something we call, libraries, or (spanish/portuguese word). Think of libraries as tool kits. For some tasks, we need to have specific tools. We need to remember to include these tools so that we have access to them when needed. In english include means",
              pt:
                "Como C++ é uma linguagem baseada em inglês, é importante aprender algumas palavras inglesas. Em cada programa de C, é normal iniciar com libraries, ou bibliotecas. Pense nisso como caixas de ferramentas. Para conseguir tarefas específicas, precisamos ter ferramentas adequadas. Também, a gente tem que lembrar incluir estas ferramentas para ter acesso a elas. Em inglês, a palavra include se traduz para incluir",
              es:
                "Como C++ es un lenguaje creado en inglés, es importante aprender ciertas palabras. En cada programa de C++ vamos a ver algo llamado libraries, o bibliotecas. Estas bibliotecas son cajas de herramientas. Para cumplir algunas metas, necesitamos usar herramientas en especial. Necesitamos acordarnos de incluir a estas herramientas para poder accederlas cuando las necesitemos. Otra palabra, include, significa incluir."
            }
          },
          word: {
            lang: {
              en: "Include",
              pt: "Include",
              es: "Include"
            }
          },
          definition: {
            lang: {
              en: "To Include",
              pt: "Include: Para incluir",
              es: "Include: Para incluir"
            }
          },
          imgPath: "../assets/caffeina.png"
        },
        3: {
          text: {
            lang: {
              en:
                "Next, you will see something called a “function”. We will only be working with a function called “main” for now. Functions can have any name, and the names normally reflect their purpose. You can think of the main function like the lobby of an office. All other rooms eventually lead back to the lobby.",
              pt:
                "Agora pode ver algo chamado uma *função*. Estamos somente trabalhando com uma função chamada *main*, ou principal por agora. Funções pode ter qualquer nome, e normalmente esses nomes tem a ver com seu propósito. Imagine a função como uma sala de espera (saguão) num prédio comercial. Todos os outros cuartos terminam até lá.",
              es:
                "Ahora vamos a ver algo llamada una *function*. Solo vamos a estar trabajando con una función llamada *main* o principal por ahora. Funciones pueden tener cualquier nombre, y los nombres normalmente dicen mucho de su propósito. Puedes imaginarte que la función de main como la sala de espera de una oficina. Todos los otros cuartos terminan regresando a ella."
            }
          },
          word: {
            lang: {
              en: "Main",
              pt: "Main",
              es: "Main"
            }
          },
          definition: {
            lang: {
              en: "Main function",
              pt: "Main: A função principal",
              es: "Main: La funcion principal"
            }
          },
          imgPath: "../assets/caffeina.png"
        },
        4: {
          text: {
            lang: {
              en:
                "Functions are contained using these brackets { … }. The first { indicates the beginning of the function, and the last } indicates the end. Inside these brackets are where we will write our first hello world program. Before we do this, let’s review some of the vocabulary",
              pt:
                "Funções contém {...}. O primeiro { (abre fecha chave) indica o início da função e o último } indica o final. Dentro destes é que onde fica nosso primeiro programa de “Bem-vindo ao mundo”. Antes de procedermos, vamos rever nosso novo vocabulário",
              es:
                "Funciones contienen {...}. La primera { indican el comienzo de la función y la última } indica su final. Adentro de ellas es donde tendremos nuestro primer programa de bienvenido al mundo. Antes de esto, repasemos un poco nuestro vocabulario."
            }
          },
          word: {
            lang: {
              en: "New words",
              pt: "Novas palavras",
              es: "Nuevas palabras"
            }
          },
          definition: {
            lang: {
              en: "Main and Include",
              pt:
                "Main: A função principal \n Include: Para Incluir \n Muito Bem!",
              es: "Main: Una funcion principal\nInclude: Incluir\nSuper!"
            }
          },
          imgPath: "../assets/caffeina.png"
        },
        5: {
          text: {
            lang: {
              en:
                "Good job! Now, inside the brackets, we can start our hello world program! The purpose of a “hello world” program is to print “hello world” onto the screen. If we want to print something to the screen, we need to have the appropriate tools for printing. Where do we get our tools again?",
              pt:
                "Muito bom! Agora escolhe o library para que começar nosso programa de *Bem-vindo ao mundo*. O propósito deste programa é imprimir *Bem-vindo ao mundo* na tela. Se quisermos imprimir algo na tela, precisamos incluir as ferramentas adequadas. De onde a gente pode obter essas ferramentas?",
              es:
                "Excelente trabajo! Ahora, entre los soportes necesitamos escribir nuestro programa de bienvenido al mundo! El propósito del programa *bienvenido al mundo* es para imprimir *bienvenido al mundo* a la pantalla. Si queremos imprimir algo necesitamos las herramientas indicadas para imprimir. Donde es que conseguimos nuestras herramientas?"
            }
          },
          word: {
            lang: {
              en: "Library",
              pt: "Library",
              es: "Library"
            }
          },
          definition: {
            lang: {
              en: "Library Def",
              pt:
                "Library: Biblioteca! \n Ótimo! O library que precisamos para imprimir é chamado iostream. Agora que temos nosso biblioteca, vamos a implementar. Para imprimir podemos usar o formato, cout << “...” << endl;",
              es:
                "Library: Biblioteca! \n Excelente! La library que necesitamos en este caso para imprimir se llama iostream. Ahora que tenemos nuestra biblioteca, usemosla! Para imprimir podemos usar el formato, cout << “...” << endl;"
            }
          },
          imgPath: "../assets/caffeina.png"
        },
        6: {
          text: {
            lang: {
              en:
                "Wow, there are a lot of new words here! Let’s break this down.\n\nYou probably noticed that cout looks different than out and endl looks different than end. Cout is simply the syntax, since we are using the language, c. Endl can be read as *end line*. This means that when we print to the screen, the computer will begin a new *line*",
              pt:
                "Nossa! Tantas novas palavras, hein? Vamos decompô-las. Percebeu que cout parece diferente que out e endl de end? Cout é simplesmente a sintaxe para imprimir texto em a linguagem de C. Pense de Endl como o fim da linha na tela. Quando colocar o Endl, o programa começa uma nova linha.",
              es:
                "Tenemos bastantes preguntas nuevas! Repasemoslas. Probablemente notaste que cout se ve diferente que out y endl de end. Cout es simplemente el hecho de imprimir el texto en el lenguaje C. Endl se puede considerar como fin de línea. Esto significa que al imprimir en la pantalla, la computadora empezaria una nueva línea."
            }
          },
          word: {
            lang: {
              en: "Out, End",
              pt: "Out, End",
              es: "Out, End"
            }
          },
          definition: {
            lang: {
              en: "Out, End",
              pt: "Out: Fora.. End: Fim",
              es: "Out: Afuera.. End: Fin"
            }
          },
          imgPath: "../assets/caffeina.png"
        },
        7: {
          text: {
            lang: {
              en:
                "Ok! Now we are ready to finish our program. Many functions require the user to return a value. This will be more important with advanced programs, but for now let’s just return 0. Ok! I think we are ready to run our program now. Let’s see what will print on the screen. ",
              pt:
                "OK, agora estamos prontos terminar nosso programa. Há muitas funções que exigem o usuário retornar um valor. Isso é mais usado com programas avançados, por agora simplesmente retorne um 0. Que bom! Agora estamos prontos executar o programa. Vamos ver o que a tela mostrará.",
              es:
                "Bueno! Ahora estamos listos para terminar nuestro programa. Hay muchas funciones que requieren que el usuario retorne un valor. Esto es usado más con programas avanzados - por ahora simplemente retornemos un 0. Listo! Ahora estamos listos para ensayar nuestro programa. Veamos que vamos a imprimir en la pantalla."
            }
          },
          word: {
            lang: {
              en: "word",
              pt: "Toque aqui para compilar este Code",
              es: "Toca aca para compilar este codigo"
            }
          },
          definition: {
            lang: {
              en: "Main function",
              pt: "Compilado, toque Next para ver o resultado",
              es: "Compilado, toca next para ver resultado"
            }
          },
          imgPath: "../assets/caffeina.png"
        },
        8: {
          text: {
            lang: {
              en: "How cool! Our first program works!",
              pt: "Que Legal! O nosso primeiro programa funciona!",
              es: "Genial! Nuestro primer programa funciona!"
            }
          },
          word: {
            lang: {
              en: "",
              pt: "",
              es: ""
            }
          },
          definition: {
            lang: {
              en: "",
              pt: "",
              es: ""
            }
          },
          imgPath: "../assets/caffeina.png"
        }
      }
    },
    2: {
      page: {
        1: {
          text: {
            lang: {
              en:
                "Hey programmer! Welcome back to C++ café. In this module, we will learn about variables and conditional statements. Let’s look back at our hello world program from module 1. Did you notice something in front of the “main” function? That’s right! What you see is INT. This is an example of a type. Any function or variable has a type. Here are a list of common types…\n\nInt, String, Char, Void\n\nInt is short for integer.\n\n[[[[“Integer” - (definition)]]]]\n\nInts are simply numbers, like 1, 2, and 3!",
              pt:
                "Olá, Programador! Bem-vindo de volta ao C++ Café! Neste capítulo, aprendemos sobre variáveis e declarações condicionais. Vamos rever nosso programa do primeiro capítulo, Olá mundo. Você percebe algo na frente da função Main? Claro! É um INT. Isso é um exemplo de um variável. Qualquer função ou variável tem algum tipo. Aqui tem uma lista de tipos comuns...\n\nInt, String, Char, Void\n\nINT é a abreviatura para Integer\n\nInts são simplesmente numeros, como 1, 2, e 3!",
              es:
                "Hola programador! Bienvenido de regreso a C++ Cafe. En este capítulo aprenderemos sobre variables y declaraciones condicionales. Repasemos nuestro programa del primer capítulo, bienvenido al mundo. Notaste algo después de nuestra función principal? Correcto! Lo que ves es un INT. Este es un ejemplo de un tipo. Cualquier función o variable tiene un tipo. Esta es una lista de tipos comunes...\n\nInt, String, Char, Void\n\nINT es la abreviatura para número entero.\n\nInts o números enteros son como 1, 2, y 3."
            }
          },
          word: {
            lang: {
              en: "Integer",
              pt: "Integer",
              es: "Integer"
            }
          },
          definition: {
            lang: {
              en: "Integer: Número Inteiro",
              pt: "Integer: Número Inteiro",
              es: "Integer: número entero"
            }
          },
          imgPath: "../assets/caffeina.png"
        },
        2: {
          text: {
            lang: {
              en: "",
              pt:
                "Agora que sabemos sobre os tipos de C++, vamos ver o que significam. Você se lembra do que os tipos descrevem?\n\nÓtimo! Como aprendemos antes, tipos em programação podem descrever funções e  variáveis. Abaixo tem o estrutura para definir uma variável.",
              es:
                "Ahora que sabemos que son tipos, miremos a ver que describen. Recuerdas que significa cada tipo?\n\nGenial!\n\nComo aprendimos antes, tipos puedes describir funciones y variables. Primero miremos a los variables. Vamos a hablar sobre funciones despues. Abajo puedes ver una estrucutra para definir un variable."
            }
          },
          word: {
            lang: {
              en: "",
              pt: "Programs and Libraries",
              es: "Programs and Libraries"
            }
          },
          definition: {
            lang: {
              en: "",
              pt: "Correto",
              es: "Correcto"
            }
          },
          imgPath: "../assets/caffeina.png"
        },
        3: {
          text: {
            lang: {
              en: "",
              pt:
                "Vemos que a função é de tipo void. Uma função com tipo void, não nos entrega um resultado. \nAgora vemos a variavel de tipo INT. Você se lembra que significa o variavel int?",
              es:
                "Vemos que la función es de tipo void. Una función con tipo void no nos entregará un resultado. \n Ahora vemos el variable tipo INT. Recuerdas que significa el variable int?"
            }
          },
          word: {
            lang: {
              en: "Integer",
              pt: "Integer",
              es: "Integer"
            }
          },
          definition: {
            lang: {
              en: "",
              pt: "Integer: Número Inteiro",
              es: "Integer: Numero entero"
            }
          },
          imgPath: "../assets/caffeina.png"
        },
        4: {
          text: {
            lang: {
              en: "",
              pt:
                "Agora, vamos falar do tipo “string”. Esta palavra não se traduz facilmente, mas tem que confiar em mim! \nUm string é basicamente uma, como “exemplo”. O motivo que se chama string é porque é uma coleção de letras. Isso pode ser identificado como um string -\n S-t-r-i-n-g\nAgora entende? Cada letra forma uma parte do String",
              es:
                "Ahora, hablemos sobre el tipo “string”. Esto no traduce fácilmente, pero tendras que confiar en mi! \nUn string es básicamente una palabra, como “ejemplo”. La razón por la cual se llama string es porque es una colección de letras. Esto puede ser identificado como un string: \nS-t-r-i-n-g \n\nLo ves? Cada letra forma parte de el string"
            }
          },
          word: {
            lang: {
              en: "String",
              pt: "String",
              es: "String"
            }
          },
          definition: {
            lang: {
              en: "",
              pt: "String: coleção das letras",
              es: "String: colección de las letras"
            }
          },
          imgPath: "../assets/caffeina.png"
        },
        5: {
          text: {
            lang: {
              en: "",
              pt:
                "Characters são letras individuais como a, b, c, ou d.\n\nPercebe que aquelas variáveis têm nomes diferentes? Podemos dar qualquer nome ou apelido a cada variável, mas devemos tentar denominar-los de maneira que faz sentido com o propósito dela.\n\n Por exemplo, uma variável com o nome de word provavelmente seja de tipo String. É boa prática fazer a denominação para que qualquer pessoa pode entender o que programamos!Quando os tipos são usados para descrever os variáveis, devemos devolver um resultado com um variável de tipo igual do tipo de função.\n\nPor exemplo...",
              es:
                "Characters son letras individuales como a, b, c, o d. \n\nHas notado que estos variables tienen diferentes nombres? Podemos darle cualquier apodo a cada variable, pero deberíamos intentar en identificarlos de tal manera que haga sentido con su propósito. Por ejemplo, un variable con el nombre word hace sentido que sea de tipo string. Es buena práctica hacer esto para que cualquier persona pueda entender lo que programamos! \n\nCuando los tipos son usados para describir los variables, debemos devolver un resultado con un variable o valor que comparta el mismo tipo.\n\nPor ejemplo..."
            }
          },
          word: {
            lang: {
              en: "",
              pt: "Character",
              es: "Character"
            }
          },
          definition: {
            lang: {
              en: "",
              pt: "Character: Letra individual",
              es: "Character: Letra individual"
            }
          },
          imgPath: "../assets/caffeina.png"
        },
        6: {
          text: {
            lang: {
              en: "",
              pt:
                "Bom trabalho! Agora que sabemos todo sobre os tipos, aprenderemos sobre algo fundamental - declarações condicionais. \nVamos ver um exemplo de declaração condicional e depois analisaremos. \nVê as palavras inglesas que aparecem no primeiro condicional? Qual palavras formam parte da declaração condicional?",
              es:
                "Te esta yendo super! Ahora que sabemos todo sobre los tipos, aprenderemos sobre algo fundamental: conditional statements. \n Miremos un ejemplo de estas declaraciones condicionales y analizemos: \nMiremos estas palabras en inglés que se encuentran en el primer condicional. Que palabras piensas que forman parte de la declaración condicional?"
            }
          },
          word: {
            lang: {
              en: "IF & ELSE",
              pt: "IF & ELSE",
              es: "IF & ELSE"
            }
          },
          definition: {
            lang: {
              en: "",
              pt: "IF: SE \nELSE: Em vez que",
              es: "IF: Si \nELSE: En vez que"
            }
          },
          imgPath: "../assets/caffeina.png"
        },
        7: {
          text: {
            lang: {
              en: "",
              pt:
                "Partes da declaração condicional são if y else. \n A primeira parte do condicional é if. Em () de if, especificamos o condicional. Se este condição é satisfeita, o programa continua com o code depois de if, dentro dos { }. Se a condição de if não é satisfeita, o programa ignora o if e salta para o que fica dentro de else, neste caso, resultaria num return de 0.",
              es:
                "Partes de la declaración condicional son if y else. \n La primera parte del condicional es if. En () para if, especificamos la condicional. Si esta condición resulta ser cierta ingresamos y ejecutaremos lo que contiene por dentro { }. Si sucede resultaría en un hecho, 1, y si no resultaría en un 0."
            }
          },
          word: {
            lang: {
              en: "",
              pt: "",
              es: ""
            }
          },
          definition: {
            lang: {
              en: "",
              pt: "",
              es: ""
            }
          },
          imgPath: "../assets/caffeina.png"
        }
      }
    },
    3: {
      page: {
        1: {
          text: {
            lang: {
              en: "",
              pt:
                "Bem vindo de volta, programador! Nesta lição aprendemos mais dum tipo com que falamos no última lição, o String, e também nossa primeira estrutura de data, o array! Antes de continuarmos, você se lembra o que é um String?",
              es:
                "Estas de regreso programador! En esta seccion miraremos el tipo A que mencionamos en la 2nda seccion, el String, y tambien nuestra primera estrucutra de datos, el Array! Antes de que continuemos, te acuerdas lo que es un String?"
            }
          },
          word: {
            lang: {
              en: "",
              pt: "String",
              es: "String"
            }
          },
          definition: {
            lang: {
              en: "",
              pt: "String: coleção das letras",
              es: "String: colección de las letras"
            }
          },
          imgPath: "../assets/caffeina.png"
        },
        2: {
          text: {
            lang: {
              en: "",
              pt:
                "Como um String é uma coleção de letras, tem varias maneiras guardarlas. Uma letra é básicamente informação que uma computadora mantém. Em ciência de computação, são estruturas de datas diferentes que nos ajudam organizar informação. Uma das mais básicas é o array!",
              es:
                "Como un String es una coleccion de letras, hay muchas maneras de guardarlas. Una letra es basicamenta informacion que una computadora contiene. En Ciencias de computacion hay diferentes estructuras que nos ayudan organizar informacion en la computadora! Una de las estructuras mas basicas es un Array."
            }
          },
          word: {
            lang: {
              en: "",
              pt: "Array",
              es: "Programs and Libraries"
            }
          },
          definition: {
            lang: {
              en: "",
              pt: "Array: uma estrutura de data de matriz",
              es: "Array: estructura de dato de matriz"
            }
          },
          imgPath: "../assets/caffeina.png"
        },
        3: {
          text: {
            lang: {
              en: "",
              pt:
                "Aqui tem alguns exemplos para declarar um String. Todos disso são aceitaveis, e agluns tem vantagem que depende de programa que está construindo. Veja o \0 no fim do String array no meio.",
              es:
                "Aca hay unos ejemplos de como puedes declarar un String. Todos ellos son aceptados y algunos tienen ventaja dependiendo en el programa que estes creando. \n\nMira que el \0 al final del String Array en el medio."
            }
          },
          word: {
            lang: {
              en: "",
              pt: "\0",
              es: "\0"
            }
          },
          definition: {
            lang: {
              en: "",
              pt: "\0: letra incluida para terminar o String.",
              es: "\0: letra incluida para terminar o String"
            }
          },
          imgPath: "../assets/caffeina.png"
        },
        4: {
          text: {
            lang: {
              en: "",
              pt:
                "Também podemos se juntar os Strings com outros. Aqui em baixo tem um exemplo de dois String sendo combinados. Talvés você vai lembrar desta compilação!",
              es:
                "Tambien podemos agregar String en C++. Este es un ejemplo de como podemos agregarlo. Hazle click al boton para ver cual es el resultado. Depronto lo puedes reconocer!"
            }
          },
          word: {
            lang: {
              en: "",
              pt: "compile",
              es: "compile"
            }
          },
          definition: {
            lang: {
              en: "",
              pt: "Hello, world!",
              es: "Hello, World!"
            }
          },
          imgPath: "../assets/caffeina.png"
        },
        5: {
          text: {
            lang: {
              en: "",
              pt:
                "Podemos acessar elementos em um Array por usar números para representar a posição. Aqui tem um exemplo disso. Você pode chutar qual nova palavra aparecara? Lembre que com Arrays, a primeira posição começa com 0!",
              es:
                "Podemos acceder diferentes elementos de un Array usando numeros para representar sus posiciones. Aca te demuestro un ejemplo. \n\nPuedes adivinar cual es la nueva palabra? Recuerda que en Arrays la primera posicion es el 0!"
            }
          },
          word: {
            lang: {
              en: "",
              pt: "compile",
              es: "compile"
            }
          },
          definition: {
            lang: {
              en: "",
              pt: "HoWold",
              es: "HoWold"
            }
          },
          imgPath: "../assets/caffeina.png"
        }
      }
    },
    4: {
      page: {
        1: {
          text: {
            lang: {
              en:
                "Welcome back, programmer! In this module we will learn everything there is to learn about loops! In this module we will learn everything there is to learn about loops! In this module we will learn everything there is to learn about loops! Oops! Sorry, I don't know why I just repeated all of that. Let's begin!",
              pt:
                "Bem vindo de volta, programador! Nesta lição aprenderemos tudo o que tem a ver com Loops! Nesta lição aprenderemos tudo o que tem a ver com Loops! Nesta lição aprenderemos tudo o que tem a ver com Loops! Oops! Desculpa, não sei por que repeti todo isso. Vamos!",
              es:
                "Bienvenido de regreso programador!\n\nEn este modulo camos a aprender de todo lo que tiene que ver con Loops!\nEn este modulo camos a aprender de todo lo que tiene que ver con Loops!\nEn este modulo camos a aprender de todo lo que tiene que ver con Loops!\n\nOops! Disculpa, no se porque repeti todo eso. Empezemos!"
            }
          },
          word: {
            lang: {
              en: "",
              pt: "",
              es: ""
            }
          },
          definition: {
            lang: {
              en: "",
              pt: "",
              es: ""
            }
          },
          imgPath: "../assets/caffeina.png"
        },
        2: {
          text: {
            lang: {
              en: "",
              pt:
                "Um loop é uma maneira de contar instruções. Un deles é um for loop. Um for loop usa lógica para repetir instruções. Um for loop tem três partes - Um inicio, uma condição, e  um incrementador. Aqui tem um for loop comum que der os números de 0 a 9!",
              es:
                "Un loop es una manera de decirle al computador que repita ciertas instrucciones. Una de ellas es un for loop. Un for loop utiliza logica para repetir instrucciones. For loops tienen 3 partes - un comienzo, una condicion, y un incrementador.\n\nAca te dejo un ejemplo para un loop que imprime numeros de 0 a 9!"
            }
          },
          word: {
            lang: {
              en: "",
              pt: "Loop",
              es: "Loop"
            }
          },
          definition: {
            lang: {
              en: "",
              pt: "Loop: Para repetir algo",
              es: "Loop: Repetir algo"
            }
          },
          imgPath: "../assets/caffeina.png"
        },
        3: {
          text: {
            lang: {
              en: "",
              pt:
                "A primeira parte do loop requer saber de onde iniciar. Começamos de 0 neste exemplo. Depois, precisamos saber por quanto tempo o Loop corre. Aqui, o loop até i se torna 9. Mas, se i começa a 0, então como nós vamos continuar a 10? Por isso usamos i++. Depois de cada interação, i incrementa por um com o operador ++. ",
              es:
                "La primera parte del loop requiere saber donde empezar. En este ejemplo empezaremos desde 0.\n\nDespues, necesitamos saber la condicion que se require para que el loop continue de suceder. En este ejemplo queremos que el loop continue hasta que nuestro incrementador, i, tenga un valor de 9.\n\nPero si i empieza en 0, como va a llegar a 10? Para esto utilizamos la tercer parte, i++/ Despues de cada iteracion, i incrementa por uno con el operador ++."
            }
          },
          word: {
            lang: {
              en: "",
              pt: "compile",
              es: "compile"
            }
          },
          definition: {
            lang: {
              en: "",
              pt: "0 1 2 3 4 5 6 7 8 9",
              es: "0 1 2 3 4 5 6 7 8 9"
            }
          },
          imgPath: "../assets/caffeina.png"
        },
        4: {
          text: {
            lang: {
              en: "",
              pt:
                "Outro loop comum é o while loop. Isso usa lógico parecida a um for loop, mas o while loop somente tem uma regra. Se aquela regra continua ser verdade, então o loop continua a repetir. Se não, o loop termina. Aqui tem um exemplo de um while loop.",
              es:
                "Otro loop comun es un while loop. Usa una logica muy parecida a un for loop pero un while loop solo tiene una regla. Si la regla continua a ser cierta, entonces continua a hacer un loop. Si no, el loop termina. Aca esta un ejemplo de el while loop. "
            }
          },
          word: {
            lang: {
              en: "",
              pt: "compile",
              es: "compile"
            }
          },
          definition: {
            lang: {
              en: "",
              pt: "10 11 12 13 14 15 16 17 18 19",
              es: "10 11 12 13 14 15 16 17 18 19"
            }
          },
          imgPath: "../assets/caffeina.png"
        }
      }
    }
  }
};

export default class ModuleContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let textShown;
    let vocabBtn;
    let image;
    let propsPage = this.props.page;
    let propsMod = this.props.mod;
    let propsLang = this.props.lang;

    // let imgPath = lang[this.props.lang].page[this.props.page].imagePath;

    if (trans.module[propsMod].page[propsPage]) {
      if (trans.module[propsMod].page[propsPage].text.lang[propsLang]) {
        textShown = (
          <Text>
            {trans.module[propsMod].page[propsPage].text.lang[propsLang]}
          </Text>
        );
      }

      if (
        trans.module[propsMod].page[propsPage].word.lang[propsLang] &&
        trans.module[propsMod].page[propsPage].definition.lang[propsLang]
      ) {
        let word = trans.module[propsMod].page[propsPage].word.lang[propsLang];
        let def =
          trans.module[propsMod].page[propsPage].definition.lang[propsLang];

        vocabBtn = <Button title={word} onPress={() => Alert.alert(def)} />;
      }

      //IMG DYNAMIC - NOT WORKING RN
      // if (lang[this.props.lang].page[this.props.page].imagePath) {
      //   image = (
      //     <Image
      //       style={styles.image}
      //       source={require("../assets/caffeina.png")}
      //     />
      //   );
      // }

      //TEMP IMG FIX
      //   if (lang[this.props.lang].page[this.props.page].imagePath != null) {
      if (this.props.mod == 1) {
        if (this.props.page == 1 || this.props.page == 5) {
          image = (
            <Image
              style={styles.image}
              source={require("../assets/caffeina.png")}
            />
          );
        }
        if (
          this.props.page == 2 ||
          this.props.page == 3 ||
          this.props.page == 4 ||
          this.props.page == 6 ||
          this.props.page == 7
        ) {
          image = (
            <Image
              style={styles.image}
              source={require("../assets/code.png")}
            />
          );
        }
        if (this.props.page == 8) {
          image = (
            <Image
              style={styles.image}
              source={require("../assets/hiworld.png")}
            />
          );
        }
      }
      if (this.props.mod == 2) {
        if (this.props.page == 1) {
          image = (
            <Image
              style={styles.image}
              source={require("../assets/caffeina.png")}
            />
          );
        }
        if (
          this.props.page == 2 ||
          this.props.page == 3 ||
          this.props.page == 4
        ) {
          image = (
            <Image
              style={styles.image}
              source={require("../assets/types-for-variables.png")}
            />
          );
        }
        if (this.props.page == 5) {
          image = (
            <Image
              style={styles.image}
              source={require("../assets/type-returns.png")}
            />
          );
        }
        if (this.props.page == 6 || this.props.page == 7) {
          image = (
            <Image
              style={styles.image}
              source={require("../assets/caffeina.png")} // conditional.png NOT WORKING
            />
          );
        }
      }
      if (this.props.mod == 3) {
        if (this.props.page == 1 || this.props.page == 2) {
          image = (
            <Image
              style={styles.image}
              source={require("../assets/caffeina.png")}
            />
          );
        }
        if (this.props.page == 3) {
          image = (
            <Image
              style={styles.image}
              source={require("../assets/string-array.png")}
            />
          );
        }
        if (this.props.page == 4) {
          image = (
            <Image
              style={styles.image}
              source={require("../assets/add-string.png")}
            />
          );
        }
        if (this.props.page == 5) {
          image = (
            <Image
              style={styles.image}
              source={require("../assets/new-word.png")}
            />
          );
        }
      }
      if (this.props.mod == 4) {
        if (this.props.page == 1) {
          image = (
            <Image
              style={styles.image}
              source={require("../assets/caffeina.png")}
            />
          );
        }
        if (this.props.page == 2 || this.props.page == 3) {
          image = (
            <Image
              style={styles.image}
              source={require("../assets/loop-for.png")}
            />
          );
        }
        if (this.props.page == 4) {
          image = (
            <Image
              style={styles.image}
              source={require("../assets/loop-while.png")}
            />
          );
        }
      }
    }

    return (
      <View style={styles.container}>
        <View
          style={{
            height: "40%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {textShown}
        </View>

        <View
          style={{
            height: "10%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {vocabBtn}
        </View>

        <View
          style={{
            height: "40%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {image}
        </View>

        <View style={{ height: "10%" }}>
          <Text>
            {"\n"}Lesson {this.props.page}/8
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fffff0",
    padding: 24
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center"
  },
  logo: {
    height: 128,
    width: 128
  },
  image: {
    height: 150,
    width: 350
  }
});
