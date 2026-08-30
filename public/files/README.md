# public/files/

Downloadable documents.

The PI CV is expected at:

```
public/files/yerin-hwang-cv.pdf
```

While that file is absent, the CV button on the People page is not rendered at
all — there is no disabled or dead link. Dropping the PDF in makes the button
appear on the next build.

To use a different file name, update `cvPath` in `src/data/site.ts`.
