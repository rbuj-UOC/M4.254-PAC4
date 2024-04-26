# Exercici 1 – Instal·lació i configuració d'Angular CLI (1.5 punts)

## Explica què fa cadascuna de les opcions següents d'Angular CLI

| Ordre                               | Àlies | Significat |
| ----------------------------------- | ----- | ---------- |
| ng new [nom]                        | n     | Crea un nou espai de treball Angular. |
| ng generate                         | g     | Genera i/o modifica fitxers a partir d'un esquema. |
| ng generate component [nom]         | c     | Crea una nova definició genèrica de component al projecte. |
| ng generate directive [nom]         | d     | Crea una nova definició genèrica de directiva al projecte. |
| ng generate enum [nom]              | e     | Genera una nova definició genèrica d'enumeració al projecte. |
| ng generate guard [nom]             | g     | Genera una nova definició genèrica de protecció de camí al projecte. |
| ng generate interface [nom] [tipus] | i     | Crea una nova definició genèrica d'interfície al projecte. |
| ng generate pipe [nom]              | p     | Crea una nova definició genèrica de canonada al projecte. |
| ng generate service [nom]           | s     | Crea una nova definició genèrica de servei al projecte. |
| ng serve [projecte]                 | s     | Crea i dóna servei a l'aplicació, reconstruint-se amb qualsevol canvi als fitxers. |
| ng test [projecte]                  | t     | Executa les proves unitàries d'un projecte. |
| ng version                          | v     | Imprimeix la versió d'Angular CLI. |

## Més informació
Per obtenir més informació quant a les ordres i les seves opcions es pot utilitzar l'indicador `--help`, per exemple com obtenir més informació de les ordres utilitzant àlies:

```
$ ng g --help
$ ng g c --help
$ ng g d --help
$ ng g e --help
$ ng g g --help
$ ng g i --help
$ ng g p --help
$ ng g s --help
$ ng s --help
$ ng t --help
$ ng v --help
```