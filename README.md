# Web de Buelta ta Saltoka Gimnasia Kluba

Web estática (HTML + CSS, sin dependencias) del club de gimnasia de trampolín Buelta ta Saltoka (Bilbao).
Castellano en la raíz y euskera en `eu/`, con las mismas páginas y nombres de archivo en los dos idiomas.

## Estructura

| Archivo | Contenido |
|---|---|
| `index.html` / `eu/index.html` | Inicio |
| `club.html` / `eu/club.html` | El club / Kluba |
| `entrena.html` / `eu/entrena.html` | Horario, lugar, requisitos y cómo apuntarse |
| `competiciones.html` / `eu/competiciones.html` | Competiciones, logros y galería |
| `socios.html` / `eu/socios.html` | Asamblea General, convocatorias y carpeta privada de socios |
| `contacto.html` / `eu/contacto.html` | Contacto, aviso legal y privacidad |
| `css/estilos.css` | Estilos comunes (colores en `:root`, modo oscuro automático) |
| `js/menu.js` | Menú desplegable en móvil |
| `img/` | Logo, iconos y fotos (`img/fotos/`, cada foto en tamaño normal y `-sm`) |

Cabecera y pie se repiten en cada página: si cambias un enlace del menú o del pie, cámbialo en las 12 páginas.

## Publicar la web (GitHub Pages)

1. En GitHub: **Settings → Pages**.
2. En *Build and deployment*, elige **Deploy from a branch**.
3. Selecciona la rama donde esté la web y la carpeta **`/ (root)`**, y pulsa **Save**.
4. En unos minutos la web estará en `https://enaizabil.github.io/Web-Saltoka/`.

## Tareas habituales

### Publicar una convocatoria de asamblea

Los estatutos (art. 21) obligan a publicar la convocatoria en la web oficial **con al menos 15 días de antelación**.

1. Sube la convocatoria y la documentación a la carpeta privada de socios del Drive
   (`Saltoka / Saltoka - Documentación socios (privado)`).
2. En `socios.html`, sustituye el bloque marcado con el comentario `CONVOCATORIA` por la fecha, la hora,
   el lugar (1ª y 2ª convocatoria) y el orden del día. Haz lo mismo en `eu/socios.html` (comentario `DEIALDIA`).
3. Cuando se celebre la asamblea, vuelve a dejar el aviso de «no hay ninguna asamblea convocada» con la fecha de la última.

### Dar acceso a la carpeta de socios

La carpeta es privada. En Google Drive: botón derecho → **Compartir** → añade el correo de cada socio o socia
con permiso de **Lector**. No uses «Cualquier persona con el enlace»: anularía la protección.

### Añadir o cambiar fotos

- Publica solo fotos de deportistas con **autorización de imagen firmada**, y sin nombres en el archivo ni en el pie de foto.
- Guarda cada foto en dos tamaños dentro de `img/fotos/`: `nombre.jpg` (unos 1400 px de ancho) y `nombre-sm.jpg` (unos 700 px).
  Quita los metadatos (EXIF/GPS) antes de subirlas.

### Cambiar horario, correo o Instagram

Busca el texto en las 12 páginas (por ejemplo, `10:00` o `saltokacg@gmail.com`) y cámbialo en todas.
