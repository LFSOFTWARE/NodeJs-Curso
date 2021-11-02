import pygame as pm 


dec = "-.../-.-./-.././..-./--./..../../.---/-.-/.-../--/-./---/.--./--.-/.-./.../-/..-/...-/.--/-..-/-.--/--.."

codigosMorse = dec.split("/")
print(codigosMorse)
letras = [ 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

tabela = {
     " ":"/",
     "a":".-",
     ",":"--..--",
     ".":".-.-.-",
     "1":".----",
     "2":"..---",
     "3":"...--",
     "4":"....-",
     "5":".....",
     "6":"-....",
     "7":"--...",
     "8":"---..",
     "9":"----.",
     "0":"-----",
     ":":"---...",
     "+":".-.-.",
     "-":"-....-",
     "=":"-...-",
     "?":"..--.."
}

for x in range(0,25):
     tabela.update({letras[x]:codigosMorse[x]})




def to_morse(text):
     text_code =[]

     for letra in text:
          morse = tabela[letra]
          text_code.append(morse)

     code =  " ".join(text_code)   

     return code



def to_text(text):
     text_= text.split(" ")
     text_array = []
    
     

     for morse in text_:
          x = list(tabela.keys())[list(tabela.values()).index(morse)]
          
          text_array.append(x)


     text_finally = "".join(text_array)

     return text_finally
     
while(True):
     print("Bem vindo ao Decodificador Morse!\n")
     print("<1>Codificar texto em morse\n<2>Decodificar codigo morse")

     op = int(input())

     if(op == 1):
          print("Digite o texto a ser codificado:")
          texto =input()
          print("\n")
          print("**Texto codificado**\n")
          print(to_morse(texto))
          print("\n")
     elif(op == 2):
          print("Digite o texto a ser decodificado:")
          texto =input()
          print(to_text(texto))

     else:
          print("Alternativa errada!")


