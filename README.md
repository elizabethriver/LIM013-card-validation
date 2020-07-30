# Título:Validación de tarjeta de TIENDA AGROMUJER "Insumos agrícolas para la mujer campesina" 

## Índice

* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. Forma de descargar, instalar y ejecutar la aplicación e una introducción.](#2-Forma-de-descargar-instalar-y-ejecutar-la-aplicación-e-una-introducción)
* [3. Principales usuarios de producto](#3-principales-usuarios-de-producto)
* [4. Objetivos de los usuarios en relación con tu producto](#4-objetivos-de-los-usuarios-en-relación-con-tu-producto)
* [5. Respuesta del producto a la resolución de problema del usuario](#5-Respuesta-del-producto-a-la-resolución-de-problema-del-usuario)
* [6. Foto del primer prototipo](#6-Foto-del-primer-prototipo)
* [7. Feedback recibido](#7-Feedback-recibido)
* [8. Imagen del prototipo final](#8-Imagen-del-prototipo-final)
* [9. Objetivos de aprendizaje](#9-Objetivos-de-aprendizaje)
* [10. Respuesta del producto a la resolución de problema del usuario](#10-JavaScript-pruebas-unitarias)

***

## 1. Resumen del proyecto
Es una app web de e-commerce de insumos agrícolas y se valida el pago con tarjeta de credito con el algortimo de luhn.

![2020-07-30T10_53_40](https://user-images.githubusercontent.com/63525613/88966527-10e88500-d272-11ea-9234-08695757c85d.png)


## 2. Forma de descargar, instalar y ejecutar la aplicación e una introducción.
Esto es una app web que el usuario (cliente) puede acceder desde la pagina principal de la tienda. 

Una vez, seleccionado su compra y adjuntado a su carrito de venta, realiza el pago del monto cotizado. 

La pagina da bienvenida al usuario, preguntandole su nombre.
El usuario incorpora su nombre, y le dan un msj de bienvenida
A partir de ello, el usuario da continuar con el proceso de compra y aparecera un formulario a rellenar los siguientes labels: nombre, apellido, año y mes de expedición, cvv y número de tarjeta.

Si el usuario incorporo los datos como se le indico, aparecera otra vista donde se diga: Estimada usuario, compra procesada, el numero de tarjeta es valida y termina en los XXXXXXXXX1234 digitos. 

Si el numero de tarjeta fue erronea, el usuario recibira otro msj: Estimada usuario, su compra fue rechazada, el numero de tarjeta fue invalida, y termina en los XXXXXXXXX1234 digitos. 

En ambos casos se despliega un boton de volver a la primera vista. 

## 3. Principales usuarios de producto

El usuario: Mujeres campesinas dedicadas a las actividades agrícolas y bancarizadas, con acceso a internet. 
El perfil del usuario es el siguiente:
1.1 promedio de 30 años dedicadas a las actividades y bancarizadas por primera vez
1.2 secundaria terminada (ha mejorado)
1.3 el 52% de lo más de 500 mil clientes de ahorro y crédito de Financiera Confianza son mujeres
1.4 Minimizar los costos logistico (tiempo y dinero) de busqueda y compra de insumos en otros proveedores
Fuentes: INEI (https://emprendedor.pe/finanzas/mas-de-la-mitad-de-nuevos-bancarizados-en-peru-son-mujeres/)

El cliente: Administracion de TIENDA AGROMUJER "Insumos agrícolas para la mujer campesina" con pagina web e-commerce. 
Este cliente busca acceder a ese mercado aún no abordado. 

## 4. Objetivos de los usuarios en relación con tu producto

Con respecto al usuario cliente, lograr una compra efectiva en tiempo y fácil. 

Con respecto al vendedor, tener una venta con seguridad con la validacion del numero de la tarjeta.

## 5. Respuesta del producto a la resolución de problema del usuario

Con respecto al usuario cliente, le permite hacer una compra de forma rapida y amigable, protegiendo sus datos.

Con respecto al vendedor, le permite tener una venta segura con datos verificados aplicando la validacion del IMEI de la tarjeta de credito.

## 6. Foto del primer prototipo

A continuación, se presenta el primer prototipo creado para la aplicación
[](url)
![Elizabeth Rivera Ura's Team Colors (1)](https://user-images.githubusercontent.com/63525613/88968124-75a4df00-d274-11ea-9ffd-c30b4b38005f.png)

## 7. Feedback recibido 

Ser más personalizado la vista de bienvenida, por ello, se incorpora un msj de bienvenida y nombre del usuario

Poner los labels de forma horizontal en el formulario, una seguida de la otra. 

Disminuir el tamaño del formato

La vista de resultados deberia de verse en un cuadrito, más que un msj de prompt, ya sea para validar compra como no. 

Cambiar el banckground por una imagen mejor definida.

A continuación se visualiza el prototipo con algunas modificaciones

![name] (imagenes_readme\Elizabeth Rivera Ura's Team Colors (1).png)


## 8. Imagen del prototipo final

A continuación se visualiza el prototipo final

![name] (imagenes_readme\Elizabeth Rivera Ura's Team Colors (Copy).png)

## 9. Objetivos de aprendizaje

Se considero como objetivos de aprendizajes lo siguiente:

### HTML y CSS

* [X] El Uso de HTML semántico.
* [X] Uso de selectores de CSS.
* [X] Construcción de la aplicación según el diseño realizado (maquetación).

### DOM

* [X] Uso y manejo de selectores y eventos del DOM.
* [X] Manejo de eventos del DOM.
* [X] Manipulación dinámica del DOM.

### JavaScript

* [X] Manipulación de strings.
* [X] Uso de condicionales (if-else)
* [X] Uso de bucles (for)
* [X] Uso de funciones (parámetros | argumentos | valor de retorno)
* [X] Declaración correcta de variables (const & let)

### Testing

* [X] [Testeo unitario.]

### Estructura del código y guía de estilo

* [X] Organizar y dividir el código en módulos (Modularización)
* [X] Uso de identificadores descriptivos (Nomenclatura | Semántica)
* [X] Uso de linter (ESLINT)

### Git y GitHub

* [X] Uso de comandos de git (add | commit | status | push)
* [X] Manejo de repositorios de GitHub (clone | fork | gh-pages)

### UX

* [X] Diseñar la aplicación pensando y entendiendo al usuario.
* [X] Crear prototipos para obtener feedback e iterar.
* [X] Aplicar los principios de diseño visual (contraste, alineación, jerarquía)

## 10. JavaScript - pruebas unitarias

Las pruebas unitarias deben dar un X en _coverage_ (cobertura), 100%
_statements_ (sentencias), 100%  _functions_ (funciones) y _lines_ (líneas); y 83.33% de _branches_ (ramas).

![name] (imagenes_readme\test.png)

***

