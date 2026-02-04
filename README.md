fork: prefixo proips;
### Instalação
1- Baixe o Zip do repositório.  
2- Extraia.  
3- Acesse a página de extensões do navegador.  
4- Ative o Modo de desenvolvedor  
5- Selecione Carregar sem pacote.  
6- Selecione a pasta da extensão extraída.  

# halopsa-open-id-extension
Extension for Chromium that adds a context menu option for opening the selected ticket ID in HaloPSA.

This uses Manifest V3, so the extension only loads when needed.  

It will only open the link if you select numbers.  
For this it tests the following regex: /^\d+$/ (https://regexr.com/631qa)

Changelog:  
```v1 - working, but hard coded with the "proips" prefix```
