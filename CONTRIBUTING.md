# Guía de Contribución

¡Gracias por tu interés en contribuir a nuestro proyecto! Esta guía te ayudará a entender cómo puedes participar y hacer contribuciones significativas.

## Configuración del Entorno Local

1. Clona el repositorio:
```bash
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_PROYECTO>
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

## Cómo Agregar o Eliminar Idiomas


1. Navega al archivo `src/contexts/LanguageContext.tsx`
2. Para agregar un nuevo idioma:
   - Añade el código del idioma al tipo `Language`:
   ```typescript
   type Language = 'en' | 'es' | 'fr' | 'de' | 'tu-nuevo-idioma';
   ```
   - Añade las traducciones para el nuevo idioma en el objeto `translations`:
   ```typescript
   const translations = {
     'tu-nuevo-idioma': {
       // Navigation
       'nav.home': 'Traducción',
       // ... resto de traducciones
     }
   };
   ```

3. Para eliminar un idioma:
   - Navega al archivo `src/components/LanguageSelector.tsx`
   - Elimina el código `languages`
   - Elimina el objeto de traducciones 

## Hero images

heroImages

## Cómo Actualizar las Iniciativas

1. Navega al archivo `src/data/initiatives.json`
2. Cada iniciativa debe seguir este formato:
```json
{
  "id": "identificador-unico",
  "title": {
    "en": "English Title",
    "es": "Título en Español",
    "fr": "Titre en Français",
    "de": "Deutscher Titel"
  },
  "description": {
    "en": "English description",
    "es": "Descripción en español",
    "fr": "Description en français",
    "de": "Deutsche Beschreibung"
  },
  "image": "ruta/a/la/imagen.jpg",
  "category": "categoría",
  "tags": ["tag1", "tag2"]
}
```

3. Para agregar una nueva iniciativa:

   - Navega al archivo `src/data/initiatives.json`
   - Añade un nuevo objeto al array `initiatives`
   - Asegúrate de incluir todas las traducciones necesarias
   - Proporciona una imagen relevante
   - Asigna categorías y etiquetas apropiadas

4. Para modificar una iniciativa existente:
   - Localiza la iniciativa por su `id`
   - Actualiza los campos necesarios
   - Asegúrate de mantener todas las traducciones actualizadas

5. Para eliminar una iniciativa:
   - Elimina el objeto correspondiente del array `initiatives`

## Cómo Actualizar el FAQ

1. Navega al archivo `src/data/faq.json`
2. Cada entrada del FAQ debe seguir este formato:
```json
{
  "id": "identificador-unico",
  "question": {
    "en": "English question",
    "es": "Pregunta en español",
    "fr": "Question en français",
    "de": "Frage auf Deutsch"
  },
  "answer": {
    "en": "English answer",
    "es": "Respuesta en español",
    "fr": "Réponse en français",
    "de": "Antwort auf Deutsch"
  }
}
```

3. Para agregar una nueva pregunta:
   - Añade un nuevo objeto al array `faq`
   - Asegúrate de incluir todas las traducciones necesarias
   - Mantén las respuestas concisas y claras

4. Para modificar una entrada existente:
   - Localiza la entrada por su `id`
   - Actualiza la pregunta y/o respuesta
   - Asegúrate de mantener todas las traducciones actualizadas

5. Para eliminar una entrada:
   - Elimina el objeto correspondiente del array `faq`

## Buenas Prácticas

1. **Commits**:
   - Usa mensajes de commit descriptivos
   - Sigue el formato: `tipo(alcance): descripción`
   - Ejemplo: `feat(idiomas): agrega soporte para español`

2. **Pull Requests**:
   - Crea una rama descriptiva para tu PR
   - Incluye una descripción clara de los cambios
   - Asegúrate de que todos los tests pasen
   - Solicita revisión de al menos un miembro del equipo

3. **Código**:
   - Sigue las convenciones de código existentes
   - Escribe tests para nuevas funcionalidades
   - Mantén el código limpio y bien documentado

## Estructura del Proyecto

```
src/
├── components/     # Componentes React
├── contexts/      # Contextos de React (LanguageContext)
├── data/          # Datos estáticos (FAQ, iniciativas)
├── services/      # Servicios (miembros)
├── styles/        # Estilos globales
└── utils/         # Utilidades y helpers
```

## Soporte

Si tienes preguntas o necesitas ayuda:
1. Revisa la documentación existente
2. Abre un issue en GitHub
3. Contacta al equipo de mantenimiento

## Licencia

Al contribuir, aceptas que tus contribuciones serán licenciadas bajo la misma licencia que el proyecto. 